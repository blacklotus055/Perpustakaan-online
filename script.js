const BOOKS = {
    perdata: [
        { title: "Hukum Perikatan", file: "https://drive.google.com/file/d/16hV5N3qqFJFxg0iLC4_9G9uqrWgCZzTe/preview" },
        { title: "Hukum Waris", file: "https://drive.google.com/file/d/1WcLDBLEPerXNyZUgjNA6bljjMRs2OQoF/preview" },
        { title: "Pengantar Hukum Acara Perdata", file: "https://drive.google.com/file/d/1YN314rPHVWb4vCEP-ZdmRvHEB6NFKtRq/preview" },
        { title: "Buku Belajar Hukum Perdata", file: "https://drive.google.com/file/d/1_muxUh5QB7UrrbU1hAifLOHTAXdFW9Ms/preview" },
        { title: "Hukum Perkawinan", file: "https://drive.google.com/file/d/1QwFk-raf0Ye3y8JXe6KvgFiFY5mv2j4U/preview" },
        { title: "Hukum Perdata Hukum Orang dan Keluarga", file: "https://drive.google.com/file/d/1DZpArIBI4f51vDZYEWM1JMuAEw0se_gw/preview" },
        { title: "Hukum Perdata (Martha Eri Safira)", file: "https://drive.google.com/file/d/1GdaCRyW7pfEwGx5vOjU3fds7_ePRCQ-I/preview" },
        { title: "Hukum Perdata dan Asas-Asas Perkembangannya", file: "https://drive.google.com/file/d/1o90RT4UTBW5W6GulMLxHf255r1O9OwjQ/preview" },
        { title: "Buku Ajar Hukum Acara Perdata", file: "https://drive.google.com/file/d/1p0I4E1d-oMmk7XypWSsenlJr-SO7t0F7/preview" },
        { title: "Hukum Harta Kekayaan", file: "https://drive.google.com/file/d/1IE4bRVWHgfrjX8kiREMoRc4OkOnBorTb/preview" },
        { title: "Praktik Peradilan Perdata", file: "https://drive.google.com/file/d/1nxW1EKIe_mp9gGkKsFQCaa-teTiUEX_Q/preview" },
        { title: "Buku Ajar Hukum Acara Perdata Dr. Ma’ruf Akib", file: "https://drive.google.com/file/d/1g8FJHfncH2Jn6V6M8jlNXn3_JMOsavLw/preview" },
        { title: "Hukum Perdata dalam Sebuah Perjanjian", file: "https://drive.google.com/file/d/11vuQB_29ssqkeF8Hn1mSjbN-TAssQYwu/preview" },
        { title: "Kapita Selekta Hukum Perdata", file: "https://drive.google.com/file/d/1xb-o4ZSPAqD7vUO3c7AwIiKDXSW3O_R0/preview" },
        { title: "Hukum Perdata Indonesia", file: "https://drive.google.com/file/d/1RfTFmlaUTnH5j8Gk2J_n8WMuYqQcRQ_c/preview" },
        { title: "Pengantar Hukum Perdata di Indonesia", file: "https://drive.google.com/file/d/1N95FPHlVzGUqLf49nNJ1Ldb_x1RTyNJY/preview" },
        { title: "Perbandingan Hukum Perdata", file: "https://drive.google.com/file/d/1MJSHVyu34TGekntVJxxg97vaUH6Ygev0/preview" },
        { title: "Hukum Perdata", file: "https://drive.google.com/file/d/18HFEvkUWS7vsG6vddKkba5ofYokR8jHc/preview" },
        { title: "Buku Dasar-Dasar Hukum Perdata Internasional", file: "https://drive.google.com/file/d/1UxahPY_qisy5uMSSOGjv4XUw3h1aNtDu/preview" },
        { title: "Hukum Perdata (Dr. Muhamad Sadi Is)", file: "https://drive.google.com/file/d/1ck-sRL1Go7HamWT7MpgPZTwQD3mg4nv-/preview" }
    ],
    pidana: [
        { title: "Buku Ajar Hukum Pidana", file: "https://drive.google.com/file/d/1_Afc-OvuIEYowle9KZp8vqh3ogBbbHUt/preview" },
        { title: "Pengantar Hukum Pidana", file: "https://drive.google.com/file/d/11fLOMeGleJCOUCeQx3yOOqsS5HCQlm9i/preview" },
        { title: "Buku Hukum Pidana (Dr. H. Imron Rosyadi)", file: "https://drive.google.com/file/d/1PE6O-82_5SYT4cKPF-Wb86LGzyjrv49n/preview" },
        { title: "Hukum Pidana", file: "https://drive.google.com/file/d/1ufsYIaKIaXI69S9Y_HfnYOG_JUUM2UAs/preview" },
        { title: "Dasar-Dasar Hukum Pidana di Indonesia", file: "https://drive.google.com/file/d/1zpGy8L46KlYI4aaJv5FLvLEI-AeD_W9Z/preview" },
        { title: "Hukum Pidana Khusus", file: "https://drive.google.com/file/d/1orrYWVVRHFYmS8vgqTQgCgwpoHsPl1D9/preview" },
        { title: "Buku Ajar Hukum Siber Perspektif Pidana", file: "https://drive.google.com/file/d/1fRGZsGlIkxhJvqzaBoyJJe1_QC5PixFF/preview" },
        { title: "Hukum Pidana Korupsi", file: "https://drive.google.com/file/d/1mlxnFoSuFWogB8l5ynd4oOrOnjuoCpQ7/preview" },
        { title: "Buku Ajar Hukum dan Kriminologi", file: "https://drive.google.com/file/d/1ZXjpsuso-CXjfK7BnNM6Nd0ImeafyGS7/preview" },
        { title: "Hukum Pidana di Era Digital", file: "https://drive.google.com/file/d/1Wmt1iiLwQEJQNXf-BkniT-mEbilZDSSb/preview" },
        { title: "Hukum Pidana Dasar-Dasar (KUHP & RUU KUHP)", file: "https://drive.google.com/file/d/1-4PzuIGZSyUwnIGj0YWQxIl7t1bpUBKh/preview" },
        { title: "Kajian Hukum Pidana Indonesia", file: "https://drive.google.com/file/d/1eju8Lhao35KymQu9a88FESv_CAbRnNRY/preview" },
        { title: "Hukum Pidana (Dr. Tofik Yanuar Chandra)", file: "https://drive.google.com/file/d/1Mt7e0nSuemHuAmJHQWlAjsWPX-py9Fjh/preview" },
        { title: "Pengantar Hukum Pidana (Transisi)", file: "https://drive.google.com/file/d/1p1SWugM3zRif2VKakxBSpEtmMF3YiBVW/preview" },
        { title: "Hukum Acara Pidana dan Rencana KUHP", file: "https://drive.google.com/file/d/1YvcTwdlnHUTwlUe9dljOeu1SHVzo2srA/preview" },
        { title: "Suatu Pengantar Kriminologi", file: "https://drive.google.com/file/d/1q_GAXdEhpexQk_Z1pPWQGz-Ucd9FONpS/preview" },
        { title: "Penyidikan Pidana di Indonsia", file: "https://drive.google.com/file/d/1TXwjJS1sqCwWCaayFo4jyCbrkSbL2lJM/preview" },
        { title: "Hukum Pidana Islam", file: "https://drive.google.com/file/d/1VxPRr8yaXyLbWQg4ZTD9jmxDFC9HHC-O/preview" },
        { title: "Buku Ajar Kriminologi", file: "https://drive.google.com/file/d/1U10X34FlsF5_xpolJAjyX0ovXd3VvxLw/preview" },
        { title: "Hukum Acara Pidana dan Pidana Cyber", file: "https://drive.google.com/file/d/1sov0vegibJ9ar0kEq9WHsdJ4nA5QCNYq/preview" }
    ],
    "tata negara": [
        { title: "Hukum Tata Negara dan Pengawasan Eksekutif", file: "https://drive.google.com/file/d/1dW-IV1rUKfg9mm76RFYm3HzXkAvFXCql/preview" },
        { title: "Hukum Tata Negara Indonesia", file: "https://drive.google.com/file/d/1UmAvA8J1p_QbXyR7u5gpz32Ey2B1NMUs/preview" },
        { title: "Hukum Hak Asasi Manusia", file: "https://drive.google.com/file/d/1jxizzAZe_BSBcYdgU9IC210Ezk8wmf1y/preview" },
        { title: "Dasar-Dasar Teori Hukum Tata Negara", file: "https://drive.google.com/file/d/1cSXyhVFU3HvNrNr-JfIQeqTUcLZiDtH8/preview" },
        { title: "Hukum Tata Negara Indonesia (Drs. Nuruddin)", file: "https://drive.google.com/file/d/19helVlOZN7HwxJCxL0Kw899uvcSeDvNY/preview" },
        { title: "Filsafat dan Praktik Hukum TUN", file: "https://drive.google.com/file/d/1dsm3i0KvwaAPYkVKL5tY8k2XNuMbqqT2/preview" },
        { title: "Hukum Tata Negara (Ibnu Sam Widodo)", file: "https://drive.google.com/file/d/1gvXMoXHLn4C5LSOCjLcKvgSEpL9UIbSC/preview" },
        { title: "Hukum Pemerintahan Daerah", file: "https://drive.google.com/file/d/1QlBR69zO1UebBWlu-9oF1RKHdZw9zoaz/preview" },
        { title: "Pengantar HTN dan Dinamika Ketatanegaraan", file: "https://drive.google.com/file/d/1YgKAOOeSX-MJD-bdcWBh9ndxoRIX_BZl/preview" },
        { title: "Hukum Tata Negara Indonesia (Imam Mahdi)", file: "https://drive.google.com/file/d/1LDjmOVb9wULHr2V69abHaXBSSv_PVixB/preview" },
        { title: "Hukum Tata Negara (Agus Riewanto)", file: "https://drive.google.com/file/d/1om-_N-wolzkzUv8iVcBWWWhZ1OOZ2oxL/preview" },
        { title: "HTN Indonesia (Teori dan Penerapan)", file: "https://drive.google.com/file/d/17Oovu1XWLOyTi0sjVO-RB4eGRw4Ey3_a/preview" },
        { title: "Konstitusi (Teori, Hukum, Perkembangan)", file: "https://drive.google.com/file/d/1MO9ttJh1RPhn0uHfgaXpspNy5nwt3v78/preview" },
        { title: "Pengantar Hukum Tata Negara Indonesia", file: "https://drive.google.com/file/d/1BX0-HUDRzQZ-ACBE3i6Pps50JjhPqHm1/preview" },
        { title: "Pengantar Ilmu Hukum Tata Negara I", file: "https://drive.google.com/file/d/1ILW2Lir40mhNLDGtOhWd09QhRICqSt1e/preview" },
        { title: "Pengantar Ilmu Hukum Tata Negara II", file: "https://drive.google.com/file/d/19IgGfTN-nkaUbbEB2-OmNHDJbDUaxFUD/preview" },
        { title: "Pengantar HTN (Arman Koedoeboen)", file: "https://drive.google.com/file/d/1zc9Id9ULP0GLWstk9R1gBmL5AQ7Yxd1N/preview" },
        { title: "Rekontruksi Hukum Tata Negara", file: "https://drive.google.com/file/d/1CljRY4T7-kfDeDCgPJJ7Ya0xXp1jBtN7/preview" },
        { title: "Hukum Konstitusi di Indonesia", file: "https://drive.google.com/file/d/1ZCpI0WAZXUWCQRVzqGl5j9N46VYrWmWA/preview" },
        { title: "Hukum Tata Negara (Vernando)", file: "https://drive.google.com/file/d/1jYOrLaKMEerunh6xYKRTU3XcUCR-MtQy/preview" }
    ]
};

