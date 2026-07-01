function absensiApp() {
  return {
    activeTab: "home",
    qrView: "id",
    absenStatus: "belum",
    jamMasuk: null,
    jamKeluar: null,
    tanggal: "",
    jam: "",
    toastMsg: "",
    toastTimer: null,
    selectedDay: null,
    showCuti: false,
    showLembur: false,
    showDataPribadi: false,
    showRiwayatCuti: false,
    showSlip: false,
    showPengaturan: false,
    namaBulanIni: "",
    riwayat: [],

    pegawai: {
      nama: " Suherdi",
      inisial: "SU",
      id: "EMP-2024-0142",
      jabatan: "Frontend Developer",
      departemen: "Product Engineering",
      email: "suherdi@company.co.id",
      telp: "+62 812-3456-7890",
      bergabung: "12 Maret 2022",
      lokasi: "Kantor Pusat — Serang, Banten",
    },

    cuti: { total: 12, sisa: 8 },
    lembur: { jamBulanIni: 5 },

    formCuti: {
      jenis: "Cuti Tahunan",
      mulai: "",
      selesai: "",
      alasan: "",
    },
    formLembur: { tanggal: "", mulai: "", selesai: "", alasan: "" },

    pengaturan: { notif: true, pengingat: true },

    menus: [
      {
        id: "home",
        label: "Home",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
      },
      {
        id: "data",
        label: "Data",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>',
      },
      {
        id: "qrcode",
        label: "QR",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/></svg>',
      },
      {
        id: "notif",
        label: "Notif",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',
      },
      {
        id: "profil",
        label: "Profil",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
      },
    ],

    notifikasi: [
      {
        id: 1,
        tipe: "approval",
        judul: "Cuti tahunan disetujui",
        deskripsi:
          "Pengajuan cuti 12-14 Juni 2026 telah disetujui atasan Anda.",
        waktu: "Hari ini, 08:15",
        dibaca: false,
      },
      {
        id: 2,
        tipe: "reminder",
        judul: "Jangan lupa absen pulang",
        deskripsi:
          "Anda belum melakukan absen pulang kemarin sebelum pukul 20:00.",
        waktu: "Hari ini, 07:40",
        dibaca: false,
      },
      {
        id: 3,
        tipe: "info",
        judul: "Slip gaji Juni tersedia",
        deskripsi:
          "Slip gaji periode Juni 2026 sudah bisa diunduh di halaman Profil.",
        waktu: "Kemarin, 16:20",
        dibaca: false,
      },
      {
        id: 4,
        tipe: "announcement",
        judul: "Libur nasional 17 Juni",
        deskripsi:
          "Kantor tutup pada tanggal 17 Juni 2026 dalam rangka hari libur nasional.",
        waktu: "2 hari lalu",
        dibaca: true,
      },
      {
        id: 5,
        tipe: "approval",
        judul: "Pengajuan lembur disetujui",
        deskripsi:
          "Lembur tanggal 24 Juni 2026 pukul 18:00-20:00 telah disetujui.",
        waktu: "3 hari lalu",
        dibaca: true,
      },
    ],

    pengajuan: [
      {
        id: 1,
        jenis: "Cuti Tahunan",
        tanggal: "12 - 14 Juni 2026",
        status: "Disetujui",
      },
      {
        id: 2,
        jenis: "Sakit",
        tanggal: "3 Juni 2026",
        status: "Disetujui",
      },
      {
        id: 3,
        jenis: "Lembur",
        tanggal: "24 Juni 2026",
        status: "Disetujui",
      },
    ],

    slipGaji: [
      { bulan: "Juni 2026" },
      { bulan: "Mei 2026" },
      { bulan: "April 2026" },
    ],

    timSedangCuti: [
      {
        nama: "Unayah Uyee",
        inisial: "RW",
        keterangan: "Cuti tahunan · s/d besok",
      },
      {
        nama: "Nisa Sambelan",
        inisial: "AF",
        keterangan: "Sakit · hari ini",
      },
    ],

    qrPattern: [],

    init() {
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);
      this.generateRiwayat();
      this.generateQrPattern();
    },

    updateTime() {
      const now = new Date();
      this.tanggal = now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      this.jam = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      this.namaBulanIni = now.toLocaleDateString("id-ID", {
        month: "long",
        year: "numeric",
      });
    },

    pageTitle() {
      const titles = {
        home: "Beranda",
        data: "Riwayat Absensi",
        qrcode: "Kode QR",
        notif: "Notifikasi",
        profil: "Profil Saya",
      };
      return titles[this.activeTab] || "Simpeg Sekretariat DPRD Kota Serang";
    },

    sapaan() {
      const h = new Date().getHours();
      if (h < 11) return "Selamat Pagi";
      if (h < 15) return "Selamat Siang";
      if (h < 18) return "Selamat Sore";
      return "Selamat Malam";
    },

    labelStatus() {
      if (this.absenStatus === "belum") return "Belum Absen";
      if (this.absenStatus === "masuk") return "Sedang Bekerja";
      return "Selesai";
    },

    tombolAbsenLabel() {
      if (this.absenStatus === "belum") return "Absen Masuk";
      if (this.absenStatus === "masuk") return "Absen Pulang";
      return "Absensi Hari Ini Selesai";
    },

    doAbsenMasuk() {
      const jam = new Date();
      const jamHadir =
        jam.getHours() > 8 || (jam.getHours() === 8 && jam.getMinutes() > 15)
          ? "Terlambat"
          : "Hadir";
      this.jamMasuk = jam.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });
      this.absenStatus = "masuk";
      this.updateHariIni({
        status: jamHadir,
        jamMasuk: this.jamMasuk,
        jamKeluar: null,
        keterangan: this.pegawai.lokasi,
      });
      this.toast("Absen masuk berhasil, semangat bekerja!");
    },

    doAbsenPulang() {
      this.jamKeluar = new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });
      this.absenStatus = "selesai";
      this.updateHariIni({ jamKeluar: this.jamKeluar });
      this.toast("Absen pulang tercatat, sampai jumpa besok!");
    },

    doAbsenViaQR() {
      if (this.absenStatus === "belum") {
        this.doAbsenMasuk();
      } else if (this.absenStatus === "masuk") {
        this.doAbsenPulang();
      } else {
        this.toast("Absensi hari ini sudah selesai");
      }
    },

    updateHariIni(data) {
      if (this.riwayat.length === 0) return;
      const hariIni = this.riwayat[this.riwayat.length - 1];
      Object.assign(hariIni, data);
    },

    generateRiwayat() {
      const hariLabel = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
      const today = new Date();
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      const arr = [];
      let idx = 0;
      for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
        const dow = d.getDay();
        const isToday = d.toDateString() === today.toDateString();
        let status = "Hadir",
          jm = "08:0" + ((idx % 9) + 1),
          jk = "17:0" + ((idx % 9) + 1),
          ket = this.pegawai.lokasi;

        if (dow === 0 || dow === 6) {
          status = "Libur";
          jm = null;
          jk = null;
          ket = "Akhir pekan";
        } else if (isToday) {
          status = "Belum Absen";
          jm = null;
          jk = null;
          ket = "-";
        } else if (idx % 11 === 4) {
          status = "Sakit";
          jm = null;
          jk = null;
          ket = "Surat dokter terlampir";
        } else if (idx % 13 === 6) {
          status = "Cuti";
          jm = null;
          jk = null;
          ket = "Cuti tahunan";
        } else if (idx % 7 === 2) {
          status = "Terlambat";
          jm = "08:4" + ((idx % 5) + 1);
        }

        arr.push({
          id: idx,
          tgl: d.getDate(),
          hari: hariLabel[dow],
          status: status,
          jamMasuk: jm,
          jamKeluar: jk,
          keterangan: ket,
        });
        idx++;
      }
      this.riwayat = arr;
    },

    generateQrPattern() {
      const size = 15;
      const grid = Array.from({ length: size }, () => Array(size).fill(0));
      const finder = (r0, c0) => {
        for (let r = 0; r < 7; r++) {
          for (let c = 0; c < 7; c++) {
            const border = r === 0 || r === 6 || c === 0 || c === 6;
            const inner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
            grid[r0 + r][c0 + c] = border || inner ? 1 : 0;
          }
        }
      };
      finder(0, 0);
      finder(0, size - 7);
      finder(size - 7, 0);
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          const inFinderTL = r < 8 && c < 8;
          const inFinderTR = r < 8 && c > size - 9;
          const inFinderBL = r > size - 9 && c < 8;
          if (inFinderTL || inFinderTR || inFinderBL) continue;
          grid[r][c] = (r * 31 + c * 17 + r * c * 3) % 5 === 0 ? 1 : 0;
        }
      }
      this.qrPattern = grid;
    },

    bukaCuti(jenis) {
      this.formCuti.jenis = jenis;
      this.showCuti = true;
    },

    kirimCuti() {
      if (!this.formCuti.mulai) {
        this.toast("Lengkapi tanggal pengajuan terlebih dahulu");
        return;
      }
      const label =
        this.formCuti.selesai && this.formCuti.selesai !== this.formCuti.mulai
          ? this.formatTanggalRange(this.formCuti.mulai, this.formCuti.selesai)
          : this.formatTanggal(this.formCuti.mulai);
      this.pengajuan.unshift({
        id: Date.now(),
        jenis: this.formCuti.jenis,
        tanggal: label,
        status: "Menunggu",
      });
      this.notifikasi.unshift({
        id: Date.now(),
        tipe: "info",
        judul: "Pengajuan " + this.formCuti.jenis.toLowerCase() + " terkirim",
        deskripsi:
          "Pengajuan Anda untuk " +
          label +
          " sedang menunggu persetujuan atasan.",
        waktu: "Baru saja",
        dibaca: false,
      });
      this.showCuti = false;
      this.formCuti = {
        jenis: "Cuti Tahunan",
        mulai: "",
        selesai: "",
        alasan: "",
      };
      this.toast("Pengajuan berhasil dikirim");
    },

    kirimLembur() {
      if (
        !this.formLembur.tanggal ||
        !this.formLembur.mulai ||
        !this.formLembur.selesai
      ) {
        this.toast("Lengkapi detail lembur terlebih dahulu");
        return;
      }
      const label = this.formatTanggal(this.formLembur.tanggal);
      this.pengajuan.unshift({
        id: Date.now(),
        jenis: "Lembur",
        tanggal: label,
        status: "Menunggu",
      });
      this.notifikasi.unshift({
        id: Date.now(),
        tipe: "info",
        judul: "Pengajuan lembur terkirim",
        deskripsi:
          "Lembur tanggal " +
          label +
          " pukul " +
          this.formLembur.mulai +
          "-" +
          this.formLembur.selesai +
          " sedang menunggu persetujuan.",
        waktu: "Baru saja",
        dibaca: false,
      });
      this.showLembur = false;
      this.formLembur = {
        tanggal: "",
        mulai: "",
        selesai: "",
        alasan: "",
      };
      this.toast("Pengajuan lembur terkirim");
    },

    formatTanggal(iso) {
      if (!iso) return "-";
      return new Date(iso + "T00:00:00").toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },

    formatTanggalRange(a, b) {
      const da = new Date(a + "T00:00:00"),
        db = new Date(b + "T00:00:00");
      return (
        da.getDate() +
        " - " +
        db.getDate() +
        " " +
        db.toLocaleDateString("id-ID", { month: "long", year: "numeric" })
      );
    },

    tandaiSemuaDibaca() {
      this.notifikasi.forEach((n) => (n.dibaca = true));
    },

    unreadCount() {
      return this.notifikasi.filter((n) => !n.dibaca).length;
    },

    jumlahStatus(status) {
      return this.riwayat.filter((d) => d.status === status).length;
    },

    persenKehadiran() {
      const kerja = this.riwayat.filter(
        (d) => d.status !== "Libur" && d.status !== "Belum Absen",
      );
      if (kerja.length === 0) return 100;
      const hadir = kerja.filter(
        (d) => d.status === "Hadir" || d.status === "Terlambat",
      ).length;
      return Math.round((hadir / kerja.length) * 100);
    },

    badgeKelas(status) {
      const map = {
        Hadir: "bg-sage/10 text-sage",
        Terlambat: "bg-amber/15 text-amberdeep",
        Sakit: "bg-plum/10 text-plum",
        Cuti: "bg-sky/10 text-sky",
        Alpha: "bg-coral/10 text-coral",
        Libur: "bg-linec text-ink2",
        "Belum Absen": "bg-linec text-ink2",
      };
      return map[status] || "bg-linec text-ink2";
    },

    statusPengajuanKelas(status) {
      const map = {
        Disetujui: "bg-sage/10 text-sage",
        Menunggu: "bg-amber/15 text-amberdeep",
        Ditolak: "bg-coral/10 text-coral",
      };
      return map[status] || "bg-linec text-ink2";
    },

    iconBgKelas(tipe) {
      const map = {
        approval: "bg-sage/10 text-sage",
        reminder: "bg-amber/15 text-amberdeep",
        info: "bg-sky/10 text-sky",
        announcement: "bg-plum/10 text-plum",
      };
      return map[tipe] || "bg-linec text-ink2";
    },

    iconSvgPath(tipe) {
      const map = {
        approval:
          '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>',
        reminder:
          '<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        info: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
        announcement:
          '<path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>',
      };
      return map[tipe] || "";
    },

    toast(msg) {
      this.toastMsg = msg;
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => (this.toastMsg = ""), 2600);
    },
  };
}
