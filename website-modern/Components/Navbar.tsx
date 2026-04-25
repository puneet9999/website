export default function Navbar() {
  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
      <a href="/">Home</a> |{" "}
      <a href="/services">Services</a> |{" "}
      <a href="/contact">Contact</a>
    </nav>
  );
}