
export default function Home() {
  return (
    <main style={{fontFamily:'Arial, sans-serif', background:'#0f0f0f', color:'#fff'}}>
      <section style={{padding:'100px 24px', textAlign:'center',
        background:'linear-gradient(135deg,#111,#1f1a0a)'}}>
        <div style={{
          width:'96px', height:'96px', margin:'0 auto 24px',
          borderRadius:'24px',
          background:'linear-gradient(135deg,#fff3b0,#f4c542,#8a5a00)',
          display:'flex', alignItems:'center', justifyContent:'center',
          color:'#111', fontWeight:'900', fontSize:'40px'
        }}>VH</div>
        <h1 style={{fontSize:'64px', margin:'0'}}>ValleyHome Architect</h1>
        <p style={{fontSize:'24px', color:'#f4c542', marginTop:'16px'}}>
          Designing Luxury with Harmony
        </p>
        <p style={{maxWidth:'900px', margin:'24px auto', lineHeight:1.8, color:'#ddd'}}>
          Luxury modern architecture with terracotta accents, Vastu-based planning,
          and premium interior design.
        </p>
        <p>📞 9957337943 / 8822641991</p>
        <p>📍 Lachit Borphukan Nagar, Path No. 2, Near Punjan Chariali, Sivasagar, Assam</p>
      </section>
    </main>
  );
}