// State
let currentView = 'login';
let loggedInNpm = sessionStorage.getItem('npmLogin') || null;
let selectedCategory = null;
let searchQuery = '';
let selectedBook = null;

// DOM Elements
const app = document.getElementById('app');

// Initialization
function init() {
    if (loggedInNpm) {
        currentView = 'kategori';
    }
    render();
}

function render() {
    if (currentView === 'login') {
        renderLogin();
    } else {
        renderAppLayout();
    }
}

function renderLogin() {
    const template = document.getElementById('login-template');
    app.innerHTML = '';
    const clone = template.content.cloneNode(true);
    
    const loginButton = clone.getElementById('login-button');
    const npmInput = clone.getElementById('npm-input');
    const errorMsg = clone.getElementById('login-error');

    const handleLogin = () => {
        const npm = npmInput.value.trim();
        const npmNum = Number(npm);
        if (/^\d{13}$/.test(npm) && npmNum >= 2300000000000 && npmNum <= 2500000000000) {
            sessionStorage.setItem('npmLogin', npm);
            loggedInNpm = npm;
            currentView = 'kategori';
            render();
        } else {
            errorMsg.textContent = 'NPM harus 13 digit (23... hingga 25...)';
            errorMsg.classList.remove('hidden');
        }
    };

    loginButton.addEventListener('click', handleLogin);
    npmInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleLogin();
    });

    app.appendChild(clone);
    lucide.createIcons();
}

