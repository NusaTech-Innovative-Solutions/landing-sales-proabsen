"use client" ;

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BatteryFull,
  Building2,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  CircleCheckBig,
  ClipboardList,
  FileChartColumn,
  FileCheck2,
  LayoutDashboard,
  LockKeyhole,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  NotebookTabs,
  RefreshCw,
  Route,
  ScanFace,
  ShieldCheck,
  SlidersHorizontal,
  UserRoundPlus,
  Users,
  Wifi,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import iconProAbsen from "../iconProAbsen-square.webp";
import proAbsenImage from "../ProAbsen.webp";
import shotDashboard from "../new foto/dekstop/dashboard.webp";
import shotDataKaryawan from "../new foto/dekstop/data karyawan.webp";
import shotDataPerusahaan from "../new foto/dekstop/data perusahaan.webp";
import shotLaporanAbsensi from "../new foto/dekstop/laporan absensi.webp";
import shotLaporanManajemen from "../new foto/dekstop/laporan managemen.webp";
import shotLaporanSlipGaji from "../new foto/dekstop/laporan slip gaji.webp";
import shotLogin from "../new foto/dekstop/login.webp";
import shotPengaturanPenggajian from "../new foto/dekstop/pengaturan penggajian.webp";
import shotPenjadwalan from "../new foto/dekstop/penjadwalan.webp";
import shotPengajuan from "../new foto/dekstop/pengajuan izin cuti lembur.webp";
import shotRiwayat from "../new foto/dekstop/riwayat aktivitas.webp";
import shotMobile1 from "../new foto/mobile/1.webp";
import shotMobile2 from "../new foto/mobile/2.webp";
import shotMobile3 from "../new foto/mobile/3.webp";
import shotMobile4 from "../new foto/mobile/4.webp";
import shotMobile5 from "../new foto/mobile/5.webp";
import shotMobile6 from "../new foto/mobile/6.webp";
import shotMobile7 from "../new foto/mobile/7.webp";
import shotMobile8 from "../new foto/mobile/8.webp";

const navigationItems = [
  ["solusi", "Solusi"],
  ["sasaran", "Untuk siapa"],
  ["fitur", "Fitur"],
  ["cara-kerja", "Cara kerja"],
  ["faq", "FAQ"],
];

