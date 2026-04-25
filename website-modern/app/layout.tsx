import "./globals.css";
import Navbar from "@/Components/Navbar";

export const metadata = {
  title: "My Construction Website",
  description: "Construction and design services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <footer style={{ marginTop: "40px", padding: "20px", borderTop: "1px solid #ddd" }}>
          <p>© 2026 My Construction Website</p>
        </footer>
      </body>
    </html>
  );
}