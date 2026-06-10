import numpy as np

PHI=(1+5**0.5)/2
TAU=2*np.pi

# ---- formula kernel (matches TS) ----
def rate_for(k, ratio): return (1.0/ratio)**k

def torus_pt(ph, D, L=2):
    Rmaj, rmin = D*0.9, D*0.42
    a0, a1 = ph[0], ph[1]
    x=(Rmaj+rmin*np.cos(a1))*np.cos(a0); y=(Rmaj+rmin*np.cos(a1))*np.sin(a0); z=rmin*np.sin(a1)
    return np.array([x,y,z])

def lissajous_pt(ph, D, L):
    return np.array([D*np.sin(ph[0]), D*np.sin(ph[1]) if L>=2 else 0.0, D*np.sin(ph[2]) if L>=3 else 0.0])

def epicyclic_pt(ph, D, L):
    x=y=z=0.0; rad=D*0.7; n=min(L+1,4)
    for i in range(n):
        x+=rad*np.cos(ph[i]); y+=rad*np.sin(ph[i])
        if i%2==1: z+=rad*0.5*np.sin(ph[i])
        rad*=0.5
    return np.array([x,y,z])

# staged SE(4): 5x5 operator, scheduled plane rotations + self-scaling displacement, project 4D->3D (ortho-w)
SCHED=[(0,1),(1,2),(2,3),(0,3),(0,2),(1,3)]
def staged_pt(ph, D, L, k_hole=2.0):
    M=np.eye(5)
    for kk in range(L):
        cyc=kk//2; idx=kk%2
        if idx==0 and cyc>=1:
            d = k_hole*(k_hole+1)**(cyc-1)*D
            T=np.eye(5); T[0,4]+=d; M=T@M
        i,j=SCHED[kk%6]; th=ph[kk]
        R=np.eye(5); c,s=np.cos(th),np.sin(th)
        R[i,i]=c; R[i,j]=-s; R[j,i]=s; R[j,j]=c
        M=R@M
    seed=np.array([D,0,0,0,1.0]); p=M@seed
    return p[:3]  # ortho-w: drop w

# =====================================================================
# TOY A — SIGNAL LENS: spectrum of z(t)=x+iy, vs exact torus ground truth
# =====================================================================
print("="*70)
print("TOY A — SIGNAL LENS")
print("="*70)

def sample_series(fn, ratio, D, L, dt, N):
    t=np.arange(N)*dt
    ph_rates=np.array([rate_for(k,ratio) for k in range(L)])
    xs=np.zeros(N); ys=np.zeros(N)
    for n in range(N):
        ph=np.zeros(8)
        ph[:L]=t[n]*ph_rates
        p=fn(ph,D,L)
        xs[n]=p[0]; ys[n]=p[1]
    return t, xs+1j*ys

def spectrum_peaks(z, dt, topk=6, thresh_frac=0.02):
    N=len(z); Z=np.fft.fft(z)/N
    omega=TAU*np.fft.fftfreq(N,d=dt)
    mag=np.abs(Z)
    order=np.argsort(mag)[::-1]
    peaks=[]; seen=[]
    for idx in order:
        if mag[idx]<thresh_frac*mag.max(): break
        w=omega[idx]
        if any(abs(w-s)<TAU/(N*dt)*1.5 for s in seen): continue  # dedupe adjacent bins
        seen.append(w); peaks.append((w,mag[idx]))
        if len(peaks)>=topk: break
    return sorted(peaks, key=lambda p:p[0])

# --- TORUS exact ground truth ---
# x+iy = Rmaj*e^{iw0 t} + (rmin/2)*e^{i(w0+w1)t} + (rmin/2)*e^{i(w0-w1)t}
ratio=np.pi; D=80.0; L=2
w0=rate_for(0,ratio); w1=rate_for(1,ratio)
Rmaj, rmin = D*0.9, D*0.42
predicted=[(w0-w1, rmin/2),(w0, Rmaj),(w0+w1, rmin/2)]
print(f"\nTorus, ratio=pi, D={D}: predicted lines (angular freq, amplitude):")
for w,a in predicted: print(f"   omega={w:+.4f}  amp={a:.3f}")

dt=0.5; N=8192
t,z=sample_series(torus_pt, ratio, D, L, dt, N)
peaks=spectrum_peaks(z, dt, topk=4)
print(f"\nMeasured peaks (FFT, N={N}, dt={dt}):")
ok=True
for w_m,a_m in peaks:
    # match to nearest predicted
    wp,ap=min(predicted, key=lambda pr:abs(pr[0]-w_m))
    df=abs(w_m-wp); da=abs(a_m-ap)/ap
    flag="OK" if (df<0.01 and da<0.02) else "**OFF**"
    if flag!="OK": ok=False
    print(f"   omega={w_m:+.4f}  amp={a_m:.3f}   -> pred omega={wp:+.4f} amp={ap:.3f}  | dOmega={df:.4f} dAmp%={da*100:.2f}  [{flag}]")