const trialLink = "https://proabsen.nisgroup.id/register";
const whatsappNumber = "6285176735791";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Halo Tim ProAbsen, saya ingin berkonsultasi tentang aplikasi absensi karyawan.",
)}`;

const faqItems = [
  {
    question: "Apakah ProAbsen cocok untuk tim lapangan?",
    answer:
      "Ya. Lokasi kerja dapat ditentukan dengan geofence, sehingga tim lapangan tetap mengikuti area dan jadwal yang sudah ditetapkan.",
  },
  {
    question: "Apakah karyawan perlu perangkat khusus?",
    answer:
      "Tidak. Karyawan dapat menggunakan perangkat yang biasa dipakai untuk mengakses layanan perusahaan selama memiliki koneksi internet.",
  },
  {
    question: "Bisakah data digunakan untuk payroll?",
    answer:
      "Bisa. Rekap kehadiran dapat diekspor agar proses penggajian dan administrasi HR tidak membutuhkan input ulang.",
  },
  {
    question: "Berapa lama proses implementasinya?",
    answer:
      "Durasi mengikuti jumlah lokasi, kebijakan, dan data karyawan. Tim ProAbsen akan membantu menyiapkan alur implementasi yang sesuai.",
  },];

const showcaseItems = [
  {
    src: shotDashboard,
    title: "Ringkasan kehadiran",
    description: "Jumlah hadir, terlambat, dan belum absen terbaca per hari.",
    alt: "Tangkapan layar ringkasan kehadiran harian ProAbsen",
    safe: "15%",
  },
  {
    src: shotDataKaryawan,
    title: "Data karyawan",
    description: "Peran, kategori kerja, dan hak akses diatur per orang.",
    alt: "Tangkapan layar halaman data karyawan ProAbsen",
    safe: "15%",
  },
  {
    src: shotDataPerusahaan,
    title: "Data perusahaan",
    description: "Profil dan informasi perusahaan tersimpan dalam satu panel.",
    alt: "Tangkapan layar halaman data perusahaan ProAbsen",
    safe: "15%",
  },
  {
    src: shotLaporanAbsensi,
    title: "Laporan absensi",
    description: "Rekap kehadiran karyawan siap ditinjau dan diekspor.",
    alt: "Tangkapan layar laporan absensi ProAbsen",
    safe: "15%",
  },
  {
    src: shotLaporanManajemen,
    title: "Laporan manajemen",
    description: "Analisis kehadiran dan operasional siap ditinjau.",
    alt: "Tangkapan layar laporan manajemen ProAbsen",
    safe: "15%",
  },
  {
    src: shotLaporanSlipGaji,
    title: "Laporan slip gaji",
    description: "Informasi slip gaji tersusun rapi untuk kebutuhan administrasi.",
    alt: "Tangkapan layar laporan slip gaji ProAbsen",
    safe: "15%",
  },
  {
    src: shotLogin,
    title: "Login web",
    description: "Akses panel manajemen dari layar kerja yang familiar.",
    alt: "Tangkapan layar halaman login web ProAbsen",
    safe: "50%",
  },
  {
    src: shotPengaturanPenggajian,
    title: "Pengaturan penggajian",
    description: "Aturan dan komponen penggajian dapat diatur sesuai kebutuhan.",
    alt: "Tangkapan layar pengaturan penggajian ProAbsen",
    safe: "15%",
  },
  {
    src: shotPenjadwalan,
    title: "Penjadwalan",
    description: "Jadwal kerja karyawan tersusun jelas dalam satu halaman.",
    alt: "Tangkapan layar penjadwalan karyawan ProAbsen",
    safe: "15%",
  },
  {
    src: shotPengajuan,
    title: "Izin, cuti & lembur",
    description: "Setiap pengajuan tercatat dengan status yang jelas.",
    alt: "Tangkapan layar pengajuan izin, cuti, dan lembur ProAbsen",
    safe: "15%",
  },
  {
    src: shotRiwayat,
    title: "Jejak aktivitas",
    description: "Semua peristiwa terekam dan bisa ditelusuri ulang.",
    alt: "Tangkapan layar riwayat aktivitas pengguna",
    safe: "29%",
  },
];

const activityItems = [
  {
    initials: "D",
    name: "Bapak Deni",
    action: "telah melakukan pendaftaran",
    city: "Bandung",
    time: "2 jam yang lalu",
    tone: "blue",
  },
  {
    initials: "A",
    name: "Ibu Anisa",
    action: "baru saja memulai trial",
    city: "Jakarta",
    time: "4 jam yang lalu",
    tone: "purple",
  },
  {
    initials: "R",
    name: "Bapak Rudi",
    action: "telah melakukan pendaftaran",
    city: "Surabaya",
    time: "kemarin",
    tone: "green",
  },
  {
    initials: "S",
    name: "Ibu Sari",
    action: "baru saja memulai trial",
    city: "Yogyakarta",
    time: "kemarin",
    tone: "purple",
  },
  {
    initials: "F",
    name: "Bapak Fajar",
    action: "telah melakukan pendaftaran",
    city: "Semarang",
    time: "2 hari yang lalu",
    tone: "blue",
  },
  {
    initials: "M",
    name: "Ibu Maya",
    action: "baru saja memulai trial",
    city: "Bekasi",
    time: "2 hari yang lalu",
    tone: "green",
  },
  {
    initials: "A",
    name: "Bapak Arif",
    action: "telah melakukan pendaftaran",
    city: "Medan",
    time: "3 hari yang lalu",
    tone: "blue",
  },
  {
    initials: "N",
    name: "Ibu Nadia",
    action: "baru saja memulai trial",
    city: "Makassar",
    time: "3 hari yang lalu",
    tone: "purple",
  },
  {
    initials: "T",
    name: "Bapak Taufik",
    action: "telah melakukan pendaftaran",
    city: "Tangerang",
    time: "4 hari yang lalu",
    tone: "green",
  },
  {
    initials: "L",
    name: "Ibu Linda",
    action: "baru saja memulai trial",
    city: "Depok",
    time: "4 hari yang lalu",
    tone: "blue",
  },
  {
    initials: "H",
    name: "Bapak Hendra",
    action: "telah melakukan pendaftaran",
    city: "Balikpapan",
    time: "5 hari yang lalu",
    tone: "purple",
  },
  {
    initials: "C",
    name: "Ibu Citra",
    action: "baru saja memulai trial",
    city: "Bali",
    time: "5 hari yang lalu",
    tone: "green",
  },
];

const mobileShowcaseItems = [
  {
    src: shotMobile1,
    title: "Login karyawan",
    description: "Karyawan masuk dengan kode dan kata sandi dari ponselnya.",
    alt: "Tangkapan layar login karyawan ProAbsen di ponsel",
  },
  {
    src: shotMobile2,
    title: "Validasi lokasi",
    description: "Lokasi kehadiran diverifikasi sebelum karyawan melakukan presensi.",
    alt: "Tangkapan layar validasi lokasi aplikasi mobile ProAbsen",
  },
  {
    src: shotMobile3,
    title: "Presensi harian",
    description: "Status hadir dan riwayat presensi terlihat dalam satu layar.",
    alt: "Tangkapan layar presensi harian aplikasi mobile ProAbsen",
  },
  {
    src: shotMobile4,
    title: "Pengajuan izin",
    description: "Karyawan dapat memilih jenis pengajuan dan mengirimkannya dari ponsel.",
    alt: "Tangkapan layar pengajuan izin aplikasi mobile ProAbsen",
  },
  {
    src: shotMobile5,
    title: "Aktivitas kehadiran",
    description: "Catatan presensi terbaru tersusun jelas berdasarkan waktu.",
    alt: "Tangkapan layar aktivitas kehadiran aplikasi mobile ProAbsen",
  },
  {
    src: shotMobile6,
    title: "Detail pengajuan",
    description: "Pengajuan izin dan cuti dilengkapi detail yang mudah dipahami.",
    alt: "Tangkapan layar detail pengajuan aplikasi mobile ProAbsen",
  },
  {
    src: shotMobile7,
    title: "Tugas saya",
    description: "Tugas harian dapat dibuat dan dipantau langsung oleh karyawan.",
    alt: "Tangkapan layar tugas karyawan aplikasi mobile ProAbsen",
  },
  {
    src: shotMobile8,
    title: "Profil karyawan",
    description: "Menu pribadi dan pengaturan akun tersedia dalam satu tempat.",
    alt: "Tangkapan layar profil karyawan aplikasi mobile ProAbsen",
  },
];

function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? " brand--footer" : ""}`}
      href="#beranda"
      aria-label="ProAbsen, kembali ke beranda"
    >
      <span className="brand__icon">
        <Image src={iconProAbsen} alt="" priority={!footer} quality={100} />
      </span>
      <span className="brand__name">
        Pro<span>Absen</span>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [activeProduct, setActiveProduct] = useState("admin");
  const [openFaq, setOpenFaq] = useState(0);
  const [activeShot, setActiveShot] = useState(0);
  const [activeMobileShot, setActiveMobileShot] = useState(0);
  const [activeActivity, setActiveActivity] = useState(0);
  const [activityDismissed, setActivityDismissed] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHeaderScrolled(window.scrollY > 12);
    const closeDesktopMenu = () => {
      if (window.innerWidth > 780) setMenuOpen(false);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", closeDesktopMenu);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", closeDesktopMenu);
    };
  }, []);

  useEffect(() => {
    if (activityDismissed) return undefined;

    const activityTimer = window.setInterval(() => {
      setActiveActivity((current) => (current + 1) % activityItems.length);
    }, 7000);

    return () => window.clearInterval(activityTimer);
  }, [activityDismissed]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => {
      revealObserver.observe(element);
    });

    return () => revealObserver.disconnect();
  }, [activeProduct]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.05, 0.25, 0.5] },
    );

    document.querySelectorAll("main section[id]").forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, []);

  const selectAdjacentProduct = (event, currentProduct) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

    event.preventDefault();
    const products = ["admin", "employee"];
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const currentIndex = products.indexOf(currentProduct);
    const nextProduct = products[(currentIndex + direction + products.length) % products.length];
    setActiveProduct(nextProduct);
    document.getElementById(`tab-${nextProduct}`)?.focus();
  };

  const selectAdjacentShot = (event, currentIndex) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (currentIndex + direction + showcaseItems.length) % showcaseItems.length;
    setActiveShot(nextIndex);
    document.getElementById(`shot-${nextIndex}`)?.focus();
  };

  const selectAdjacentMobileShot = (event, currentIndex) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex =
      (currentIndex + direction + mobileShowcaseItems.length) % mobileShowcaseItems.length;
    setActiveMobileShot(nextIndex);
    document.getElementById(`mobile-shot-${nextIndex}`)?.focus();
  };

  return (
    <>
      <a className="skip-link" href="#konten">
        Lewati ke konten
      </a>

      <header className={`site-header${headerScrolled ? " is-scrolled" : ""}`}>
        <Brand />

        <nav
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          id="primary-nav"
          aria-label="Navigasi utama"
        >
          {navigationItems.map(([id, label]) => (
            <a
              key={id}
              className={activeSection === id ? "is-active" : undefined}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-demo"
            href={trialLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Coba gratis
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-controls="primary-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <main id="konten">
        <section className="hero" id="beranda" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <Image
            className="hero__symbol"
            src={iconProAbsen}
            alt=""
            aria-hidden="true"
            priority
            sizes="(max-width: 780px) 104vw, 64vw"
          />

          <div className="hero__content reveal is-visible">
            <p className="eyebrow">
              <span /> Platform kehadiran berbasis cloud
            </p>
            <h1 id="hero-title">Aplikasi Absensi GPS untuk Kantor &amp; Tim Lapangan</h1>
            <p className="hero__description">
              ProAbsen membantu HR mencatat kehadiran, mengatur shift, mengelola izin, dan menyiapkan laporan dari
              satu tempat yang mudah dipakai semua orang.
            </p>
            <p className="hero__offer">
              <strong>Gratis 30 hari</strong> · Tanpa kartu kredit
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href={trialLink} target="_blank" rel="noreferrer">
                Coba gratis 30 hari
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">
                Tanya via WhatsApp
                <MessageCircle aria-hidden="true" />
              </a>
            </div>
            <p className="hero__assurance">
              <ShieldCheck aria-hidden="true" />
              Data terpusat untuk HR, atasan, dan karyawan.
            </p>
          </div>

          <div className="hero__rail" aria-label="Fitur utama ProAbsen">
            <div className="hero__rail-item reveal is-visible">
              <MapPin aria-hidden="true" />
              <span>
                <small>Presisi lokasi</small>GPS &amp; geofence
              </span>
            </div>
            <div className="hero__rail-item reveal is-visible">
              <CalendarClock aria-hidden="true" />
              <span>
                <small>Jadwal fleksibel</small>Shift terkelola
              </span>
            </div>
            <div className="hero__rail-item reveal is-visible">
              <FileCheck2 aria-hidden="true" />
              <span>
                <small>Siap diproses</small>Rekap otomatis
              </span>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Keunggulan utama ProAbsen">
          <div className="trust-strip__item reveal is-visible">
            <CircleCheckBig aria-hidden="true" />
            <span>
              <strong>Gratis 30 hari</strong>
              Mulai tanpa kartu kredit
            </span>
          </div>
          <div className="trust-strip__item reveal is-visible">
            <MapPin aria-hidden="true" />
            <span>
              <strong>GPS &amp; geofence</strong>
              Validasi lokasi kerja
            </span>
          </div>
          <div className="trust-strip__item reveal is-visible">
            <Users aria-hidden="true" />
            <span>
              <strong>Web &amp; mobile</strong>
              Satu data untuk semua
            </span>
          </div>
          <div className="trust-strip__item reveal is-visible">
            <MessageCircle aria-hidden="true" />
            <span>
              <strong>Dibantu saat mulai</strong>
              Konsultasi lewat WhatsApp
            </span>
          </div>
        </section>

        <section className="section outcomes" id="solusi" aria-labelledby="outcomes-title">
          <div className="section-heading reveal">
            <p className="section-label">Lebih rapi sejak hari pertama</p>
            <h2 id="outcomes-title">Satu data untuk seluruh kehadiran.</h2>
            <p>
              Hilangkan rekap manual dan percakapan yang tercecer. Semua pihak melihat informasi yang sama, saat
              dibutuhkan.
            </p>
          </div>

          <div className="outcome-grid">
            <article className="outcome reveal">
              <span className="outcome__number">01</span>
              <ScanFace aria-hidden="true" />
              <h3>Check-in tervalidasi</h3>
              <p>Lokasi dan bukti swafoto membantu setiap catatan tetap dapat dipercaya.</p>
            </article>
            <article className="outcome reveal">
              <span className="outcome__number">02</span>
              <Route aria-hidden="true" />
              <h3>Aturan yang adaptif</h3>
              <p>Kantor, lapangan, atau hybrid tetap mengikuti kebijakan yang Anda tetapkan.</p>
            </article>
            <article className="outcome reveal">
              <span className="outcome__number">03</span>
              <ChartNoAxesCombined aria-hidden="true" />
              <h3>Rekap siap pakai</h3>
              <p>Keterlambatan, lembur, izin, dan ketidakhadiran langsung tersusun.</p>
            </article>
          </div>
        </section>

        <section className="section audience" id="sasaran" aria-labelledby="audience-title">
          <div className="section-heading reveal">
            <p className="section-label">Untuk siapa ProAbsen?</p>
            <h2 id="audience-title">Satu platform, banyak cara kerja.</h2>
            <p>Mulai dari kebutuhan HR sampai operasional lapangan, ProAbsen membantu setiap peran bekerja dengan data yang sama.</p>
          </div>

          <div className="audience-grid">
            <article className="audience-card reveal">
              <span className="audience-card__icon"><Users aria-hidden="true" /></span>
              <p className="audience-card__number">01 / HR &amp; Admin</p>
              <h3>Berhenti mengejar rekap.</h3>
              <p>Kelola data karyawan, izin, shift, dan laporan dari dashboard yang terpusat.</p>
              <a href="#fitur">Lihat fitur admin <ArrowRight aria-hidden="true" /></a>
            </article>
            <article className="audience-card reveal">
              <span className="audience-card__icon"><Building2 aria-hidden="true" /></span>
              <p className="audience-card__number">02 / Pemilik bisnis</p>
              <h3>Tahu kondisi tim setiap hari.</h3>
              <p>Dapatkan visibilitas kehadiran tanpa harus menunggu laporan manual dari banyak tempat.</p>
              <a href="#demo">Konsultasikan kebutuhan <ArrowRight aria-hidden="true" /></a>
            </article>
            <article className="audience-card reveal">
              <span className="audience-card__icon"><MapPin aria-hidden="true" /></span>
              <p className="audience-card__number">03 / Tim lapangan</p>
              <h3>Presensi tetap fleksibel.</h3>
              <p>Pastikan kehadiran tercatat sesuai lokasi dan jadwal kerja, di mana pun tim bertugas.</p>
              <a href="#cara-kerja">Pelajari cara kerja <ArrowRight aria-hidden="true" /></a>
            </article>
          </div>
        </section>

        <section className="section product" id="fitur" aria-labelledby="product-title">
          <div className="product__heading reveal">
            <div>
              <p className="section-label">Dua sudut pandang</p>
              <h2 id="product-title">Mudah dikelola, nyaman digunakan.</h2>
            </div>
            <div className="segment-control" role="tablist" aria-label="Tampilan produk">
              <button
                className={`segment-control__button${activeProduct === "admin" ? " is-active" : ""}`}
                type="button"
                role="tab"
                id="tab-admin"
                aria-controls="panel-admin"
                aria-selected={activeProduct === "admin"}
                tabIndex={activeProduct === "admin" ? 0 : -1}
                onClick={() => setActiveProduct("admin")}
                onKeyDown={(event) => selectAdjacentProduct(event, "admin")}
              >
                HR &amp; admin
              </button>
              <button
                className={`segment-control__button${activeProduct === "employee" ? " is-active" : ""}`}
                type="button"
                role="tab"
                id="tab-employee"
                aria-controls="panel-employee"
                aria-selected={activeProduct === "employee"}
                tabIndex={activeProduct === "employee" ? 0 : -1}
                onClick={() => setActiveProduct("employee")}
                onKeyDown={(event) => selectAdjacentProduct(event, "employee")}
              >
                Karyawan
              </button>
            </div>
          </div>

          <div
            className={`product-panel${activeProduct === "admin" ? " is-active" : ""}`}
            id="panel-admin"
            role="tabpanel"
            aria-labelledby="tab-admin"
            hidden={activeProduct !== "admin"}
          >
            <div className="product-copy reveal">
              <p className="product-copy__tag">Kontrol operasional</p>
              <h3>Kondisi tim terbaca dalam sekali lihat.</h3>
              <p>Pantau status hari ini, tangani pengecualian, lalu unduh rekap tanpa berpindah aplikasi.</p>
              <ul className="check-list">
                <li>
                  <Check aria-hidden="true" /> Ringkasan realtime per lokasi
                </li>
                <li>
                  <Check aria-hidden="true" /> Persetujuan izin dan koreksi
                </li>
                <li>
                  <Check aria-hidden="true" /> Ekspor data untuk payroll
                </li>
              </ul>
            </div>

            <div className="dashboard-preview reveal" aria-label="Contoh dashboard admin ProAbsen">
              <div className="preview-bar">
                <span className="preview-brand">
                  <span /> ProAbsen
                </span>
                <span>Senin, 22 Agustus</span>
                <span className="preview-avatar">NA</span>
              </div>
              <div className="preview-layout">
                <div className="preview-sidebar" aria-hidden="true">
                  <LayoutDashboard />
                  <Users />
                  <CalendarDays />
                  <ClipboardList />
                </div>
                <div className="preview-content">
                  <div className="preview-title">
                    <div>
                      <small>Ikhtisar hari ini</small>
                      <strong>Kehadiran tim</strong>
                    </div>
                    <span>
                      <RefreshCw aria-hidden="true" /> Diperbarui
                    </span>
                  </div>
                  <div className="stat-grid">
                    <div className="stat stat--green">
                      <small>Hadir</small>
                      <strong>86</strong>
                      <span>tepat waktu</span>
                    </div>
                    <div className="stat stat--amber">
                      <small>Terlambat</small>
                      <strong>7</strong>
                      <span>perlu ditinjau</span>
                    </div>
                    <div className="stat stat--blue">
                      <small>Izin</small>
                      <strong>5</strong>
                      <span>telah disetujui</span>
                    </div>
                  </div>
                  <div className="attendance-list">
                    <div className="attendance-list__head">
                      <strong>Aktivitas terbaru</strong>
                      <span>Status</span>
                    </div>
                    <div className="attendance-row">
                      <span className="person-avatar">AP</span>
                      <span>
                        <strong>Ayu Pratama</strong>
                        <small>Kantor Pusat · 07.54</small>
                      </span>
                      <span className="status status--on-time">Hadir</span>
                    </div>
                    <div className="attendance-row">
                      <span className="person-avatar person-avatar--blue">RA</span>
                      <span>
                        <strong>Rizky Ananda</strong>
                        <small>Tim Lapangan · 08.06</small>
                      </span>
                      <span className="status status--late">Terlambat</span>
                    </div>
                    <div className="attendance-row">
                      <span className="person-avatar person-avatar--gray">DP</span>
                      <span>
                        <strong>Dimas Putra</strong>
                        <small>Remote · 08.00</small>
                      </span>
                      <span className="status status--on-time">Hadir</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`product-panel${activeProduct === "employee" ? " is-active" : ""}`}
            id="panel-employee"
            role="tabpanel"
            aria-labelledby="tab-employee"
            hidden={activeProduct !== "employee"}
          >
            <div className="product-copy reveal">
              <p className="product-copy__tag">Pengalaman karyawan</p>
              <h3>Catat kehadiran dalam beberapa detik.</h3>
              <p>Informasi shift, lokasi, dan status pengajuan tersedia langsung dari perangkat yang selalu dibawa.</p>
              <ul className="check-list">
                <li>
                  <Check aria-hidden="true" /> Check-in singkat dan jelas
                </li>
                <li>
                  <Check aria-hidden="true" /> Riwayat pribadi yang transparan
                </li>
                <li>
                  <Check aria-hidden="true" /> Izin diajukan tanpa formulir kertas
                </li>
              </ul>
            </div>

            <div className="employee-preview reveal" aria-label="Contoh tampilan karyawan ProAbsen">
              <div className="phone-shell">
                <div className="phone-status">
                  <span>08:00</span>
                  <span>
                    <Wifi />
                    <BatteryFull />
                  </span>
                </div>
                <div className="phone-header">
                  <div>
                    <small>Selamat pagi,</small>
                    <strong>Ayu</strong>
                  </div>
                  <span className="preview-avatar">AP</span>
                </div>
                <div className="location-map">
                  <span className="map-grid" />
                  <span className="location-pin">
                    <MapPin />
                  </span>
                  <p>
                    <strong>Kantor Pusat</strong>
                    <small>Anda berada di area absensi</small>
                  </p>
                </div>
                <div className="shift-detail">
                  <span>
                    <small>Shift hari ini</small>
                    <strong>08.00 - 17.00</strong>
                  </span>
                  <span className="status status--on-time">Sesuai jadwal</span>
                </div>
                <button className="phone-checkin" type="button" tabIndex={-1}>
                  <ScanFace />
                  <span>
                    Check-in<small>Dengan swafoto</small>
                  </span>
                </button>
              </div>
              <div className="employee-note employee-note--top">
                <Navigation />
                <span>
                  <strong>Lokasi akurat</strong>GPS terverifikasi
                </span>
              </div>
              <div className="employee-note employee-note--bottom">
                <CircleCheckBig />
                <span>
                  <strong>Langsung tercatat</strong>Tanpa input ulang
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section showcase" aria-labelledby="showcase-title">
          <div className="section-heading reveal">
            <p className="section-label">Lihat produknya</p>
            <h2 id="showcase-title">Bukan sekadar mockup.</h2>
            <p>Semua tangkapan layar diambil langsung dari ProAbsen yang sedang berjalan. Pilih tampilan yang ingin Anda lihat lebih dekat.</p>
          </div>

          <div className="showcase-gallery reveal">
            <figure className="showcase-stage">
              <div className="showcase-stage__bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div
                className="showcase-stage__screen"
                style={{ "--shot-safe": showcaseItems[activeShot].safe }}
              >
                <Image
                  key={showcaseItems[activeShot].title}
                  src={showcaseItems[activeShot].src}
                  alt={showcaseItems[activeShot].alt}
                  fill
                  unoptimized
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </figure>

            <div className="showcase-panel">
              <div className="showcase-caption" aria-live="polite">
                <p className="showcase-caption__count">
                  {String(activeShot + 1).padStart(2, "0")} / {String(showcaseItems.length).padStart(2, "0")}
                </p>
                <h3>{showcaseItems[activeShot].title}</h3>
                <p>{showcaseItems[activeShot].description}</p>
              </div>

              <div className="showcase-rail" role="group" aria-label="Pilih tampilan produk">
                {showcaseItems.map((item, index) => (
                  <button
                    key={item.title}
                    className={`showcase-thumb${index === activeShot ? " is-active" : ""}`}
                    type="button"
                    id={`shot-${index}`}
                    aria-label={`Tampilkan ${item.title}`}
                    aria-current={index === activeShot}
                    tabIndex={index === activeShot ? 0 : -1}
                    onClick={() => setActiveShot(index)}
                    onKeyDown={(event) => selectAdjacentShot(event, index)}
                  >
                    <span className="showcase-thumb__box">
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        unoptimized
                        quality={100}
                        sizes="(max-width: 430px) 124px, (max-width: 780px) 140px, (max-width: 1024px) 168px, 320px"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="showcase-mobile reveal">
            <div className="showcase-mobile__heading">
              <p className="section-label">Aplikasi mobile</p>
              <h3 id="showcase-mobile-title">Absensi ikut ke mana pun tim bekerja.</h3>
              <p>Tampilan mobile dibuat ringkas untuk login, presensi, dan melihat status kehadiran tanpa membuka laptop.</p>
            </div>

            <div className="showcase-mobile__gallery" aria-labelledby="showcase-mobile-title">
              <figure className="mobile-device">
                <div className="mobile-device__speaker" aria-hidden="true" />
                <div className="mobile-device__screen">
                  <Image
                    key={mobileShowcaseItems[activeMobileShot].title}
                    src={mobileShowcaseItems[activeMobileShot].src}
                    alt={mobileShowcaseItems[activeMobileShot].alt}
                    fill
                    unoptimized
                    quality={100}
                    sizes="(max-width: 780px) 68vw, 270px"
                  />
                </div>
                <span className="mobile-device__home" aria-hidden="true" />
              </figure>

              <div className="showcase-mobile__panel">
                <div className="showcase-caption" aria-live="polite">
                  <p className="showcase-caption__count">
                    {String(activeMobileShot + 1).padStart(2, "0")} / {String(mobileShowcaseItems.length).padStart(2, "0")}
                  </p>
                  <h4>{mobileShowcaseItems[activeMobileShot].title}</h4>
                  <p>{mobileShowcaseItems[activeMobileShot].description}</p>
                </div>

                <div className="showcase-mobile__rail" role="group" aria-label="Pilih tampilan aplikasi mobile">
                  {mobileShowcaseItems.map((item, index) => (
                    <button
                      key={item.title}
                      className={`showcase-mobile__thumb${index === activeMobileShot ? " is-active" : ""}`}
                      type="button"
                      id={`mobile-shot-${index}`}
                      aria-label={`Tampilkan ${item.title}`}
                      aria-current={index === activeMobileShot}
                      tabIndex={index === activeMobileShot ? 0 : -1}
                      onClick={() => setActiveMobileShot(index)}
                      onKeyDown={(event) => selectAdjacentMobileShot(event, index)}
                    >
                      <span className="showcase-mobile__thumb-box">
                        <Image
                          src={item.src}
                          alt=""
                          fill
                          unoptimized
                          quality={100}
                          sizes="(max-width: 780px) 88px, (max-width: 1024px) 180px, 220px"
                        />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-cta reveal">
            <p>
              <strong>Semua yang baru saja Anda lihat bisa dicoba langsung.</strong>
              <span>Gratis 30 hari, tanpa kartu kredit.</span>
            </p>
            <a className="button button--primary" href={trialLink} target="_blank" rel="noreferrer">
              Coba gratis 30 hari
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section workflow" id="cara-kerja" aria-labelledby="workflow-title">
          <div className="section-heading section-heading--light reveal">
            <p className="section-label">Mulai tanpa proses panjang</p>
            <h2 id="workflow-title">Dari pengaturan ke laporan.</h2>
            <p>Alur kerja ringkas membuat implementasi mudah dipahami sejak awal.</p>
          </div>

          <ol className="workflow-list">
            <li className="workflow-step reveal">
              <span>1</span>
              <div>
                <h3>Susun kebijakan</h3>
                <p>Atur lokasi, jam kerja, shift, dan aturan toleransi sesuai kebutuhan perusahaan.</p>
              </div>
              <SlidersHorizontal aria-hidden="true" />
            </li>
            <li className="workflow-step reveal">
              <span>2</span>
              <div>
                <h3>Undang tim</h3>
                <p>Karyawan menerima akses dan dapat mulai mencatat kehadiran dari perangkatnya.</p>
              </div>
              <UserRoundPlus aria-hidden="true" />
            </li>
            <li className="workflow-step reveal">
              <span>3</span>
              <div>
                <h3>Tinjau hasil</h3>
                <p>Dashboard menyusun aktivitas menjadi data yang siap ditindaklanjuti oleh HR.</p>
              </div>
              <FileChartColumn aria-hidden="true" />
            </li>
          </ol>
        </section>

        <section className="section capability" aria-labelledby="capability-title">
          <div className="capability__intro reveal">
            <p className="section-label">Tetap fleksibel</p>
            <h2 id="capability-title">Mengikuti cara tim Anda bekerja.</h2>
            <p>Gunakan hanya modul yang dibutuhkan sekarang, lalu perluas saat operasional berkembang.</p>
          </div>
          <div className="capability-grid">
            <article className="capability-item reveal">
              <Building2 aria-hidden="true" />
              <h3>Multi lokasi</h3>
              <p>Kelola kantor dan area kerja lapangan dari satu akun.</p>
            </article>
            <article className="capability-item reveal">
              <CalendarRange aria-hidden="true" />
              <h3>Shift &amp; lembur</h3>
              <p>Jadwal bergilir dan jam tambahan tercatat konsisten.</p>
            </article>
            <article className="capability-item reveal">
              <NotebookTabs aria-hidden="true" />
              <h3>Izin &amp; cuti</h3>
              <p>Pengajuan dan persetujuan terdokumentasi dengan jelas.</p>
            </article>
            <article className="capability-item reveal">
              <LockKeyhole aria-hidden="true" />
              <h3>Hak akses</h3>
              <p>Informasi ditampilkan sesuai tanggung jawab setiap peran.</p>
            </article>
          </div>
        </section>

        <section className="section faq" id="faq" aria-labelledby="faq-title">
          <div className="faq__heading reveal">
            <p className="section-label">Pertanyaan umum</p>
            <h2 id="faq-title">Hal yang perlu diketahui.</h2>
            <p>Jawaban singkat sebelum Anda melihat produknya lebih dekat.</p>
          </div>

          <div className="faq-list reveal">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      {item.question}
                      <ChevronDown aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="faq-answer" id={`faq-answer-${index}`}>
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="demo" id="demo" aria-labelledby="demo-title">
          <Image
            src={proAbsenImage}
            alt=""
            aria-hidden="true"
            quality={100}
            sizes="(max-width: 780px) 140vw, 72vw"
          />
          <div className="demo__content reveal">
            <p className="section-label">Lihat langsung</p>
            <h2 id="demo-title">Siap mengurangi rekap manual?</h2>
            <p>
              Mulai gratis 30 hari, atau isi data singkat agar tim ProAbsen bisa membantu lewat WhatsApp.
            </p>
            <div className="demo__actions">
              <a className="button button--light" href={trialLink} target="_blank" rel="noreferrer">
                Coba gratis 30 hari
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="demo__whatsapp-link" href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {!activityDismissed && (
        <aside className="activity-toast" aria-live="polite" aria-label="Aktivitas pendaftaran terbaru">
          <div className={`activity-toast__avatar activity-toast__avatar--${activityItems[activeActivity].tone}`}>
            {activityItems[activeActivity].initials}
            <span />
          </div>
          <div className="activity-toast__copy">
            <p><strong>{activityItems[activeActivity].name}</strong> {activityItems[activeActivity].action}</p>
            <span>{activityItems[activeActivity].city}, {activityItems[activeActivity].time}</span>
          </div>
          <button type="button" onClick={() => setActivityDismissed(true)} aria-label="Tutup notifikasi aktivitas">
            <X aria-hidden="true" />
          </button>
        </aside>
      )}

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat dengan ProAbsen via WhatsApp">
        <MessageCircle aria-hidden="true" />
        <span>Chat WhatsApp</span>
      </a>

      <footer className="site-footer">
        <Brand footer />
        <p>Platform manajemen kehadiran karyawan berbasis cloud.</p>
        <p>&copy; {new Date().getFullYear()} ProAbsen.</p>
      </footer>
    </>
  );
}
