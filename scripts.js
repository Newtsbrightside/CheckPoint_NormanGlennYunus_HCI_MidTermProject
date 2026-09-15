/* ==========================================================================
   CHECKPOINT - COMMERCIAL E-COMMERCE ENGINE (807 GARAGE STYLE)
   Features: Multi-Photo PDP Modal, Wishlist, User Auth, Web Audio Chime,
   100% Accurate Product Photos & Information Alignment
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       1. VERIFIED PRODUCT CATALOG (ACCURATELY MATCHED PHOTOGRAPHY)
       Every single product title, colorway, and description matches its photo.
       ========================================================================== */
    const PRODUCTS = [
        {
            id: 1,
            name: "AstroBunny: Star Hopper Vinyl Collector Figure",
            category: 'blindbox',
            tag: 'chaser',
            tagLabel: 'SECRET 1/72',
            price: 38.00,
            unitLabel: 'Official CheckPoint Exclusive',
            rating: 5.0,
            images: [
                'images/astro_bunny_front.jpg',
                'images/astro_bunny_closeup.jpg',
                'images/collab_astrobunny.jpg'
            ],
            colors: ['Starlight Pearl White', 'Cosmic Nebula Pink', 'Aurora Mint'],
            sizes: ['Single Mystery Box', 'Collector Display Case (6 Pcs)'],
            sizeLabel: 'Select Packaging / Edition',
            description: 'The ultra-coveted CheckPoint Mascot AstroBunny! Featuring an articulated pearlescent space helmet, telemetry antennae, metallic chest life-support panel, and lunar explorer display pedestal. Individually numbered with authenticity foil seal.'
        },
        {
            id: 2,
            name: "CheckPoint × Robot H1 'Retro Mecha' Companion",
            category: 'tech',
            tag: 'limited',
            tagLabel: 'LIMITED 500 PCS',
            price: 64.00,
            unitLabel: 'Articulated Desktop Robot',
            rating: 4.9,
            images: [
                'images/robot_front.jpg',
                'images/robot_closeup.jpg',
                'images/robot_box.jpg'
            ],
            colors: ['Retro Mint Chassis', 'Matte Industrial Grey', 'Cyberpunk Amber'],
            sizes: ['Standard Figure (12cm)', 'Deluxe Boxed Collector Edition'],
            sizeLabel: 'Select Packaging / Edition',
            description: 'Precision molded retro-futuristic robot companion with working rotating dials, magnetic claw attachments, LED backlit eyes, and heavy die-cast metal weighted base. Packaged in a vintage foil-stamped presentation box.'
        },
        {
            id: 3,
            name: 'Super Mario Bros. Designer Vinyl Figure Trio',
            category: 'blindbox',
            tag: 'bestseller',
            tagLabel: 'BESTSELLER',
            price: 34.50,
            unitLabel: 'Licensed Nintendo Collector Trio',
            rating: 5.0,
            images: [
                'images/mario_trio_full.jpg',
                'images/mario_closeup.jpg',
                'images/peach_luigi_closeup.jpg'
            ],
            colors: ['Complete Trio Set (Mario, Peach, Luigi)', 'Mystery Solo Blind Box'],
            sizes: ['Standard Figures (9cm)', 'Collector Display Master Set'],
            sizeLabel: 'Select Packaging / Edition',
            description: 'Officially licensed collector figures featuring Mario, Princess Peach, and Luigi. Sculpted with authentic game-accurate details, weighted bases, and collector cards.'
        },
        {
            id: 4,
            name: 'AeroStunt X-1 Child-Safe Mini Quadcopter Drone',
            category: 'tech',
            tag: 'exclusive',
            tagLabel: 'TOP RATED',
            price: 49.99,
            unitLabel: 'Obstacle Sensing Stunt Drone',
            rating: 4.9,
            images: [
                'images/drone_front.jpg',
                'images/drone_angle.jpg',
                'images/drone_box.jpg'
            ],
            colors: ['Stealth Graphite', 'Electric Neon Yellow', 'Vibrant Cobalt'],
            sizes: ['Single Battery Pack (15 Min Flight)', 'Explorer Pro Bundle (3 Batteries + Case)'],
            sizeLabel: 'Select Flight Bundle',
            description: 'Engineered specifically for young pilots with full 360° protective propeller cages, infrared obstacle avoidance sensors, one-key auto takeoff/landing, and 360-degree aerial stunt flips.'
        },
        {
            id: 5,
            name: 'Creative Architecture 1,000-Piece Building Brick Set',
            category: 'puzzles',
            tag: 'bestseller',
            tagLabel: 'CREATIVE STEM',
            price: 45.00,
            unitLabel: '1,000 Precision Interlocking Bricks',
            rating: 5.0,
            images: [
                'images/lego_brick_castle.jpg',
                'images/lego_brick_details.jpg',
                'images/lego_brick_flatlay.jpg'
            ],
            colors: ['Primary Spectrum Set', 'Pastel Architectural Palette', 'Monochrome Studio'],
            sizes: ['500 Pieces Starter Tub', '1,000 Pieces Master Collector Set'],
            sizeLabel: 'Select Set Size',
            description: '1,000 vibrant, precision-machined building bricks compatible with all major construction block brands. Includes building idea guide, brick separator tool, and modular sorting storage tub.'
        },
        {
            id: 6,
            name: 'Nordic Heirloom Wooden Activity Train & Stacking Blocks',
            category: 'classic',
            tag: 'exclusive',
            tagLabel: 'HEIRLOOM QUALITY',
            price: 39.00,
            unitLabel: 'Solid Natural Beechwood Toy',
            rating: 5.0,
            images: [
                'images/wooden_blocks_train.jpg',
                'images/wooden_blocks_closeup.jpg',
                'images/wooden_blocks_arranged.jpg'
            ],
            colors: ['Nordic Pastel Harmony', 'Natural Untreated Wood', 'Vibrant Primary'],
            sizes: ['Classic Train Set (18 Pcs)', 'Deluxe Grand Town & Train (36 Pcs)'],
            sizeLabel: 'Select Set Edition',
            description: 'Crafted from sustainably harvested European beechwood and colored with certified organic non-toxic waterborne finishes. Magnetic coupling carriages with interchangeable geometric stacking blocks.'
        },
        {
            id: 7,
            name: 'Huggable Cloud Velvet Bear Plush Toy',
            category: 'classic',
            tag: 'bestseller',
            tagLabel: 'ULTRA COZY',
            price: 29.50,
            unitLabel: 'Hypoallergenic Velvet Plush',
            rating: 4.9,
            images: [
                'images/plush_bear_front.jpg',
                'images/plush_bear_closeup.jpg',
                'images/plush_bear_seated.jpg'
            ],
            colors: ['Honey Golden Brown', 'Snow Cream White', 'Mocha Cappuccino'],
            sizes: ['Medium Companion (35cm)', 'Giant Huggable Size (65cm)'],
            sizeLabel: 'Select Plush Size',
            description: 'Irresistibly soft cloud velvet fur with embroidered child-safe facial features (zero plastic beads or choke hazards). Hand-washable and filled with 100% recycled eco-fluff.'
        },
        {
            id: 8,
            name: 'Mecha Titan Guardian Articulated Collector Action Figure',
            category: 'blindbox',
            tag: 'limited',
            tagLabel: 'COLLECTOR EDITION',
            price: 42.00,
            unitLabel: 'Posable Art Toy Figure',
            rating: 4.8,
            images: [
                'images/robot_figure_front.jpg',
                'images/robot_figure_closeup.jpg',
                'images/robot_figure_action.jpg'
            ],
            colors: ['Titan White & Navy', 'Stealth Matte Black', 'Crimson Flare Special'],
            sizes: ['Standard Figure (15cm)', 'Collector Deluxe (with Acrylic Display Pod)'],
            sizeLabel: 'Select Packaging / Edition',
            description: 'Fully articulated collector mech figure featuring 16 points of ratcheted articulation, interchangeable tactical hand grips, magnetized energy shield, and serialized collector card.'
        }
    ];

    /* ==========================================================================
       2. STATE & STORAGE
       ========================================================================== */
    const FREE_SHIPPING_LIMIT = 80.00;
    const SHIPPING_FLAT_FEE = 9.99;
    const DISCOUNT_CODES = {
        'CHECKPOINT10': 0.10,
        'ILOVECHECKPOINT': 0.15,
        '807GARAGE': 0.12
    };

    let cart = loadStorage('checkpoint_cart_items', []);
    let wishlist = loadStorage('checkpoint_wishlist_items', []);
    let currentUser = loadStorage('checkpoint_auth_user', null);

    // Sanitize any legacy cart or wishlist items from localStorage
    cart = cart.filter(item => PRODUCTS.some(p => p.id === item.id && p.name === item.name));
    wishlist = wishlist.filter(id => PRODUCTS.some(p => p.id === id));
    saveStorage('checkpoint_cart_items', cart);
    saveStorage('checkpoint_wishlist_items', wishlist);

    let activeCategory = 'all';
    let activeQuery = '';
    let activeSort = 'featured';
    let currentDiscountRate = 0;
    let selectedPdpProduct = null;

    function loadStorage(key, fallback) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch (e) {
            return fallback;
        }
    }

    function saveStorage(key, val) {
        try {
            localStorage.setItem(key, JSON.stringify(val));
        } catch (e) {
            console.error('Storage error:', e);
        }
    }

    /* ==========================================================================
       3. DOM ELEMENTS
       ========================================================================== */
    const productGrid = document.getElementById('product-grid');
    const noProductsMsg = document.getElementById('no-products-msg');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    const categoryPills = document.querySelectorAll('.pill-button');
    const catalogSearch = document.getElementById('catalog-search');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const sortSelect = document.getElementById('sort-select');
    const quickSearchInput = document.getElementById('quick-search-input');
    const navLinks = document.querySelectorAll('.nav-link');

    // Header Actions
    const cartBadge = document.getElementById('cart-badge');
    const wishlistBadge = document.getElementById('wishlist-badge');
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const wishlistToggleBtn = document.getElementById('wishlist-toggle-btn');
    const loginModalBtn = document.getElementById('login-modal-btn');
    const userDisplayLabel = document.getElementById('user-display-label');

    // Cart Drawer Elements
    const cartDrawer = document.getElementById('cart-drawer');
    const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const emptyCartState = document.getElementById('empty-cart-state');
    const drawerFooter = document.getElementById('drawer-footer');
    const drawerItemCount = document.getElementById('drawer-item-count');
    const drawerSubtotal = document.getElementById('drawer-subtotal');
    const drawerShipping = document.getElementById('drawer-shipping');
    const drawerDiscountRow = document.getElementById('drawer-discount-row');
    const drawerDiscount = document.getElementById('drawer-discount');
    const drawerTotal = document.getElementById('drawer-total');
    const shippingProgressBar = document.getElementById('shipping-progress-bar');
    const shippingProgressText = document.getElementById('shipping-progress-text');
    const couponInput = document.getElementById('coupon-input');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const couponFeedback = document.getElementById('coupon-feedback');
    const triggerCheckoutBtn = document.getElementById('trigger-checkout-btn');
    const startShoppingBtn = document.getElementById('start-shopping-btn');

    // Wishlist Drawer Elements
    const wishlistDrawer = document.getElementById('wishlist-drawer');
    const wishlistDrawerOverlay = document.getElementById('wishlist-drawer-overlay');
    const closeWishlistBtn = document.getElementById('close-wishlist-btn');
    const wishlistItemsContainer = document.getElementById('wishlist-items-container');
    const emptyWishlistView = document.getElementById('empty-wishlist-view');
    const wishlistDrawerCount = document.getElementById('wishlist-drawer-count');

    // PDP Modal Elements
    const pdpModalOverlay = document.getElementById('product-detail-modal-overlay');
    const closePdpBtn = document.getElementById('close-product-detail-btn');
    const pdpMainImg = document.getElementById('pdp-main-img');
    const pdpRarityTag = document.getElementById('pdp-rarity-tag');
    const pdpThumbnails = document.getElementById('pdp-thumbnails');
    const pdpCategoryCrumb = document.getElementById('pdp-category-crumb');
    const pdpTitleCrumb = document.getElementById('pdp-title-crumb');
    const pdpTitle = document.getElementById('pdp-title');
    const pdpPrice = document.getElementById('pdp-price');
    const pdpColorOptions = document.getElementById('pdp-color-options');
    const pdpSizeLabel = document.getElementById('pdp-size-label');
    const pdpSizeOptions = document.getElementById('pdp-size-options');
    const pdpFullDescription = document.getElementById('pdp-full-description');
    const pdpBuyNowBtn = document.getElementById('pdp-buy-now-btn');
    const pdpAddCartBtn = document.getElementById('pdp-add-cart-btn');
    const pdpWishlistToggleBtn = document.getElementById('pdp-wishlist-toggle-btn');
    const shareWaBtn = document.getElementById('share-wa-btn');
    const shareTgBtn = document.getElementById('share-tg-btn');
    const shareLinkBtn = document.getElementById('share-link-btn');

    // Login Modal
    const loginModalOverlay = document.getElementById('login-modal-overlay');
    const closeLoginBtn = document.getElementById('close-login-btn');
    const loginForm = document.getElementById('login-form');
    const guestLoginBtn = document.getElementById('guest-login-btn');

    // Checkout & Success Modals
    const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const modalSummaryCount = document.getElementById('modal-summary-count');
    const modalSummaryTotal = document.getElementById('modal-summary-total');
    const paymentPills = document.querySelectorAll('.pay-option');

    const successModalOverlay = document.getElementById('success-modal-overlay');
    const successCustomerName = document.getElementById('success-customer-name');
    const successOrderId = document.getElementById('success-order-id');
    const successEmail = document.getElementById('success-email');
    const successContinueBtn = document.getElementById('success-continue-btn');

    // Utilities
    const toastContainer = document.getElementById('toast-container');
    const countdownTimer = document.getElementById('countdown-timer');

    /* ==========================================================================
       4. AUDIO CHIME (WEB AUDIO API)
       ========================================================================== */
    function playCheckoutChime() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;

            const ctx = new AudioCtx();
            const now = ctx.currentTime;
            const chord = [523.25, 659.25, 783.99, 1046.50];

            chord.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + i * 0.08);

                gain.gain.setValueAtTime(0.001, now + i * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.25, now + i * 0.08 + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.5);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(now + i * 0.08);
                osc.stop(now + i * 0.08 + 0.55);
            });
        } catch (e) {
            console.warn('Audio playback error:', e);
        }
    }

    /* ==========================================================================
       5. CATALOG RENDERING (MATCHING PRODUCT PHOTOS)
       ========================================================================== */
    function renderCatalog() {
        let items = PRODUCTS.filter(p => {
            const catMatch = activeCategory === 'all' || p.category === activeCategory;
            const q = activeQuery.toLowerCase().trim();
            const searchMatch = !q ||
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.tagLabel.toLowerCase().includes(q);
            return catMatch && searchMatch;
        });

        if (activeSort === 'price-low') {
            items.sort((a, b) => a.price - b.price);
        } else if (activeSort === 'price-high') {
            items.sort((a, b) => b.price - a.price);
        } else if (activeSort === 'rating') {
            items.sort((a, b) => b.rating - a.rating);
        }

        productGrid.innerHTML = '';
        if (items.length === 0) {
            noProductsMsg.style.display = 'block';
            productGrid.style.display = 'none';
        } else {
            noProductsMsg.style.display = 'none';
            productGrid.style.display = 'grid';

            items.forEach(product => {
                const isWishlisted = wishlist.includes(product.id);
                const card = document.createElement('div');
                card.className = 'product-card-807';
                card.dataset.id = product.id;
                card.innerHTML = `
                    <div class="card-media-box">
                        <span class="card-series-tag tag-${product.tag}">${product.tagLabel}</span>
                        <button class="btn-card-wishlist ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Save to Wishlist">
                            <svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                        <img src="${product.images[0]}" alt="${product.name}" class="card-product-img" loading="lazy">
                    </div>
                    <div class="card-details-box">
                        <h4 class="card-product-title">${product.name}</h4>
                        <div class="card-product-price">$${product.price.toFixed(2)}</div>
                    </div>
                `;
                productGrid.appendChild(card);
            });
        }
    }

    // Category Filter Pills
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = pill.dataset.category;

            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.nav === activeCategory);
            });

            renderCatalog();
        });
    });

    // Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetNav = link.dataset.nav;
            if (targetNav) {
                activeCategory = targetNav;
                categoryPills.forEach(p => {
                    p.classList.toggle('active', p.dataset.category === activeCategory);
                });
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                renderCatalog();
            }
        });
    });

    // Collab Buttons
    document.querySelectorAll('.filter-trigger-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const f = btn.dataset.filter;
            if (f) {
                activeCategory = f;
                categoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === activeCategory));
                renderCatalog();
                document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Live Search
    let searchDebounce;
    catalogSearch.addEventListener('input', (e) => {
        clearTimeout(searchDebounce);
        activeQuery = e.target.value;
        clearSearchBtn.style.display = activeQuery ? 'inline-flex' : 'none';
        searchDebounce = setTimeout(renderCatalog, 180);
    });

    clearSearchBtn.addEventListener('click', () => {
        catalogSearch.value = '';
        activeQuery = '';
        clearSearchBtn.style.display = 'none';
        renderCatalog();
    });

    quickSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            activeQuery = quickSearchInput.value.trim();
            catalogSearch.value = activeQuery;
            clearSearchBtn.style.display = activeQuery ? 'inline-flex' : 'none';
            renderCatalog();
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Sort Dropdown
    sortSelect.addEventListener('change', (e) => {
        activeSort = e.target.value;
        renderCatalog();
    });

    resetFiltersBtn.addEventListener('click', () => {
        activeCategory = 'all';
        activeQuery = '';
        activeSort = 'featured';
        catalogSearch.value = '';
        clearSearchBtn.style.display = 'none';
        sortSelect.value = 'featured';
        categoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
        renderCatalog();
    });

    /* ==========================================================================
       6. PRODUCT DETAIL MODAL (PDP - 807 GARAGE EXPERIENCE)
       ========================================================================== */
    function openProductDetail(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        selectedPdpProduct = product;

        // Set Images & Gallery
        pdpMainImg.src = product.images[0];
        pdpRarityTag.textContent = product.tagLabel;
        pdpRarityTag.className = `pdp-tag-badge tag-${product.tag}`;

        pdpThumbnails.innerHTML = '';
        product.images.forEach((imgUrl, index) => {
            const thumb = document.createElement('div');
            thumb.className = `pdp-thumb-item ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${imgUrl}" alt="Thumbnail ${index + 1}">`;
            thumb.addEventListener('click', () => {
                document.querySelectorAll('.pdp-thumb-item').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                pdpMainImg.src = imgUrl;
            });
            pdpThumbnails.appendChild(thumb);
        });

        // Set Information
        pdpCategoryCrumb.textContent = product.category.toUpperCase();
        pdpTitleCrumb.textContent = product.name;
        pdpTitle.textContent = product.name;
        pdpPrice.textContent = `$${product.price.toFixed(2)}`;
        pdpFullDescription.textContent = product.description;

        // Colors
        pdpColorOptions.innerHTML = '';
        product.colors.forEach((col, idx) => {
            const pill = document.createElement('button');
            pill.className = `color-option-pill ${idx === 0 ? 'active' : ''}`;
            pill.textContent = col;
            pill.addEventListener('click', () => {
                document.querySelectorAll('.color-option-pill').forEach(c => c.classList.remove('active'));
                pill.classList.add('active');
            });
            pdpColorOptions.appendChild(pill);
        });

        // Sizes / Options
        pdpSizeLabel.textContent = product.sizeLabel || 'Select Size';
        pdpSizeOptions.innerHTML = '';
        product.sizes.forEach((sz, idx) => {
            const btn = document.createElement('button');
            btn.className = `pdp-size-btn ${idx === 0 ? 'active' : ''}`;
            btn.textContent = sz;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
            pdpSizeOptions.appendChild(btn);
        });

        // Wishlist Button State
        const isWishlisted = wishlist.includes(product.id);
        pdpWishlistToggleBtn.classList.toggle('active', isWishlisted);

        // Open Modal
        pdpModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProductDetail() {
        pdpModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    closePdpBtn.addEventListener('click', closeProductDetail);
    pdpModalOverlay.addEventListener('click', (e) => {
        if (e.target === pdpModalOverlay) closeProductDetail();
    });

    // Delegate Card Click to Open PDP
    productGrid.addEventListener('click', (e) => {
        const wishlistBtn = e.target.closest('.btn-card-wishlist');
        if (wishlistBtn) {
            e.stopPropagation();
            const id = Number(wishlistBtn.dataset.id);
            toggleWishlist(id);
            return;
        }

        const card = e.target.closest('.product-card-807');
        if (card) {
            const id = Number(card.dataset.id);
            openProductDetail(id);
        }
    });

    // PDP Buy Now Button (Instant Checkout)
    pdpBuyNowBtn.addEventListener('click', () => {
        if (!selectedPdpProduct) return;
        addToCart(selectedPdpProduct.id);
        closeProductDetail();
        openCheckout();
    });

    // PDP Add to Cart Button
    pdpAddCartBtn.addEventListener('click', () => {
        if (!selectedPdpProduct) return;
        addToCart(selectedPdpProduct.id);
        closeProductDetail();
        openBag();
    });

    // PDP Wishlist Button
    pdpWishlistToggleBtn.addEventListener('click', () => {
        if (!selectedPdpProduct) return;
        toggleWishlist(selectedPdpProduct.id);
        const isWishlisted = wishlist.includes(selectedPdpProduct.id);
        pdpWishlistToggleBtn.classList.toggle('active', isWishlisted);
    });

    // Social Share Buttons
    shareWaBtn.addEventListener('click', () => {
        const text = encodeURIComponent(`Check out ${selectedPdpProduct?.name || 'this item'} on CheckPoint!`);
        window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });

    shareTgBtn.addEventListener('click', () => {
        const text = encodeURIComponent(`Check out ${selectedPdpProduct?.name || 'this item'} on CheckPoint!`);
        window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${text}`, '_blank');
    });

    shareLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            triggerToast('Product link copied to clipboard.');
        });
    });

    /* ==========================================================================
       7. WISHLIST MANAGEMENT
       ========================================================================== */
    function toggleWishlist(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const idx = wishlist.indexOf(productId);
        if (idx > -1) {
            wishlist.splice(idx, 1);
            triggerToast(`Removed <strong>${product.name}</strong> from wishlist.`);
        } else {
            wishlist.push(productId);
            triggerToast(`Saved <strong>${product.name}</strong> to wishlist.`);
        }

        saveStorage('checkpoint_wishlist_items', wishlist);
        updateWishlistUI();
        renderCatalog();
    }

    function openWishlist() {
        wishlistDrawer.classList.add('open');
        wishlistDrawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeWishlist() {
        wishlistDrawer.classList.remove('open');
        wishlistDrawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    wishlistToggleBtn.addEventListener('click', openWishlist);
    closeWishlistBtn.addEventListener('click', closeWishlist);
    wishlistDrawerOverlay.addEventListener('click', closeWishlist);

    function updateWishlistUI() {
        wishlistBadge.textContent = wishlist.length;
        wishlistDrawerCount.textContent = `${wishlist.length} saved`;

        if (wishlist.length === 0) {
            emptyWishlistView.style.display = 'flex';
            wishlistItemsContainer.style.display = 'none';
        } else {
            emptyWishlistView.style.display = 'none';
            wishlistItemsContainer.style.display = 'flex';

            wishlistItemsContainer.innerHTML = '';
            wishlist.forEach(id => {
                const item = PRODUCTS.find(p => p.id === id);
                if (!item) return;

                const row = document.createElement('div');
                row.className = 'bag-item-card';
                row.innerHTML = `
                    <img src="${item.images[0]}" alt="${item.name}" class="bag-thumb">
                    <div class="bag-meta">
                        <h4 class="bag-title">${item.name}</h4>
                        <div class="bag-price">$${item.price.toFixed(2)}</div>
                        <button class="btn-action-dark btn-move-cart" data-id="${item.id}" style="padding: 6px 14px; font-size: 0.78rem;">
                            Move to Bag
                        </button>
                    </div>
                    <button class="btn-remove-bag-item btn-remove-wishlist" data-id="${item.id}" aria-label="Remove from Wishlist">
                        <svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                `;
                wishlistItemsContainer.appendChild(row);
            });
        }
    }

    wishlistItemsContainer.addEventListener('click', (e) => {
        const moveBtn = e.target.closest('.btn-move-cart');
        if (moveBtn) {
            const id = Number(moveBtn.dataset.id);
            addToCart(id);
            toggleWishlist(id);
            closeWishlist();
            openBag();
            return;
        }

        const removeBtn = e.target.closest('.btn-remove-wishlist');
        if (removeBtn) {
            const id = Number(removeBtn.dataset.id);
            toggleWishlist(id);
        }
    });

    /* ==========================================================================
       8. USER AUTH / LOGIN MODAL
       ========================================================================== */
    function openLogin() {
        loginModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLogin() {
        loginModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    loginModalBtn.addEventListener('click', () => {
        if (currentUser) {
            if (confirm(`Logged in as ${currentUser.name}. Do you want to log out?`)) {
                currentUser = null;
                saveStorage('checkpoint_auth_user', null);
                updateAuthUI();
                triggerToast('Logged out successfully.');
            }
        } else {
            openLogin();
        }
    });

    closeLoginBtn.addEventListener('click', closeLogin);
    loginModalOverlay.addEventListener('click', (e) => {
        if (e.target === loginModalOverlay) closeLogin();
    });

    function setAuthUser(user) {
        currentUser = user;
        saveStorage('checkpoint_auth_user', currentUser);
        updateAuthUI();
        closeLogin();
        triggerToast(`Welcome back, <strong>${user.name}</strong>!`);
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const name = email.split('@')[0];
        setAuthUser({ name: name.charAt(0).toUpperCase() + name.slice(1), email });
    });

    guestLoginBtn.addEventListener('click', () => {
        setAuthUser({ name: 'Alex Vance', email: 'alex@checkpoint.com' });
    });

    function updateAuthUI() {
        if (currentUser) {
            userDisplayLabel.textContent = currentUser.name.split(' ')[0];
            loginModalBtn.style.background = '#000000';
            loginModalBtn.style.color = '#FFFFFF';
        } else {
            userDisplayLabel.textContent = 'Login';
            loginModalBtn.style.background = '';
            loginModalBtn.style.color = '';
        }
    }

    /* ==========================================================================
       9. SHOPPING BAG / CART LOGIC
       ========================================================================== */
    function openBag() {
        cartDrawer.classList.add('open');
        cartDrawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeBag() {
        cartDrawer.classList.remove('open');
        cartDrawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    cartToggleBtn.addEventListener('click', openBag);
    closeCartBtn.addEventListener('click', closeBag);
    cartDrawerOverlay.addEventListener('click', closeBag);
    startShoppingBtn.addEventListener('click', () => {
        closeBag();
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });

    function addToCart(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: 1
            });
        }

        saveStorage('checkpoint_cart_items', cart);
        updateBagUI();

        triggerToast(`Added <strong>${product.name}</strong> to bag.`);
    }

    function modifyQty(productId, delta) {
        const item = cart.find(i => i.id === productId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }

        saveStorage('checkpoint_cart_items', cart);
        updateBagUI();
    }

    function removeFromCart(productId) {
        cart = cart.filter(i => i.id !== productId);
        saveStorage('checkpoint_cart_items', cart);
        updateBagUI();
        triggerToast('Item removed from shopping bag.');
    }

    function updateBagUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        drawerItemCount.textContent = `${totalItems} item${totalItems === 1 ? '' : 's'}`;

        if (cart.length === 0) {
            cartItemsContainer.style.display = 'none';
            drawerFooter.style.display = 'none';
            emptyCartState.style.display = 'flex';
        } else {
            emptyCartState.style.display = 'none';
            cartItemsContainer.style.display = 'flex';
            drawerFooter.style.display = 'block';

            cartItemsContainer.innerHTML = '';
            cart.forEach(item => {
                const row = document.createElement('div');
                row.className = 'bag-item-card';
                row.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="bag-thumb">
                    <div class="bag-meta">
                        <h4 class="bag-title">${item.name}</h4>
                        <div class="bag-price">$${(item.price * item.quantity).toFixed(2)}</div>
                        <div class="bag-qty-stepper">
                            <button class="btn-qty-step btn-step-minus" data-id="${item.id}" aria-label="Decrease quantity">−</button>
                            <span class="bag-qty-value">${item.quantity}</span>
                            <button class="btn-qty-step btn-step-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
                        </div>
                    </div>
                    <button class="btn-remove-bag-item" data-id="${item.id}" aria-label="Remove item">
                        <svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                `;
                cartItemsContainer.appendChild(row);
            });
        }

        // Calculations
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discountVal = subtotal * currentDiscountRate;
        const discountedSubtotal = subtotal - discountVal;
        const isFree = discountedSubtotal >= FREE_SHIPPING_LIMIT || subtotal === 0;
        const shippingCost = isFree ? 0.00 : SHIPPING_FLAT_FEE;
        const grandTotal = subtotal === 0 ? 0 : (discountedSubtotal + shippingCost);

        drawerSubtotal.textContent = `$${subtotal.toFixed(2)}`;

        if (currentDiscountRate > 0) {
            drawerDiscountRow.style.display = 'flex';
            drawerDiscount.textContent = `-$${discountVal.toFixed(2)}`;
        } else {
            drawerDiscountRow.style.display = 'none';
        }

        drawerShipping.textContent = isFree ? 'FREE' : `$${shippingCost.toFixed(2)}`;
        drawerTotal.textContent = `$${grandTotal.toFixed(2)}`;

        // Progress Bar
        const percent = Math.min(100, (discountedSubtotal / FREE_SHIPPING_LIMIT) * 100);
        shippingProgressBar.style.width = `${percent}%`;

        if (isFree && subtotal > 0) {
            shippingProgressText.innerHTML = `<strong>Free Express Shipping Unlocked!</strong>`;
        } else {
            const diff = (FREE_SHIPPING_LIMIT - discountedSubtotal).toFixed(2);
            shippingProgressText.innerHTML = `Add <strong>$${diff}</strong> more for <strong>FREE Express Shipping</strong>`;
        }
    }

    cartItemsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const id = Number(btn.dataset.id);

        if (btn.classList.contains('btn-step-plus')) modifyQty(id, 1);
        if (btn.classList.contains('btn-step-minus')) modifyQty(id, -1);
        if (btn.classList.contains('btn-remove-bag-item')) removeFromCart(id);
    });

    applyCouponBtn.addEventListener('click', () => {
        const code = couponInput.value.trim().toUpperCase();
        if (!code) return;

        if (DISCOUNT_CODES[code]) {
            currentDiscountRate = DISCOUNT_CODES[code];
            couponFeedback.className = 'coupon-feedback success';
            couponFeedback.textContent = `Promo code "${code}" applied (${(currentDiscountRate * 100).toFixed(0)}% Off)`;
            updateBagUI();
        } else {
            couponFeedback.className = 'coupon-feedback error';
            couponFeedback.textContent = `Invalid code. Try CHECKPOINT10 or 807GARAGE`;
        }
    });

    /* ==========================================================================
       10. CHECKOUT MODAL & WEB AUDIO CHIME
       ========================================================================== */
    function openCheckout() {
        if (cart.length === 0) return;
        closeBag();

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discountVal = subtotal * currentDiscountRate;
        const isFree = (subtotal - discountVal) >= FREE_SHIPPING_LIMIT;
        const shippingCost = isFree ? 0.00 : SHIPPING_FLAT_FEE;
        const grandTotal = (subtotal - discountVal) + shippingCost;
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);

        modalSummaryCount.textContent = `${count} item${count === 1 ? '' : 's'}`;
        modalSummaryTotal.textContent = `$${grandTotal.toFixed(2)}`;

        if (currentUser) {
            document.getElementById('cust-name').value = currentUser.name;
            document.getElementById('cust-email').value = currentUser.email;
        }

        checkoutModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCheckout() {
        checkoutModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    triggerCheckoutBtn.addEventListener('click', openCheckout);
    closeModalBtn.addEventListener('click', closeCheckout);
    checkoutModalOverlay.addEventListener('click', (e) => {
        if (e.target === checkoutModalOverlay) closeCheckout();
    });

    paymentPills.forEach(pill => {
        pill.addEventListener('click', () => {
            paymentPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('cust-name').value;
        const email = document.getElementById('cust-email').value;
        const orderId = '#CP-' + Math.floor(10000 + Math.random() * 90000);

        successCustomerName.textContent = name;
        successOrderId.textContent = orderId;
        successEmail.textContent = email;

        closeCheckout();

        // Reset cart
        cart = [];
        saveStorage('checkpoint_cart_items', cart);
        updateBagUI();
        checkoutForm.reset();

        // 1. Play native Web Audio Chime!
        playCheckoutChime();

        // 2. Open Success Modal & Confetti
        successModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        runConfettiAnimation();
    });

    successContinueBtn.addEventListener('click', () => {
        successModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });

    /* ==========================================================================
       11. COUNTDOWN TICKER & CONFETTI
       ========================================================================== */
    let timerSecs = 5 * 3600 + 42 * 60 + 19;
    setInterval(() => {
        timerSecs--;
        if (timerSecs < 0) timerSecs = 6 * 3600;

        const h = Math.floor(timerSecs / 3600);
        const m = Math.floor((timerSecs % 3600) / 60);
        const s = timerSecs % 60;

        if (countdownTimer) {
            countdownTimer.textContent = 
                `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        }
    }, 1000);

    function triggerToast(html) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E60012" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${html}</span>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 250);
        }, 3000);
    }

    function runConfettiAnimation() {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#E60012', '#00A8FF', '#FFC400', '#111827', '#00B894'];

        for (let i = 0; i < 110; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 20,
                vy: (Math.random() - 0.7) * 22,
                size: Math.random() * 7 + 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rSpeed: (Math.random() - 0.5) * 8,
                gravity: 0.4,
                drag: 0.98,
                alpha: 1
            });
        }

        let animId;
        function renderFrame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = 0;

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;
                p.vx *= p.drag;
                p.vy *= p.drag;
                p.rotation += p.rSpeed;
                p.alpha -= 0.008;

                if (p.alpha > 0) {
                    alive++;
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.rotation * Math.PI) / 180);
                    ctx.globalAlpha = Math.max(0, p.alpha);
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                    ctx.restore();
                }
            });

            if (alive > 0) {
                animId = requestAnimationFrame(renderFrame);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                cancelAnimationFrame(animId);
            }
        }
        renderFrame();
    }

    // Escape Key Handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBag();
            closeWishlist();
            closeLogin();
            closeProductDetail();
            closeCheckout();
            successModalOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    /* ==========================================================================
       12. INITIALIZATION
       ========================================================================== */
    renderCatalog();
    updateBagUI();
    updateWishlistUI();
    updateAuthUI();
});