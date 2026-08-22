import iconProAbsen from "../iconProAbsen.jpg";
import "../styles.css";

export const metadata = {
  title: "ProAbsen | Manajemen Kehadiran Berbasis Cloud",
  description:
    "ProAbsen membantu perusahaan mengelola absensi, shift, izin, dan laporan kehadiran dalam satu platform cloud.",
  icons: {
    icon: [{ url: iconProAbsen.src, type: "image/jpeg" }],
  },
};

export const viewport = {
  themeColor: "#1e3a8a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Sora:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}