function renderAppLayout() {
    const template = document.getElementById('app-layout');
    app.innerHTML = '';
    const clone = template.content.cloneNode(true);

    // Set User Info
    clone.getElementById('user-npm').textContent = loggedInNpm;

    // Sidebar Categories
    const catContainer = clone.getElementById('sidebar-categories');
    ['perdata', 'pidana', 'tata negara'].forEach(cat => {
        const btn = document.createElement('button');
        const isActive = selectedCategory === cat;
        btn.className = `w-full text-left p-4 rounded-2xl flex items-center gap-3 transition-all group ${
            isActive ? 'bg-[#E6C35C] text-[#142b45] font-bold shadow-[0_10px_20px_rgba(212,175,55,0.2)]' : 'text-white/50 hover:bg-white/5 hover:text-white'
        }`;
        btn.innerHTML = `
            <i data-lucide="book-open" class="w-5 h-5 ${isActive ? 'text-[#142b45]' : 'text-[#D4AF37]/50'}"></i>
            <span class="capitalize text-sm font-medium tracking-wide">${cat}</span>
        `;
        btn.addEventListener('click', () => {
            selectedCategory = cat;
            currentView = 'buku';
            searchQuery = '';
            if (window.innerWidth < 1024) toggleSidebar(false);
            render();
        });
        catContainer.appendChild(btn);
    });

    // Reset Footer Button
    clone.getElementById('reset-filter').addEventListener('click', () => {
        selectedCategory = null;
        currentView = 'kategori';
        render();
    });

    // Logout
    clone.getElementById('logout-button').addEventListener('click', () => {
        sessionStorage.removeItem('npmLogin');
        loggedInNpm = null;
        currentView = 'login';
        selectedCategory = null;
        render();
    });

    // Sidebar Controls
    const sidebar = clone.getElementById('sidebar');
    const openBtn = clone.getElementById('open-sidebar');
    const closeBtn = clone.getElementById('close-sidebar');

    const toggleSidebar = (show) => {
        if (show) {
            sidebar.classList.remove('-translate-x-full');
        } else {
            sidebar.classList.add('-translate-x-full');
        }
    };

    openBtn.addEventListener('click', () => toggleSidebar(true));
    closeBtn.addEventListener('click', () => toggleSidebar(false));

    // Dynamic View
    const contentArea = clone.getElementById('content-area');
    if (currentView === 'kategori') {
        const catViewTemplate = document.getElementById('kategori-view');
        const catClone = catViewTemplate.content.cloneNode(true);
        
        catClone.querySelectorAll('[data-category]').forEach(card => {
            card.addEventListener('click', () => {
                selectedCategory = card.dataset.category;
                currentView = 'buku';
                searchQuery = '';
                render();
            });
        });
        contentArea.appendChild(catClone);
    } else if (currentView === 'buku') {
        renderBukuView(contentArea);
    }

    app.appendChild(clone);
    lucide.createIcons();
}

