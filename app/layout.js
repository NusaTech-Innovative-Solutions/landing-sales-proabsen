import iconProAbsen from "../iconProAbsen-square.webp";
import proAbsenImage from "../ProAbsen.webp";
import "../styles.css";

const siteUrl = "https://landing-sales-proabsen.vercel.app";
const logoUrl = new URL(iconProAbsen.src, siteUrl).toString();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "ProAbsen | Aplikasi Absensi Karyawan, Shift & Laporan",
  description:
    "Aplikasi absensi karyawan untuk HR: kelola presensi GPS, shift, izin, lembur, dan laporan dalam satu platform cloud.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "ProAbsen",
    title: "ProAbsen | Aplikasi Absensi Karyawan, Shift & Laporan",
    description:
      "Kelola presensi GPS, shift, izin, lembur, dan laporan karyawan dalam satu platform cloud.",
    images: [
      {
        url: proAbsenImage.src,
        width: 2816,
        height: 1536,
        alt: "ProAbsen, platform manajemen kehadiran karyawan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProAbsen | Aplikasi Absensi Karyawan, Shift & Laporan",
    description:
      "Kelola presensi GPS, shift, izin, lembur, dan laporan karyawan dalam satu platform cloud.",
    images: [proAbsenImage.src],
  },
  icons: {
    icon: [{ url: iconProAbsen.src, type: "image/webp" }],
  },
};

export const viewport = {
  themeColor: "#1e3a8a",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ProAbsen",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "ProAbsen",
      alternateName: "ProAbsen - Aplikasi Absensi Karyawan",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "id-ID",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