print(f"\nTORUS SPECTRUM GROUND-TRUTH: {'PASS' if ok else 'FAIL'}")

# --- AUTOCORRELATION: commensurate (rational) re-peaks; incommensurate (pi) does not ---
def autocorr(z):
    z=z-z.mean(); N=len(z)
    ac=np.correlate(z, z, mode='full')[N-1:]
    return np.abs(ac)/np.abs(ac[0])

print("\n--- Autocorrelation: re-peak test (closure) ---")
for label,ratio_t in [("commensurate 1:2 (rational)",2.0),("incommensurate pi",np.pi),("incommensurate phi",PHI)]:
    t,z=sample_series(epicyclic_pt, ratio_t, D, 3, 0.5, 6000)
    ac=autocorr(z)
    # look for a re-peak after the first decorrelation (ignore tau<5% of window)
    start=len(ac)//20
    repeak=ac[start:].max()
    print(f"   {label:32s}: max |autocorr| after start = {repeak:.3f}  -> {'RE-PEAKS (closed/periodic)' if repeak>0.9 else 'no re-peak (quasiperiodic, fills)'}")

# =====================================================================
# TOY B — SYMMETRY PROBE: chamfer residual / NN-baseline, on known clouds
# =====================================================================
print("\n"+"="*70)
print("TOY B — SYMMETRY PROBE")
print("="*70)

rng=np.random.default_rng(0)

def nn_dist(A, B):
    # mean over A of min distance to B  (brute force; A,B are (n,3))
    d=np.sqrt(((A[:,None,:]-B[None,:,:])**2).sum(-1))
    return d.min(1).mean()

def baseline_nn(P):
    d=np.sqrt(((P[:,None,:]-P[None,:,:])**2).sum(-1))
    np.fill_diagonal(d, np.inf)
    return d.min(1).mean()

def reflect(P, n):
    n=np.array(n,float); n/=np.linalg.norm(n)
    return P - 2*(P@n)[:,None]*n[None,:]

def rotate(P, axis, ang):
    a=np.array(axis,float); a/=np.linalg.norm(a)
    c,s=np.cos(ang),np.sin(ang); K=np.array([[0,-a[2],a[1]],[a[2],0,-a[0]],[-a[1],a[0],0]])
    R=np.eye(3)+s*K+(1-c)*(K@K)
    return P@R.T

def invert(P): return -P

def sym_score(P, transformed):
    P=P-P.mean(0); transformed=transformed-transformed.mean(0)  # both centered
    base=baseline_nn(P)
    resid=nn_dist(transformed, P)
    return resid/base  # ~1 = symmetric (transformed pts as close as pts are to each other); >>1 = asymmetric

# --- test clouds with KNOWN symmetry ---
def sphere_cloud(n=1500):
    v=rng.normal(size=(n,3)); v/=np.linalg.norm(v,axis=1)[:,None]; return v*50

def ellipsoid_cloud(n=1500):  # 2-fold about each axis, NOT 3-fold about a generic axis; mirror-symmetric
    v=rng.normal(size=(n,3)); v/=np.linalg.norm(v,axis=1)[:,None]
    return v*np.array([60,40,25])

def lopsided_cloud(n=1500):   # sphere with a one-sided lump on +x  -> breaks mirror across x
    v=rng.normal(size=(n,3)); v/=np.linalg.norm(v,axis=1)[:,None]; v=v*50
    lump = v[:,0]>30
    v[lump,0]+=35
    return v

print("\nScore = chamfer_residual / NN_baseline.  ~1 => symmetric, >>1 => NOT symmetric.\n")
tests=[
    ("SPHERE", sphere_cloud()),
    ("ELLIPSOID (60/40/25)", ellipsoid_cloud()),
    ("LOPSIDED (+x lump)", lopsided_cloud()),
]
for name,P in tests:
    P=P-P.mean(0)
    print(f"{name}:")
    print(f"   mirror ⟂x      : {sym_score(P, reflect(P,[1,0,0])):.2f}")
    print(f"   mirror ⟂y      : {sym_score(P, reflect(P,[0,1,0])):.2f}")
    print(f"   point inversion: {sym_score(P, invert(P)):.2f}")
    print(f"   rot 180° about z: {sym_score(P, rotate(P,[0,0,1],np.pi)):.2f}")
    print(f"   rot 120° about z: {sym_score(P, rotate(P,[0,0,1],TAU/3)):.2f}")
    print()

# expected: SPHERE all ~1; ELLIPSOID mirrors+inversion+180 ~1 but 120 high; LOPSIDED mirror⟂x high (correctly fails)
print("VERIFICATION EXPECTATIONS:")
print("  SPHERE: every op ~1 (fully symmetric)         <- probe must PASS all")
print("  ELLIPSOID: mirrors/inversion/180° ~1, 120° high <- probe must DISCRIMINATE order")
print("  LOPSIDED: mirror⟂x must be HIGH                <- probe must FAIL to find absent symmetry")