function renderBukuView(container) {
    const template = document.getElementById('buku-view');
    const clone = template.content.cloneNode(true);

    const title = clone.getElementById('view-category-title');
    title.textContent = selectedCategory;

    const searchInput = clone.getElementById('search-input');
    searchInput.value = searchQuery;
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        const filtered = filterBooks();
        renderBooks(filtered);
    });

    const booksGrid = clone.getElementById('books-grid');
    const emptyState = clone.getElementById('empty-state');

    const filterBooks = () => {
        return BOOKS[selectedCategory].filter(book => 
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const renderBooks = (list) => {
        booksGrid.innerHTML = '';
        if (list.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            list.forEach((book, idx) => {
                const card = document.createElement('div');
                card.className = "bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 flex items-center justify-between group cursor-pointer transition-all hover:bg-white/10 hover:-translate-y-1 shadow-lg animate-enter";
                card.style.animationDelay = `${idx * 0.05}s`;
                card.innerHTML = `
                    <div class="flex items-center gap-5 min-w-0">
                        <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E6C35C]/20 to-[#C9A227]/10 flex items-center justify-center border border-[#D4AF37]/10 group-hover:scale-110 transition-transform">
                            <i data-lucide="book-open" class="w-7 h-7 text-[#D4AF37]"></i>
                        </div>
                        <div class="min-w-0">
                            <h3 class="text-base font-bold text-white group-hover:text-[#E6C35C] transition-colors truncate max-w-[200px] md:max-w-xs leading-tight">
                                ${book.title}
                            </h3>
                            <p class="text-[10px] text-[#D4AF37] uppercase font-black tracking-widest mt-1 opacity-40">Materi Hukum</p>
                        </div>
                    </div>
                    <div class="flex-shrink-0 opacity-20 group-hover:opacity-100 transition-all">
                        <div class="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all">
                            <i data-lucide="arrow-left" class="w-5 h-5 text-[#D4AF37] rotate-180 group-hover:text-[#142b45]"></i>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => openViewer(book));
                booksGrid.appendChild(card);
            });
            lucide.createIcons({ attrs: { class: 'w-7 h-7 text-[#D4AF37]' } }); // Specific for book cards
        }
    };

    renderBooks(filterBooks());
    container.appendChild(clone);
}

// Viewer Logic
const viewer = document.getElementById('book-viewer');
const viewerTitle = document.getElementById('viewer-title');
const viewerIframe = document.getElementById('viewer-iframe');
const closeViewerBtn = document.getElementById('close-viewer');
const closeViewerBtn2 = document.getElementById('close-viewer-btn');
const nextBtn = document.getElementById('next-book');
const prevBtn = document.getElementById('prev-book');

function openViewer(book) {
    selectedBook = book;
    viewerTitle.textContent = book.title;
    viewerIframe.src = book.file;
    viewer.classList.remove('hidden');
    lucide.createIcons();
}

function closeViewer() {
    viewer.classList.add('hidden');
    viewerIframe.src = '';
    selectedBook = null;
}

closeViewerBtn.addEventListener('click', closeViewer);
closeViewerBtn2.addEventListener('click', closeViewer);

nextBtn.addEventListener('click', () => {
    const list = BOOKS[selectedCategory];
    const idx = list.findIndex(b => b.title === selectedBook.title);
    const nextBook = idx < list.length - 1 ? list[idx + 1] : list[0];
    openViewer(nextBook);
});

prevBtn.addEventListener('click', () => {
    const list = BOOKS[selectedCategory];
    const idx = list.findIndex(b => b.title === selectedBook.title);
    const prevBook = idx > 0 ? list[idx - 1] : list[list.length - 1];
    openViewer(prevBook);
});

// Start app
init();
lucide.createIcons();
