export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lab 8 – Vercel Deployment</h1>
      <p>Name: Samreen Farhat</p>
      <p>Enrollment: 01-131232-079</p>
      
      <div style={{ 
        marginTop: "40px", 
        padding: "20px", 
        // backgroundColor: "#f0fdf4", 
        borderRadius: "10px",
        maxWidth: "400px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <h2 style={{ color: "#166534" }}>✅ Completed Labs</h2>
        <ul style={{ 
          listStyle: "none", 
          padding: 0,
          textAlign: "left",
          display: "inline-block"
        }}>
          <li>Lab 2 &3 &4: Docker</li>
          <li>Lab 6: LocalStack</li>
          <li>Lab 7: Terraform</li>
          <li>Lab 8: Vercel</li>
        </ul>
        <p style={{ 
          marginTop: "15px", 
          fontSize: "14px", 
          color: "#166534" 
        }}>
          This is a preview deployment from feature branch!
        </p>
      </div>
    </main>
  );
}