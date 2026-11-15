/* ---------------------------------------------
   site.js — tema (dark/light) + bahasa (EN/ID)
   Dipakai index.html dan about.html. Muat di <head>.
   Tambah teks baru: isi pasangan ['English', 'Indonesia'] di kamus D,
   lalu beri elemennya atribut data-i18n="nama.key".
   (data-i18n-alt / -aria / -content untuk atribut)
--------------------------------------------- */
(function () {
    'use strict';

    var root = document.documentElement;
    var KEY_THEME = 'faisal-theme';
    var KEY_LANG = 'faisal-lang';

    function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function write(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* abaikan */ } }

    /* ---- kamus: key -> [English, Indonesia] ---- */
    var D = {
        'title.index': ['Faisal Rizki — Portfolio', 'Faisal Rizki — Portofolio'],
        'title.about': ['About Faisal — Biodata, Experience & Certificates', 'Tentang Faisal — Biodata, Pengalaman & Sertifikat'],
        'meta.index': ['Portfolio of Rahmad Faisal Rizki — Information Systems student & web developer enthusiast.', 'Portofolio Rahmad Faisal Rizki — mahasiswa Sistem Informasi & penggemar pengembangan web.'],
        'meta.about': ['Get to know Rahmad Faisal Rizki better: biodata, experience photos, and certificates.', 'Kenali Rahmad Faisal Rizki lebih dalam: biodata, foto pengalaman, dan sertifikat.'],

        /* header */
        'logo.aria': ['Faisal.dev - back to top', 'Faisal.dev - kembali ke atas'],
        'logo.homeAria': ['Faisal.dev - back to home', 'Faisal.dev - kembali ke beranda'],
        'nav.aria': ['Main navigation', 'Navigasi utama'],
        'nav.menu': ['Open menu', 'Buka menu'],
        'nav.home': ['Home', 'Beranda'],
        'nav.about': ['About Me', 'Tentang Saya'],
        'nav.education': ['Education', 'Pendidikan'],
        'nav.skills': ['Skills', 'Keahlian'],
        'nav.projects': ['Projects', 'Proyek'],
        'nav.contact': ['Contact', 'Kontak'],
        'nav.cta': ['Contact me', 'Hubungi saya'],
        'lang.aria': ['Switch language', 'Ganti bahasa'],
        'theme.toDark': ['Switch to dark theme', 'Ganti ke tema gelap'],
        'theme.toLight': ['Switch to light theme', 'Ganti ke tema terang'],

        /* home */
        'home.role.sr': ['Information Systems Student & Web Developer Enthusiast, Pro Player e-Football, UI/UX Designer, Pro Player Mobile Legends, Editor', 'Mahasiswa Sistem Informasi & Penggemar Pengembangan Web, Pro Player e-Football, UI/UX Designer, Pro Player Mobile Legends, Editor'],
        'home.role.main': ['Information Systems Student & Web Developer Enthusiast', 'Mahasiswa Sistem Informasi & Penggemar Pengembangan Web'],
        'home.role.football': ['Pro Player e-Football', 'Pro Player e-Football'],
        'home.role.uiux': ['UI/UX Designer', 'UI/UX Designer'],
        'home.role.ml': ['Pro Player Mobile Legends', 'Pro Player Mobile Legends'],
        'home.role.editor': ['Editor', 'Editor'],
        'home.text': ['Hello everyone! I am an Information Systems student who is interested in web development, programming, and databases. I am currently learning and developing my ability to create attractive, responsive, and useful websites.', 'Halo semuanya! Saya mahasiswa Sistem Informasi yang tertarik pada pengembangan web, pemrograman, dan basis data. Saat ini saya sedang belajar dan mengembangkan kemampuan untuk membuat website yang menarik, responsif, dan bermanfaat.'],

        /* about */
        'about.hi': ["Hi, I'm Faisal", 'Hai, saya Faisal'],
        'about.p': ['I am an Information Systems student who is continuously developing my skills in technology. I enjoy understanding how a system is built from the interface to the data behind it, and I like learning new things through small projects.', 'Saya mahasiswa Sistem Informasi yang terus mengembangkan kemampuan di bidang teknologi. Saya senang memahami bagaimana sebuah sistem dibangun, dari antarmuka sampai data di baliknya, dan suka belajar hal baru lewat proyek-proyek kecil.'],
        'about.more': ['Get to know me better', 'Kenali saya lebih dalam'],
        'about.photoAlt': ['Photo of Faisal Rizki', 'Foto Faisal Rizki'],
        'about.socials': ['Social media', 'Media sosial'],

        /* education */
        'edu.title': ['Education history', 'Riwayat pendidikan'],
        'edu.now': ['2024 — Present', '2024 — Sekarang'],
        'edu.badge': ['Ongoing', 'Berjalan'],
        'edu.univ.title': ["Bachelor's Degree in Information Systems", 'Sarjana (S1) Sistem Informasi'],
        'edu.univ.desc': ['Studying web development, programming, databases, and statistics.', 'Mempelajari pengembangan web, pemrograman, basis data, dan statistika.'],
        'edu.sma.title': ['Islamic Senior High School', 'Sekolah Menengah Atas Islam'],
        'edu.sma.desc': ['Studied in a boarding school environment, deepening religious knowledge, fostering independence, and building discipline and togetherness.', 'Belajar di lingkungan pesantren, memperdalam ilmu agama, menumbuhkan kemandirian, serta membangun kedisiplinan dan kebersamaan.'],
        'edu.smp.title': ['Junior High School', 'Sekolah Menengah Pertama (MTs)'],
        'edu.smp.desc': ['Continued junior secondary education while studying general and religious subjects and developing discipline and responsibility.', 'Melanjutkan pendidikan menengah pertama dengan mempelajari mata pelajaran umum dan agama serta melatih kedisiplinan dan tanggung jawab.'],
        'edu.sd.title': ['Elementary School', 'Sekolah Dasar'],
        'edu.sd.desc': ['Started basic education by learning general knowledge and building a foundation in reading, writing, arithmetic, and social skills.', 'Memulai pendidikan dasar dengan mempelajari pengetahuan umum dan membangun dasar membaca, menulis, berhitung, serta keterampilan sosial.'],

        /* skills / projects / contact / footer */
        'skills.title': ['What I can do', 'Yang bisa saya lakukan'],
        'projects.title': ['My Projects', 'Proyek Saya'],
        'quiz.desc': ['An interactive quiz website: players enter their name, answer questions, and their score goes into the Top 20 leaderboard. It includes background music and a Play Again button.', 'Website kuis interaktif: pemain memasukkan nama, menjawab pertanyaan, lalu skornya masuk ke papan peringkat Top 20. Dilengkapi musik latar dan tombol Main Lagi.'],
        'quiz.open': ['Open Quiz', 'Buka Quiz'],
        'contact.title': ['Get in touch', 'Mari terhubung'],
        'contact.send': ['Send message', 'Kirim pesan'],
        'footer.text': ['© 2026 Rahmad Faisal Rizki. Built with HTML & CSS.', '© 2026 Rahmad Faisal Rizki. Dibuat dengan HTML & CSS.'],

        /* halaman about.html */
        'about.back': ['← Back to portfolio', '← Kembali ke portofolio'],
        'page.title': ['Get to know me better', 'Kenali saya lebih dalam'],
        'page.sub': ['A closer look at who I am: my biodata, moments from my experiences, and the certificates I have earned.', 'Sekilas tentang siapa saya: biodata, momen dari pengalaman saya, dan sertifikat yang telah saya raih.'],
        'exp.title': ['Experience', 'Pengalaman'],
        'cert.title': ['Certificates', 'Sertifikat'],
        'bio.age': ['20 y/o', '20 tahun'],
        'bio.address': ['Depok, West Java', 'Depok, Jawa Barat'],
        'bio.status': ['Information Systems student, Gunadarma University (2024 – present)', 'Mahasiswa Sistem Informasi, Universitas Gunadarma (2024 – sekarang)'],
        'bio.interests': ['Web development, programming, databases, UI/UX design, e-Football, Mobile Legends, video editing', 'Pengembangan web, pemrograman, basis data, desain UI/UX, e-Football, Mobile Legends, editing video'],
        'exp1.title': ['Committee Member, PKKMB Gunadarma 2026', 'Panitia PKKMB Gunadarma 2026'],
        'exp1.desc': ['Helped prepare and run the activities and worked with fellow committee members to keep the event running smoothly.', 'Membantu persiapan dan pelaksanaan kegiatan serta bekerja sama dengan anggota panitia untuk mendukung kelancaran acara.'],
        'exp1.alt': ['PKKMB Gunadarma 2026 committee', 'Panitia PKKMB Gunadarma 2026'],
        'exp2.title': ['Fajrul Islam - Public Relations & Media Member', 'Fajrul Islam - Anggota Humas & Media'],
        'exp2.desc': ['Supported information sharing, communication, and publication of organizational activities, and collaborated with team members.', 'Membantu penyebaran informasi, komunikasi, dan publikasi kegiatan organisasi, serta bekerja sama dengan anggota tim.'],
        'exp2.alt': ['Fajrul Islam public relations & media team', 'Tim humas & media Fajrul Islam'],
        'exp3.alt': ['Experience 3', 'Pengalaman 3'],
        'cert1.title': ['Committee Member, PPKMB Fajrul Islam 2026', 'Panitia PPKMB Fajrul Islam 2026'],
        'cert1.issuer': ['UKM Fajrul Islam, Gunadarma University', 'UKM Fajrul Islam Universitas Gunadarma'],
        'cert1.alt': ['Certificate: Committee Member, PPKMB Fajrul Islam 2026', 'Sertifikat: Panitia PPKMB Fajrul Islam 2026'],
        'cert2.title': ['Seminar: Building Competent, Highly Competitive Human Resources in the Industry 4.0 Era (Participant)', 'Seminar Membangun SDM Kompeten Berdaya Saing Tinggi di Era Industri 4.0 (Peserta)'],
        'cert2.issuer': ['Professional Certification Institute, Gunadarma University', 'Lembaga Sertifikasi Profesi Universitas Gunadarma'],
        'cert2.alt': ['Certificate: Industry 4.0 seminar, Gunadarma University, 2024', 'Sertifikat: seminar Era Industri 4.0, Universitas Gunadarma, 2024'],
        'shot.viewPhoto': ['View photo:', 'Lihat foto:'],
        'shot.viewCert': ['View certificate:', 'Lihat sertifikat:'],
        'lightbox.aria': ['Image preview', 'Pratinjau gambar'],
        'lightbox.close': ['Close preview', 'Tutup pratinjau']
    };

    /* ---- keadaan awal (jalan sebelum halaman digambar, jadi tidak berkedip) ---- */
    var theme = read(KEY_THEME);
    if (theme !== 'light' && theme !== 'dark') {
        theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    root.setAttribute('data-theme', theme);

    var lang = read(KEY_LANG);
    if (lang !== 'id' && lang !== 'en') {
        lang = /^id/i.test(navigator.language || '') ? 'id' : 'en';
    }
    root.setAttribute('lang', lang);

    function t(key) {
        var pair = D[key];
        if (!pair) return key;
        return pair[lang === 'id' ? 1 : 0];
    }

    // ganti teks elemen; kalau ada anak elemen (mis. panah ↗), hanya teks pertamanya yang diganti
    function setText(el, str) {
        if (!el.children.length) { el.textContent = str; return; }
        for (var n = el.firstChild; n; n = n.nextSibling) {
            if (n.nodeType === 3 && n.nodeValue.trim()) { n.nodeValue = str + ' '; return; }
        }
        el.insertBefore(document.createTextNode(str + ' '), el.firstChild);
    }

    var ATTRS = [['alt', 'alt'], ['aria', 'aria-label'], ['content', 'content']];

    function applyLang() {
        root.setAttribute('lang', lang);
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            setText(el, t(el.getAttribute('data-i18n')));
        });
        ATTRS.forEach(function (pair) {
            document.querySelectorAll('[data-i18n-' + pair[0] + ']').forEach(function (el) {
                el.setAttribute(pair[1], t(el.getAttribute('data-i18n-' + pair[0])));
            });
        });
        var titleKey = root.getAttribute('data-title-key');
        if (titleKey) document.title = t(titleKey);
        updateThemeLabel();
        document.dispatchEvent(new CustomEvent('site:langchange', { detail: { lang: lang } }));
    }

    function updateThemeLabel() {
        var btn = document.getElementById('themeToggle');
        if (!btn) return;
        var label = t(theme === 'dark' ? 'theme.toLight' : 'theme.toDark');
        btn.setAttribute('aria-label', label);
        btn.setAttribute('title', label);
    }

    function setTheme(next) {
        var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!calm) {
            root.classList.add('theme-anim');
            setTimeout(function () { root.classList.remove('theme-anim'); }, 450);
        }
        theme = next;
        root.setAttribute('data-theme', theme);
        write(KEY_THEME, theme);
        updateThemeLabel();
    }

    function init() {
        var themeBtn = document.getElementById('themeToggle');
        var langBtn = document.getElementById('langToggle');
        if (themeBtn) themeBtn.addEventListener('click', function () {
            setTheme(theme === 'dark' ? 'light' : 'dark');
        });
        if (langBtn) langBtn.addEventListener('click', function () {
            lang = lang === 'en' ? 'id' : 'en';
            write(KEY_LANG, lang);
            applyLang();
        });
        applyLang();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.Site = { t: t };
})();