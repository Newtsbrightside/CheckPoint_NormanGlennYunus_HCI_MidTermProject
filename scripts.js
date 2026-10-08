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
            age: '8+',
            ageNum: 8,
            pieces: '1 pc Figure + Stand',
            itemNumber: '#CP-76419',
            sparks: 380,
            dimensions: '14cm × 9cm × 8cm',
            difficulty: 'Collector Series',
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
            age: '10+',
            ageNum: 10,
            pieces: '120 pcs Articulated',
            itemNumber: '#CP-80102',
            sparks: 640,
            dimensions: '16cm × 11cm × 8cm',
            difficulty: 'Intermediate',
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
            age: '6+',
            ageNum: 6,
            pieces: '3 Figures Trio',
            itemNumber: '#CP-55209',
            sparks: 345,
            dimensions: '9cm × 6cm × 5cm (each)',
            difficulty: 'All Ages',
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
            age: '12+',
            ageNum: 12,
            pieces: '18 pcs Stunt Kit',
            itemNumber: '#CP-91040',
            sparks: 500,
            dimensions: '12cm × 12cm × 4cm',
            difficulty: 'Advanced Tech',
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
            age: '8+',
            ageNum: 8,
            pieces: '1,000 pcs Bricks',
            itemNumber: '#CP-10001',
            sparks: 450,
            dimensions: '28cm × 20cm Tub',
            difficulty: 'Master Builder',
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
            age: '3+',
            ageNum: 3,
            pieces: '36 Beechwood Blocks',
            itemNumber: '#CP-20412',
            sparks: 390,
            dimensions: '45cm × 10cm × 8cm',
            difficulty: 'Early Childhood',
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
            age: '3+',
            ageNum: 3,
            pieces: '1 pc Velvet Plush',
            itemNumber: '#CP-30515',
            sparks: 295,
            dimensions: '35cm / 65cm Seated',
            difficulty: 'All Ages',
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
            age: '18+',
            ageNum: 18,
            isAdultsWelcome: true,
            pieces: '180 pcs Posable Mech',
            itemNumber: '#CP-60882',
            sparks: 420,
            dimensions: '18cm × 12cm × 9cm',
            difficulty: 'Adults 18+ Display',
            images: [
                'images/robot_figure_front.jpg',
                'images/robot_figure_closeup.jpg',
                'images/robot_figure_action.jpg'
            ],
            colors: ['Titan White & Navy', 'Stealth Matte Black', 'Crimson Flare Special'],
            sizes: ['Standard Figure (15cm)', 'Collector Deluxe (with Acrylic Display Pod)'],
            sizeLabel: 'Select Packaging / Edition',
            description: 'Fully articulated collector mech figure featuring 16 points of ratcheted articulation, interchangeable tactical hand grips, magnetized energy shield, and serialized collector card.'
        },
        {
            id: 99,
            name: 'CheckPoint Studio 100-Brick Creator Color Tub',
            category: 'puzzles',
            tag: 'exclusive',
            tagLabel: 'LAB EXCLUSIVE',
            price: 14.99,
            unitLabel: 'Custom Creator Brick Selection',
            rating: 5.0,
            age: '6+',
            ageNum: 6,
            pieces: '100 pcs Studs & Bricks',
            itemNumber: '#CP-00100',
            sparks: 150,
            dimensions: '15cm × 15cm Tub',
            difficulty: 'Creative Sandbox',
            images: [
                'images/lego_brick_details.jpg',
                'images/lego_brick_flatlay.jpg',
                'images/lego_brick_castle.jpg'
            ],
            colors: ['Creative Rainbow Mix', 'Monochrome Studio', 'Warm Sunset'],
            sizes: ['100 Bricks Compact Tub', '250 Bricks Deluxe Bucket'],
            sizeLabel: 'Select Brick Quantity',
            description: 'Custom curated vibrant builder tub containing premium precision-machined interlocking ABS plastic bricks compatible with all standard building systems.'
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
        '807GARAGE': 0.12,
        'CHASER20': 0.20,
        'VIPSPARKS': 0.15
    };

    let cart = loadStorage('checkpoint_cart_items', []);
    let wishlist = loadStorage('checkpoint_wishlist_items', []);
    let currentUser = loadStorage('checkpoint_auth_user', null);
    let sfxEnabled = loadStorage('checkpoint_sfx_enabled', true);
    let insidersSparks = loadStorage('checkpoint_insiders_sparks', 350);
    let isSparksRedeemed = false;
    let comparedProducts = [];

    // Sanitize any legacy cart or wishlist items from localStorage
    cart = cart.filter(item => PRODUCTS.some(p => p.id === item.id && p.name === item.name));
    wishlist = wishlist.filter(id => PRODUCTS.some(p => p.id === id));
    saveStorage('checkpoint_cart_items', cart);
    saveStorage('checkpoint_wishlist_items', wishlist);

    let activeCategory = 'all';
    let activeAge = 'all';
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
    const agePills = document.querySelectorAll('.age-pill-btn');
    const catalogSearch = document.getElementById('catalog-search');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const sortSelect = document.getElementById('sort-select');
    const quickSearchInput = document.getElementById('quick-search-input');
    const navLinks = document.querySelectorAll('.nav-link');

    // SFX Toggle
    const sfxToggleBtn = document.getElementById('sfx-toggle-btn');
    const sfxIcon = document.getElementById('sfx-icon');
    const sfxLabel = document.getElementById('sfx-label');

    // Header Actions
    const cartBadge = document.getElementById('cart-badge');
    const wishlistBadge = document.getElementById('wishlist-badge');
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const wishlistToggleBtn = document.getElementById('wishlist-toggle-btn');
    const loginModalBtn = document.getElementById('login-modal-btn');
    const userDisplayLabel = document.getElementById('user-display-label');
    const insidersToggleBtn = document.getElementById('insiders-toggle-btn');
    const headerSparksCount = document.getElementById('header-sparks-count');
    const openBrickLabNavBtn = document.getElementById('open-brick-lab-nav-btn');
    const heroBrickLabBtn = document.getElementById('hero-brick-lab-btn');

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
    const drawerSparksDiscountRow = document.getElementById('drawer-sparks-discount-row');
    const drawerSparksDiscount = document.getElementById('drawer-sparks-discount');
    const drawerTotal = document.getElementById('drawer-total');
    const couponInput = document.getElementById('coupon-input');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const couponFeedback = document.getElementById('coupon-feedback');
    const triggerCheckoutBtn = document.getElementById('trigger-checkout-btn');
    const startShoppingBtn = document.getElementById('start-shopping-btn');

    // LEGO GWP Tier Ladder & Sparks Redemption Elements
    const gwpProgressBar = document.getElementById('gwp-progress-bar');
    const gwpStatusText = document.getElementById('gwp-status-text');
    const gwpStep1 = document.getElementById('gwp-step-1');
    const gwpStep2 = document.getElementById('gwp-step-2');
    const gwpStep3 = document.getElementById('gwp-step-3');
    const gwpUnlockedBadges = document.getElementById('gwp-unlocked-badges');
    const cartEarnedSparks = document.getElementById('cart-earned-sparks');
    const cartCurrentBalance = document.getElementById('cart-current-balance');
    const redeemSparksBtn = document.getElementById('redeem-sparks-btn');

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
    const pdpSpecAge = document.getElementById('pdp-spec-age');
    const pdpSpecPieces = document.getElementById('pdp-spec-pieces');
    const pdpSpecItem = document.getElementById('pdp-spec-item');
    const pdpSpecSparks = document.getElementById('pdp-spec-sparks');
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
    const pdpTryBuilderBtn = document.getElementById('pdp-try-builder-btn');

    // Set Comparison Elements
    const compareFloatingBar = document.getElementById('compare-floating-bar');
    const compareCountBadge = document.getElementById('compare-count-badge');
    const compareThumbsStrip = document.getElementById('compare-thumbs-strip');
    const clearCompareBtn = document.getElementById('clear-compare-btn');
    const launchCompareBtn = document.getElementById('launch-compare-btn');
    const compareModalOverlay = document.getElementById('compare-modal-overlay');
    const closeCompareBtn = document.getElementById('close-compare-btn');
    const compareTableWrapper = document.getElementById('compare-table-wrapper');

    // CheckPoint Brick Lab & Mystery Unboxer Elements
    const brickLabModalOverlay = document.getElementById('brick-lab-modal-overlay');
    const closeBrickLabBtn = document.getElementById('close-brick-lab-btn');
    const tabBuilderBtn = document.getElementById('tab-builder-btn');
    const tabUnboxerBtn = document.getElementById('tab-unboxer-btn');
    const brickBuilderPanel = document.getElementById('brick-builder-panel');
    const brickUnboxerPanel = document.getElementById('brick-unboxer-panel');
    const legoBaseplateGrid = document.getElementById('lego-baseplate-grid');
    const builderBrickCount = document.getElementById('builder-brick-count');
    const clearBuilderBtn = document.getElementById('clear-builder-btn');
    const addCustomSetBtn = document.getElementById('add-custom-set-btn');
    const colorSwatches = document.querySelectorAll('.color-swatch-btn');
    const brickTypeBtns = document.querySelectorAll('.brick-type-btn');
    const presetBtns = document.querySelectorAll('.btn-preset-load');

    // Unboxer Elements
    const mysteryFoilBox = document.getElementById('mystery-foil-box');
    const btnShakeBox = document.getElementById('btn-shake-box');
    const btnRipFoil = document.getElementById('btn-rip-foil');
    const unboxerStepPill = document.getElementById('unboxer-step-pill');
    const revealedToyCard = document.getElementById('revealed-toy-card');
    const applyChaserCodeBtn = document.getElementById('apply-chaser-code-btn');
    const btnResetUnbox = document.getElementById('btn-reset-unbox');

    // Insiders Program Modal Elements
    const insidersModalOverlay = document.getElementById('insiders-modal-overlay');
    const closeInsidersBtn = document.getElementById('close-insiders-btn');
    const insidersModalPoints = document.getElementById('insiders-modal-points');

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
       4. AUDIO ENGINE (WEB AUDIO API - BRICK CLICKS & CHIMES)
       ========================================================================== */
    function updateSfxUI() {
        if (sfxIcon && sfxLabel && sfxToggleBtn) {
            sfxIcon.textContent = sfxEnabled ? '🔊' : '🔇';
            sfxLabel.textContent = sfxEnabled ? 'SFX: ON' : 'SFX: OFF';
            sfxToggleBtn.classList.toggle('muted', !sfxEnabled);
        }
    }

    if (sfxToggleBtn) {
        sfxToggleBtn.addEventListener('click', () => {
            sfxEnabled = !sfxEnabled;
            saveStorage('checkpoint_sfx_enabled', sfxEnabled);
            updateSfxUI();
            if (sfxEnabled) playBrickClickSound();
            triggerToast(sfxEnabled ? 'Tactile brick sound effects enabled.' : 'Sound effects muted.');
        });
        updateSfxUI();
    }

    function playBrickClickSound() {
        if (!sfxEnabled) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const now = ctx.currentTime;

            // Fast snappy high-impact noise pulse
            const bufferSize = Math.floor(ctx.sampleRate * 0.025);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
            }
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(2800, now);
            filter.Q.setValueAtTime(3.5, now);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.28, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.024);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(now);

            // Resonant plastic body snap
            const osc = ctx.createOscillator();
            const oscGain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, now);
            osc.frequency.exponentialRampToValueAtTime(280, now + 0.03);

            oscGain.gain.setValueAtTime(0.18, now);
            oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

            osc.connect(oscGain);
            oscGain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.035);
        } catch (e) {
            // Audio error silent fallback
        }
    }

    function playBoxRattleSound() {
        if (!sfxEnabled) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const now = ctx.currentTime;

            [0, 0.05, 0.11, 0.18].forEach((t) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(500 + Math.random() * 450, now + t);
                gain.gain.setValueAtTime(0.16, now + t);
                gain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.035);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + t);
                osc.stop(now + t + 0.04);
            });
        } catch (e) {}
    }

    function playFoilRipSound() {
        if (!sfxEnabled) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const now = ctx.currentTime;

            const bufferSize = Math.floor(ctx.sampleRate * 0.16);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
            }
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(1600, now);
            filter.frequency.exponentialRampToValueAtTime(4500, now + 0.16);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.24, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(now);
        } catch (e) {}
    }

    function playCheckoutChime() {
        if (!sfxEnabled) return;
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
       5. CATALOG RENDERING & AGE FILTERING
       ========================================================================== */
    function renderCatalog() {
        let items = PRODUCTS.filter(p => {
            const catMatch = activeCategory === 'all' || p.category === activeCategory;
            
            let ageMatch = true;
            if (activeAge === '3+') ageMatch = p.ageNum <= 3;
            else if (activeAge === '6+') ageMatch = p.ageNum <= 6;
            else if (activeAge === '8+') ageMatch = p.ageNum <= 8;
            else if (activeAge === '12+') ageMatch = p.ageNum <= 12;
            else if (activeAge === '18+') ageMatch = p.ageNum >= 18 || p.isAdultsWelcome;

            const q = activeQuery.toLowerCase().trim();
            const searchMatch = !q ||
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.tagLabel.toLowerCase().includes(q) ||
                (p.pieces && p.pieces.toLowerCase().includes(q)) ||
                (p.itemNumber && p.itemNumber.toLowerCase().includes(q));

            return catMatch && ageMatch && searchMatch;
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
                const isCompared = comparedProducts.includes(product.id);

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
                        <button class="btn-card-quick-add" data-id="${product.id}" aria-label="Add to Cart">
                            <svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="card-details-box">
                        <h4 class="card-product-title">${product.name}</h4>
                        <div class="card-spec-strip">
                            <span>Ages <strong>${product.age}</strong></span>
                            <span class="card-spec-bullet">•</span>
                            <span>${product.pieces}</span>
                            <span class="card-spec-bullet">•</span>
                            <span>⭐ ${product.sparks} pts</span>
                        </div>
                        <div class="card-product-price">$${product.price.toFixed(2)}</div>
                        <div class="card-compare-row">
                            <button class="btn-card-compare ${isCompared ? 'active' : ''}" data-id="${product.id}" aria-label="Compare set">
                                <span class="compare-checkbox-box"></span>
                                <span>${isCompared ? 'Comparing' : 'Compare'}</span>
                            </button>
                            <small style="color:var(--text-muted);font-weight:700;">${product.difficulty}</small>
                        </div>
                    </div>
                `;
                productGrid.appendChild(card);
            });
        }
    }

    // Category Filter Pills
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            playBrickClickSound();
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeCategory = pill.dataset.category;

            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.nav === activeCategory);
            });

            renderCatalog();
        });
    });

    // LEGO.com "Shop by Age" Filter Pills
    agePills.forEach(pill => {
        pill.addEventListener('click', () => {
            playBrickClickSound();
            agePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeAge = pill.dataset.age;
            renderCatalog();
        });
    });

    // Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetNav = link.dataset.nav;
            if (targetNav) {
                playBrickClickSound();
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
            playBrickClickSound();
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
        playBrickClickSound();
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
        playBrickClickSound();
        activeSort = e.target.value;
        renderCatalog();
    });

    resetFiltersBtn.addEventListener('click', () => {
        playBrickClickSound();
        activeCategory = 'all';
        activeAge = 'all';
        activeQuery = '';
        activeSort = 'featured';
        catalogSearch.value = '';
        clearSearchBtn.style.display = 'none';
        sortSelect.value = 'featured';
        categoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
        agePills.forEach(p => p.classList.toggle('active', p.dataset.age === 'all'));
        renderCatalog();
    });

    /* ==========================================================================
       6. PRODUCT DETAIL MODAL (PDP - LEGO SPECIFICATIONS DASHBOARD)
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
                playBrickClickSound();
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

        // LEGO 4-Grid Set Specification Badges
        if (pdpSpecAge) pdpSpecAge.textContent = product.age;
        if (pdpSpecPieces) pdpSpecPieces.textContent = product.pieces;
        if (pdpSpecItem) pdpSpecItem.textContent = product.itemNumber;
        if (pdpSpecSparks) pdpSpecSparks.textContent = `⭐ ${product.sparks} pts`;

        // Colors
        pdpColorOptions.innerHTML = '';
        product.colors.forEach((col, idx) => {
            const pill = document.createElement('button');
            pill.className = `color-option-pill ${idx === 0 ? 'active' : ''}`;
            pill.textContent = col;
            pill.addEventListener('click', () => {
                playBrickClickSound();
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
                playBrickClickSound();
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

    if (pdpTryBuilderBtn) {
        pdpTryBuilderBtn.addEventListener('click', () => {
            closeProductDetail();
            openBrickLab();
        });
    }

    // Delegate Card Click to Open PDP, Quick-Add, or Compare
    productGrid.addEventListener('click', (e) => {
        // Compare button click
        const compareBtn = e.target.closest('.btn-card-compare');
        if (compareBtn) {
            e.stopPropagation();
            const id = Number(compareBtn.dataset.id);
            toggleProductComparison(id);
            return;
        }

        // Quick-Add to Cart button
        const quickAddBtn = e.target.closest('.btn-card-quick-add');
        if (quickAddBtn) {
            e.stopPropagation();
            const id = Number(quickAddBtn.dataset.id);
            playBrickClickSound();
            addToCart(id);
            openBag();
            return;
        }

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
        playBrickClickSound();
        addToCart(selectedPdpProduct.id);
        closeProductDetail();
        openCheckout();
    });

    // PDP Add to Cart Button
    pdpAddCartBtn.addEventListener('click', () => {
        if (!selectedPdpProduct) return;
        playBrickClickSound();
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
       7. SET COMPARISON FEATURE (LEGO.COM SPEC SHEET COMPARISON)
       ========================================================================== */
    function toggleProductComparison(productId) {
        playBrickClickSound();
        const idx = comparedProducts.indexOf(productId);
        if (idx > -1) {
            comparedProducts.splice(idx, 1);
        } else {
            if (comparedProducts.length >= 3) {
                triggerToast('You can compare a maximum of 3 sets at once.');
                return;
            }
            comparedProducts.push(productId);
        }

        updateCompareBarUI();
        renderCatalog();
    }

    function updateCompareBarUI() {
        if (comparedProducts.length === 0) {
            compareFloatingBar.style.display = 'none';
        } else {
            compareFloatingBar.style.display = 'block';
            compareCountBadge.textContent = `${comparedProducts.length} / 3`;

            compareThumbsStrip.innerHTML = '';
            comparedProducts.forEach(id => {
                const p = PRODUCTS.find(prod => prod.id === id);
                if (p) {
                    const img = document.createElement('img');
                    img.src = p.images[0];
                    img.alt = p.name;
                    img.className = 'compare-thumb-mini';
                    compareThumbsStrip.appendChild(img);
                }
            });
        }
    }

    clearCompareBtn.addEventListener('click', () => {
        playBrickClickSound();
        comparedProducts = [];
        updateCompareBarUI();
        renderCatalog();
        triggerToast('Comparison selection cleared.');
    });

    function openCompareModal() {
        if (comparedProducts.length === 0) return;
        playBrickClickSound();

        const sets = comparedProducts.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

        let tableHtml = `
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Set Overview</th>
                        ${sets.map(s => `
                            <td class="compare-product-col">
                                <img src="${s.images[0]}" alt="${s.name}" class="compare-col-img">
                                <h4 class="compare-col-title">${s.name}</h4>
                                <div class="compare-col-price">$${s.price.toFixed(2)}</div>
                                <button class="btn-compare-buy" data-id="${s.id}">Add to Bag</button>
                            </td>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Recommended Age</th>
                        ${sets.map(s => `<td><strong>${s.age}</strong></td>`).join('')}
                    </tr>
                    <tr>
                        <th>Pieces / Parts</th>
                        ${sets.map(s => `<td><strong>${s.pieces}</strong></td>`).join('')}
                    </tr>
                    <tr>
                        <th>Item Number</th>
                        ${sets.map(s => `<td><code>${s.itemNumber}</code></td>`).join('')}
                    </tr>
                    <tr>
                        <th>Insiders Sparks Earned</th>
                        ${sets.map(s => `<td>⭐ <strong>${s.sparks} Sparks</strong></td>`).join('')}
                    </tr>
                    <tr>
                        <th>Building Difficulty</th>
                        ${sets.map(s => `<td>${s.difficulty}</td>`).join('')}
                    </tr>
                    <tr>
                        <th>Customer Rating</th>
                        ${sets.map(s => `<td>★ <strong>${s.rating.toFixed(1)} / 5.0</strong></td>`).join('')}
                    </tr>
                    <tr>
                        <th>Product Dimensions</th>
                        ${sets.map(s => `<td>${s.dimensions}</td>`).join('')}
                    </tr>
                    <tr>
                        <th>Child Safety Standards</th>
                        ${sets.map(() => `<td>ASTM F963 / EN71 Non-Toxic Certified</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        `;

        compareTableWrapper.innerHTML = tableHtml;
        compareModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        compareTableWrapper.querySelectorAll('.btn-compare-buy').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = Number(btn.dataset.id);
                addToCart(id);
                compareModalOverlay.classList.remove('open');
                document.body.style.overflow = '';
                openBag();
            });
        });
    }

    launchCompareBtn.addEventListener('click', openCompareModal);
    closeCompareBtn.addEventListener('click', () => {
        compareModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });
    compareModalOverlay.addEventListener('click', (e) => {
        if (e.target === compareModalOverlay) {
            compareModalOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    /* ==========================================================================
       8. CHECKPOINT BRICK LAB & MYSTERY UNBOXING STUDIO
       ========================================================================== */
    let activeBrickColor = '#E60012';
    let baseplateBricks = new Array(64).fill(null);

    function openBrickLab() {
        playBrickClickSound();
        brickLabModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        initBaseplate();
    }

    function closeBrickLab() {
        brickLabModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (openBrickLabNavBtn) openBrickLabNavBtn.addEventListener('click', openBrickLab);
    if (heroBrickLabBtn) heroBrickLabBtn.addEventListener('click', openBrickLab);
    if (closeBrickLabBtn) closeBrickLabBtn.addEventListener('click', closeBrickLab);
    brickLabModalOverlay.addEventListener('click', (e) => {
        if (e.target === brickLabModalOverlay) closeBrickLab();
    });

    // Tab Switching
    tabBuilderBtn.addEventListener('click', () => {
        playBrickClickSound();
        tabBuilderBtn.classList.add('active');
        tabUnboxerBtn.classList.remove('active');
        brickBuilderPanel.classList.add('active');
        brickUnboxerPanel.classList.remove('active');
    });

    tabUnboxerBtn.addEventListener('click', () => {
        playBrickClickSound();
        tabUnboxerBtn.classList.add('active');
        tabBuilderBtn.classList.remove('active');
        brickUnboxerPanel.classList.add('active');
        brickBuilderPanel.classList.remove('active');
    });

    // Color swatches
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            playBrickClickSound();
            colorSwatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            activeBrickColor = swatch.dataset.color;
        });
    });

    // Brick types
    brickTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            playBrickClickSound();
            brickTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Initialize 8x8 Baseplate
    function initBaseplate() {
        if (legoBaseplateGrid.children.length === 64) return;
        legoBaseplateGrid.innerHTML = '';
        for (let i = 0; i < 64; i++) {
            const stud = document.createElement('div');
            stud.className = 'baseplate-stud';
            stud.dataset.index = i;
            stud.addEventListener('click', () => {
                placeBrickOnStud(i, stud);
            });
            legoBaseplateGrid.appendChild(stud);
        }
    }

    function placeBrickOnStud(index, studEl) {
        playBrickClickSound();
        if (baseplateBricks[index] === activeBrickColor) {
            // Remove
            baseplateBricks[index] = null;
            studEl.style.backgroundColor = '';
            studEl.classList.remove('has-brick');
        } else {
            // Place
            baseplateBricks[index] = activeBrickColor;
            studEl.style.backgroundColor = activeBrickColor;
            studEl.classList.add('has-brick');
        }

        const count = baseplateBricks.filter(Boolean).length;
        builderBrickCount.textContent = count;
    }

    clearBuilderBtn.addEventListener('click', () => {
        playBrickClickSound();
        baseplateBricks.fill(null);
        document.querySelectorAll('.baseplate-stud').forEach(s => {
            s.style.backgroundColor = '';
            s.classList.remove('has-brick');
        });
        builderBrickCount.textContent = '0';
        triggerToast('Baseplate cleared.');
    });

    // Preset builds
    const PRESETS = {
        castle: {
            color: '#0066CC',
            indices: [0, 2, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 33, 34, 37, 38, 41, 42, 45, 46, 49, 50, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63]
        },
        robot: {
            color: '#1E293B',
            indices: [10, 13, 17, 18, 19, 20, 21, 22, 25, 26, 29, 30, 33, 34, 35, 36, 37, 38, 42, 45, 50, 51, 52, 53]
        },
        duck: {
            color: '#FFC400',
            indices: [11, 12, 18, 19, 20, 25, 26, 27, 28, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53]
        },
        heart: {
            color: '#E60012',
            indices: [9, 10, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 42, 43, 44, 45, 51, 52]
        }
    };

    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            playBrickClickSound();
            const pKey = btn.dataset.preset;
            const preset = PRESETS[pKey];
            if (!preset) return;

            baseplateBricks.fill(null);
            document.querySelectorAll('.baseplate-stud').forEach((s, i) => {
                if (preset.indices.includes(i)) {
                    baseplateBricks[i] = preset.color;
                    s.style.backgroundColor = preset.color;
                    s.classList.add('has-brick');
                } else {
                    s.style.backgroundColor = '';
                    s.classList.remove('has-brick');
                }
            });

            builderBrickCount.textContent = preset.indices.length;
            triggerToast(`Loaded <strong>${btn.textContent}</strong> preset build!`);
        });
    });

    addCustomSetBtn.addEventListener('click', () => {
        playBrickClickSound();
        addToCart(99);
        closeBrickLab();
        openBag();
        triggerToast('CheckPoint Custom 100-Brick Creator Color Tub added to bag!');
    });

    // Mystery Blind Box Unboxing Flow
    btnShakeBox.addEventListener('click', () => {
        mysteryFoilBox.classList.add('shaking');
        playBoxRattleSound();
        unboxerStepPill.textContent = 'STEP 2: TEAR FOIL SEAL';
        btnRipFoil.disabled = false;

        setTimeout(() => {
            mysteryFoilBox.classList.remove('shaking');
        }, 1200);
    });

    btnRipFoil.addEventListener('click', () => {
        playFoilRipSound();
        playCheckoutChime();
        runConfettiAnimation();

        mysteryFoilBox.style.display = 'none';
        revealedToyCard.style.display = 'flex';
        btnShakeBox.style.display = 'none';
        btnRipFoil.style.display = 'none';
        btnResetUnbox.style.display = 'inline-block';
        unboxerStepPill.textContent = 'UNBOXED & REVEALED!';

        triggerToast('🌟 UNLOCKED: Secret 1/144 Golden Celestial AstroBunny!');
    });

    applyChaserCodeBtn.addEventListener('click', () => {
        playBrickClickSound();
        closeBrickLab();
        openBag();
        couponInput.value = 'CHASER20';
        currentDiscountRate = 0.20;
        couponFeedback.className = 'coupon-feedback success';
        couponFeedback.textContent = 'Secret Chaser VIP code "CHASER20" applied (20% Off)';
        updateBagUI();
        triggerToast('20% Secret Chaser discount applied to bag!');
    });

    btnResetUnbox.addEventListener('click', () => {
        playBrickClickSound();
        mysteryFoilBox.style.display = 'flex';
        revealedToyCard.style.display = 'none';
        btnShakeBox.style.display = 'inline-block';
        btnRipFoil.style.display = 'inline-block';
        btnRipFoil.disabled = true;
        btnResetUnbox.style.display = 'none';
        unboxerStepPill.textContent = 'STEP 1: SHAKE BOX';
    });

    /* ==========================================================================
       9. LEGO INSIDERS REWARDS PROGRAM MODAL
       ========================================================================== */
    function openInsidersModal() {
        playBrickClickSound();
        insidersModalPoints.textContent = insidersSparks;
        insidersModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeInsidersModal() {
        insidersModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (insidersToggleBtn) insidersToggleBtn.addEventListener('click', openInsidersModal);
    if (closeInsidersBtn) closeInsidersBtn.addEventListener('click', closeInsidersModal);
    insidersModalOverlay.addEventListener('click', (e) => {
        if (e.target === insidersModalOverlay) closeInsidersModal();
    });

    document.querySelectorAll('.btn-redeem-voucher').forEach(btn => {
        btn.addEventListener('click', () => {
            const cost = Number(btn.dataset.cost);
            const val = Number(btn.dataset.val);
            if (insidersSparks < cost) {
                triggerToast(`Not enough Sparks balance (${insidersSparks}/${cost}).`);
                return;
            }

            insidersSparks -= cost;
            saveStorage('checkpoint_insiders_sparks', insidersSparks);
            headerSparksCount.textContent = insidersSparks;
            insidersModalPoints.textContent = insidersSparks;

            playCheckoutChime();
            closeInsidersModal();
            openBag();
            couponInput.value = `SPARKS${val}`;
            DISCOUNT_CODES[`SPARKS${val}`] = val / 50; // proportional discount
            currentDiscountRate = val / 50;
            couponFeedback.className = 'coupon-feedback success';
            couponFeedback.textContent = `$${val}.00 Sparks Voucher applied!`;
            updateBagUI();
            triggerToast(`Redeemed $${val}.00 off with ${cost} Sparks!`);
        });
    });

    /* ==========================================================================
       10. WISHLIST MANAGEMENT
       ========================================================================== */
    function toggleWishlist(productId) {
        playBrickClickSound();
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
        playBrickClickSound();
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
            playBrickClickSound();
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
       11. USER AUTH / LOGIN MODAL
       ========================================================================== */
    function openLogin() {
        playBrickClickSound();
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
       12. SHOPPING BAG / CART LOGIC & LEGO GWP MILESTONE LADDER
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

    cartToggleBtn.addEventListener('click', () => {
        playBrickClickSound();
        openBag();
    });
    closeCartBtn.addEventListener('click', closeBag);
    cartDrawerOverlay.addEventListener('click', closeBag);
    startShoppingBtn.addEventListener('click', () => {
        playBrickClickSound();
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
        playBrickClickSound();
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
        playBrickClickSound();
        cart = cart.filter(i => i.id !== productId);
        saveStorage('checkpoint_cart_items', cart);
        updateBagUI();
        triggerToast('Item removed from shopping bag.');
    }

    // Sparks 200 pts (-$5.00) Redemption toggle in cart
    if (redeemSparksBtn) {
        redeemSparksBtn.addEventListener('click', () => {
            playBrickClickSound();
            isSparksRedeemed = !isSparksRedeemed;
            updateBagUI();
            triggerToast(isSparksRedeemed ? 'Redeemed 200 Sparks for $5.00 off!' : 'Sparks redemption removed.');
        });
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
        const rawSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const promoDiscountVal = rawSubtotal * currentDiscountRate;
        const sparksDiscountVal = (isSparksRedeemed && rawSubtotal >= 10) ? 5.00 : 0.00;
        const totalDiscount = promoDiscountVal + sparksDiscountVal;
        const discountedSubtotal = Math.max(0, rawSubtotal - totalDiscount);
        const isFreeShipping = discountedSubtotal >= FREE_SHIPPING_LIMIT || rawSubtotal === 0;
        const shippingCost = isFreeShipping ? 0.00 : SHIPPING_FLAT_FEE;
        const grandTotal = rawSubtotal === 0 ? 0 : (discountedSubtotal + shippingCost);

        drawerSubtotal.textContent = `$${rawSubtotal.toFixed(2)}`;

        // Promo Discount
        if (currentDiscountRate > 0) {
            drawerDiscountRow.style.display = 'flex';
            drawerDiscount.textContent = `-$${promoDiscountVal.toFixed(2)}`;
        } else {
            drawerDiscountRow.style.display = 'none';
        }

        // Sparks Redemption Row
        if (isSparksRedeemed && sparksDiscountVal > 0) {
            drawerSparksDiscountRow.style.display = 'flex';
            drawerSparksDiscount.textContent = `-$${sparksDiscountVal.toFixed(2)}`;
            if (redeemSparksBtn) {
                redeemSparksBtn.textContent = 'Redeemed (-$5.00) [Remove]';
                redeemSparksBtn.classList.add('applied');
            }
        } else {
            drawerSparksDiscountRow.style.display = 'none';
            if (redeemSparksBtn) {
                redeemSparksBtn.textContent = 'Redeem 200 pts (-$5.00)';
                redeemSparksBtn.classList.remove('applied');
            }
        }

        drawerShipping.textContent = isFreeShipping ? 'FREE' : `$${shippingCost.toFixed(2)}`;
        drawerTotal.textContent = `$${grandTotal.toFixed(2)}`;

        // LEGO Insiders Sparks Earned on this order
        const earnedSparksVal = Math.round(discountedSubtotal * 10);
        if (cartEarnedSparks) cartEarnedSparks.textContent = `+${earnedSparksVal}`;
        if (cartCurrentBalance) cartCurrentBalance.textContent = insidersSparks;
        if (headerSparksCount) headerSparksCount.textContent = insidersSparks;

        // LEGO 3-Tier GWP Milestone Ladder ($40 / $80 / $120)
        const progressPercent = Math.min(100, (discountedSubtotal / 120.00) * 100);
        if (gwpProgressBar) gwpProgressBar.style.width = `${progressPercent}%`;

        const unlockedGifts = [];
        if (discountedSubtotal >= 40.00) {
            if (gwpStep1) gwpStep1.classList.add('unlocked');
            unlockedGifts.push('🎁 Free Mystery Polybag');
        } else {
            if (gwpStep1) gwpStep1.classList.remove('unlocked');
        }

        if (discountedSubtotal >= 80.00) {
            if (gwpStep2) gwpStep2.classList.add('unlocked');
            unlockedGifts.push('🚚 Free Courier Shipping');
        } else {
            if (gwpStep2) gwpStep2.classList.remove('unlocked');
        }

        if (discountedSubtotal >= 120.00) {
            if (gwpStep3) gwpStep3.classList.add('unlocked');
            unlockedGifts.push('🏆 Free Gold Brick Trophy Set');
        } else {
            if (gwpStep3) gwpStep3.classList.remove('unlocked');
        }

        // Render GWP pills and status text
        if (gwpStatusText) {
            if (discountedSubtotal >= 120.00) {
                gwpStatusText.innerHTML = `🎉 <strong>ALL VIP REWARDS UNLOCKED!</strong> (Polybag + Free Ship + Trophy)`;
            } else if (discountedSubtotal >= 80.00) {
                const diff = (120.00 - discountedSubtotal).toFixed(2);
                gwpStatusText.innerHTML = `Add <strong>$${diff}</strong> more for <strong>Free Gold Brick Trophy Set</strong>!`;
            } else if (discountedSubtotal >= 40.00) {
                const diff = (80.00 - discountedSubtotal).toFixed(2);
                gwpStatusText.innerHTML = `Add <strong>$${diff}</strong> more for <strong>FREE Express Shipping</strong>!`;
            } else {
                const diff = (40.00 - discountedSubtotal).toFixed(2);
                gwpStatusText.innerHTML = `Add <strong>$${diff}</strong> more for <strong>Free Mystery Polybag</strong>!`;
            }
        }

        if (gwpUnlockedBadges) {
            gwpUnlockedBadges.innerHTML = unlockedGifts.map(g => `<span class="gwp-gift-pill">${g}</span>`).join('');
        }

        // Inject Free Gift line items into cart list if unlocked
        if (cart.length > 0 && discountedSubtotal >= 40.00) {
            const giftRow = document.createElement('div');
            giftRow.className = 'bag-item-card gift-item';
            giftRow.innerHTML = `
                <img src="images/astro_bunny_closeup.jpg" alt="Free Polybag" class="bag-thumb">
                <div class="bag-meta">
                    <span class="gift-tag">GWP UNLOCKED</span>
                    <h4 class="bag-title">Mystery Collector Polybag Keychain</h4>
                    <div class="bag-price" style="color:var(--brand-green); font-weight:800;">FREE ($0.00)</div>
                </div>
            `;
            cartItemsContainer.appendChild(giftRow);
        }

        if (cart.length > 0 && discountedSubtotal >= 120.00) {
            const trophyRow = document.createElement('div');
            trophyRow.className = 'bag-item-card gift-item';
            trophyRow.innerHTML = `
                <img src="images/robot_closeup.jpg" alt="Free Gold Trophy" class="bag-thumb">
                <div class="bag-meta">
                    <span class="gift-tag">VIP TIER 3 REWARD</span>
                    <h4 class="bag-title">CheckPoint Gold Brick Trophy Mini-Set</h4>
                    <div class="bag-price" style="color:var(--brand-green); font-weight:800;">FREE ($0.00)</div>
                </div>
            `;
            cartItemsContainer.appendChild(trophyRow);
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
        playBrickClickSound();
        const code = couponInput.value.trim().toUpperCase();
        if (!code) return;

        if (DISCOUNT_CODES[code]) {
            currentDiscountRate = DISCOUNT_CODES[code];
            couponFeedback.className = 'coupon-feedback success';
            couponFeedback.textContent = `Promo code "${code}" applied (${(currentDiscountRate * 100).toFixed(0)}% Off)`;
            updateBagUI();
        } else {
            couponFeedback.className = 'coupon-feedback error';
            couponFeedback.textContent = `Invalid code. Try CHECKPOINT10, CHASER20 or 807GARAGE`;
        }
    });

    /* ==========================================================================
       13. CHECKOUT MODAL & WEB AUDIO CHIME
       ========================================================================== */
    function openCheckout() {
        if (cart.length === 0) return;
        playBrickClickSound();
        closeBag();

        const rawSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const promoDiscountVal = rawSubtotal * currentDiscountRate;
        const sparksDiscountVal = (isSparksRedeemed && rawSubtotal >= 10) ? 5.00 : 0.00;
        const totalDiscount = promoDiscountVal + sparksDiscountVal;
        const discountedSubtotal = Math.max(0, rawSubtotal - totalDiscount);
        const isFree = discountedSubtotal >= FREE_SHIPPING_LIMIT;
        const shippingCost = isFree ? 0.00 : SHIPPING_FLAT_FEE;
        const grandTotal = discountedSubtotal + shippingCost;
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
            playBrickClickSound();
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

        // Award Insiders Sparks for purchase!
        const rawSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const pointsEarned = Math.round(rawSubtotal * 10);
        insidersSparks += pointsEarned;
        saveStorage('checkpoint_insiders_sparks', insidersSparks);
        if (headerSparksCount) headerSparksCount.textContent = insidersSparks;

        // Reset cart
        cart = [];
        isSparksRedeemed = false;
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
        playBrickClickSound();
        successModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });

    /* ==========================================================================
       14. COUNTDOWN TICKER & CONFETTI
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
            closeBrickLab();
            if (compareModalOverlay) compareModalOverlay.classList.remove('open');
            if (insidersModalOverlay) insidersModalOverlay.classList.remove('open');
            successModalOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    /* ==========================================================================
       15. INITIALIZATION & SCROLL SHADOW
       ========================================================================== */
    renderCatalog();
    updateBagUI();
    updateWishlistUI();
    updateAuthUI();

    const siteHeader = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    }, { passive: true });

    /* ==========================================================================
       14. CARD ENTRANCE ANIMATION (IntersectionObserver)
       ========================================================================== */
    const cardEntranceStyle = document.createElement('style');
    cardEntranceStyle.textContent = `
        @keyframes cardFadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        .product-card-807.card-visible {
            animation: cardFadeUp 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
    `;
    document.head.appendChild(cardEntranceStyle);

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${i * 0.06}s`;
                entry.target.classList.add('card-visible');
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    // Re-observe cards after each render
    const originalRenderCatalog = renderCatalog;
    function observeNewCards() {
        document.querySelectorAll('.product-card-807:not(.card-visible)').forEach(card => {
            cardObserver.observe(card);
        });
    }

    // Observe initial render
    setTimeout(observeNewCards, 0);
});