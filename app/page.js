"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
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
import iconProAbsen from "../iconProAbsen.jpg";
import proAbsenImage from "../ProAbsen.jpg";
import shotAturJadwal from "../image/Buat jadwal baru.png";
import shotPinjaman from "../image/Fitur Pinjaman.png";
import shotKalenderShift from "../image/Jadwal Karyawan.png";
import shotPengguna from "../image/Kelola Pengguna.png";
import shotTugas from "../image/KPI atau Tugas Karyawan.png";
import shotPengajuan from "../image/Pengajuan Cuti sakit telat karyawan.png";
import shotRiwayat from "../image/Riwayat Aktivitas.png";
import shotRingkasan from "../image/Summary Kehadiran.png";

const navigationItems = [
  ["solusi", "Solusi"],
  ["fitur", "Fitur"],
  ["cara-kerja", "Cara kerja"],
  ["faq", "FAQ"],
];

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
    src: shotRingkasan,
    title: "Ringkasan kehadiran",
    description: "Jumlah hadir, terlambat, dan belum absen terbaca per hari.",
    alt: "Tangkapan layar ringkasan kehadiran harian ProAbsen",
    safe: "15%",
  },
  {
    src: shotPengguna,
    title: "Data pengguna",
    description: "Peran, kategori kerja, dan hak akses diatur per orang.",
    alt: "Tangkapan layar halaman kelola pengguna",
    safe: "15%",
  },
  {
    src: shotKalenderShift,
    title: "Kalender shift",
    description: "Sebaran jadwal sebulan terekap dalam satu tabel.",
    alt: "Tangkapan layar laporan jadwal karyawan bulanan",
    safe: "29%",
  },
  {
    src: shotAturJadwal,
    title: "Atur jadwal",
    description: "Tambah penugasan harian lengkap dengan jam kerjanya.",
    alt: "Tangkapan layar formulir tambah jadwal baru",
    safe: "40%",
  },
  {
    src: shotPengajuan,
    title: "Izin & cuti",
    description: "Setiap pengajuan tercatat dengan status yang jelas.",
    alt: "Tangkapan layar daftar pengajuan izin dan cuti karyawan",
    safe: "15%",
  },
  {
    src: shotTugas,
    title: "Tugas harian",
    description: "Pekerjaan dan target terdokumentasi per tanggal.",
    alt: "Tangkapan layar daftar tugas karyawan",
    safe: "15%",
  },
  {
    src: shotPinjaman,
    title: "Pinjaman",
    description: "Nominal dan metode potongan tercatat rapi.",
    alt: "Tangkapan layar formulir pinjaman karyawan",
    safe: "18%",
  },
  {
    src: shotRiwayat,
    title: "Jejak aktivitas",
    description: "Semua peristiwa terekam dan bisa ditelusuri ulang.",
    alt: "Tangkapan layar riwayat aktivitas pengguna",
    safe: "29%",
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
        <Image src={iconProAbsen} alt="" priority={!footer} />
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
          <a className="nav-demo" href="#demo" onClick={() => setMenuOpen(false)}>
            Minta demo
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
            <h1 id="hero-title">Absensi tim yang tertib, tanpa terasa rumit.</h1>
            <p className="hero__description">
              Catat kehadiran, atur shift, kelola izin, dan siapkan laporan dari satu tempat yang mudah dipakai semua
              orang.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#demo">
                Jadwalkan demo
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#fitur">
                Jelajahi fitur
                <ArrowDown aria-hidden="true" />
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
                  quality={90}
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
                        sizes="(max-width: 430px) 124px, (max-width: 780px) 140px, (max-width: 1024px) 168px, 220px"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="showcase-cta reveal">
            <p>
              <strong>Semua yang baru saja Anda lihat bisa dicoba langsung.</strong>
              <span>Gratis 30 hari, tanpa kartu kredit.</span>
            </p>
            <a className="button button--primary" href="#demo">
              Jadwalkan demo
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
            sizes="(max-width: 780px) 140vw, 72vw"
          />
          <div className="demo__content reveal">
            <p className="section-label">Lihat langsung</p>
            <h2 id="demo-title">Siap membuat kehadiran lebih mudah?</h2>
            <p>Ceritakan pola kerja tim Anda. Kami akan menunjukkan alur ProAbsen yang paling relevan.</p>
            <a className="button button--light" href="mailto:sales@proabsen.id?subject=Permintaan%20Demo%20ProAbsen">
              Hubungi tim kami
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Brand footer />
        <p>Platform manajemen kehadiran karyawan berbasis cloud.</p>
        <p>&copy; {new Date().getFullYear()} ProAbsen.</p>
      </footer>
    </>
  );
}