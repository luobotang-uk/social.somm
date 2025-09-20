// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Beta waitlist form handling
const betaForm = document.querySelector('.beta-form');
if (betaForm) {
    betaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const city = this.querySelector('input[type="text"]').value;
        
        // Simple validation
        if (!email || !city) {
            alert('Please fill in both email and city fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Joining...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Welcome to the Social Somm beta! We\'ll notify you when we launch in ' + city + '.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const inquiry = formData.get('inquiry');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !inquiry || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your ' + inquiry + ' inquiry! We\'ll get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .stat, .about-text, .contact-item, .benefit');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #8B4513;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects for feature cards
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add click animation to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Authentication System
class AuthManager {
    constructor() {
        this.currentUser = this.getCurrentUser();
        this.init();
    }

    init() {
        this.setupAuthForms();
        this.setupPasswordToggle();
        this.setupPasswordStrength();
        this.updateUI();
    }

    setupAuthForms() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Signup form
        const signupForm = document.getElementById('signupForm');
        if (signupForm) {
            signupForm.addEventListener('submit', (e) => this.handleSignup(e));
        }
    }

    setupPasswordToggle() {
        const passwordToggles = document.querySelectorAll('.password-toggle');
        passwordToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const input = e.target.closest('.form-group').querySelector('input[type="password"]');
                const icon = e.target;
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        });
    }

    setupPasswordStrength() {
        const passwordInput = document.getElementById('password');
        const strengthBar = document.querySelector('.strength-bar');
        const strengthText = document.querySelector('.strength-text');

        if (passwordInput && strengthBar && strengthText) {
            passwordInput.addEventListener('input', (e) => {
                const password = e.target.value;
                const strength = this.calculatePasswordStrength(password);
                
                strengthBar.className = 'strength-bar ' + strength.level;
                strengthText.textContent = strength.text;
            });
        }
    }

    calculatePasswordStrength(password) {
        let score = 0;
        if (password.length >= 8) score++;
        if (password.match(/[a-z]/)) score++;
        if (password.match(/[A-Z]/)) score++;
        if (password.match(/[0-9]/)) score++;
        if (password.match(/[^a-zA-Z0-9]/)) score++;

        if (score < 2) return { level: 'weak', text: 'Weak' };
        if (score < 3) return { level: 'fair', text: 'Fair' };
        if (score < 4) return { level: 'good', text: 'Good' };
        return { level: 'strong', text: 'Strong' };
    }

    async handleLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rememberMe = formData.get('rememberMe');

        // Simulate API call
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
        submitBtn.disabled = true;

        try {
            // Simulate authentication delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Mock user data
            const user = {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: email,
                wineExperience: 'intermediate',
                favoriteRegions: 'Bordeaux, Burgundy',
                joinDate: new Date().toISOString()
            };

            this.setCurrentUser(user, rememberMe);
            this.showNotification('Welcome back!', 'success');
            
            // Redirect to profile or events page
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 1000);

        } catch (error) {
            this.showNotification('Invalid email or password', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async handleSignup(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        // Validate password match
        if (password !== confirmPassword) {
            this.showNotification('Passwords do not match', 'error');
            return;
        }

        // Simulate API call
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
        submitBtn.disabled = true;

        try {
            // Simulate registration delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Mock user data
            const user = {
                id: Date.now(),
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                wineExperience: formData.get('wineExperience'),
                favoriteRegions: formData.get('favoriteRegions'),
                joinDate: new Date().toISOString()
            };

            this.setCurrentUser(user, true);
            this.showNotification('Account created successfully!', 'success');
            
            // Redirect to profile page
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 1000);

        } catch (error) {
            this.showNotification('Error creating account. Please try again.', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    setCurrentUser(user, remember = false) {
        this.currentUser = user;
        if (remember) {
            localStorage.setItem('socialSommUser', JSON.stringify(user));
        } else {
            sessionStorage.setItem('socialSommUser', JSON.stringify(user));
        }
    }

    getCurrentUser() {
        const user = localStorage.getItem('socialSommUser') || sessionStorage.getItem('socialSommUser');
        return user ? JSON.parse(user) : null;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('socialSommUser');
        sessionStorage.removeItem('socialSommUser');
        this.updateUI();
        window.location.href = 'index.html';
    }

    updateUI() {
        // Update navigation based on auth status
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            const authLinks = navMenu.querySelectorAll('.auth-link');
            authLinks.forEach(link => link.remove());

            if (this.currentUser) {
                // Add user menu
                const userMenu = document.createElement('li');
                userMenu.className = 'nav-item user-menu';
                userMenu.innerHTML = `
                    <div class="user-dropdown">
                        <button class="user-button">
                            <img src="https://via.placeholder.com/32x32/6B7280/ffffff?text=${this.currentUser.firstName.charAt(0)}" alt="Profile" class="user-avatar">
                            <span>${this.currentUser.firstName}</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu">
                            <a href="profile.html"><i class="fas fa-user"></i> Profile</a>
                            <a href="#" onclick="authManager.logout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
                        </div>
                    </div>
                `;
                navMenu.appendChild(userMenu);
            } else {
                // Add auth links
                const loginLink = document.createElement('li');
                loginLink.className = 'nav-item auth-link';
                loginLink.innerHTML = '<a href="login.html" class="nav-link">Login</a>';
                
                const signupLink = document.createElement('li');
                signupLink.className = 'nav-item auth-link';
                signupLink.innerHTML = '<a href="signup.html" class="nav-link">Sign Up</a>';
                
                navMenu.appendChild(loginLink);
                navMenu.appendChild(signupLink);
            }
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize authentication
const authManager = new AuthManager();

// Profile Page Functionality
class ProfileManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupTabs();
        this.setupPreferences();
        this.setupTastingNotes();
        this.setupReviews();
        this.loadUserData();
    }

    setupTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });
    }

    setupPreferences() {
        // Preference tag toggles
        const preferenceTags = document.querySelectorAll('.preference-tag');
        preferenceTags.forEach(tag => {
            tag.addEventListener('click', () => {
                tag.classList.toggle('active');
                this.savePreferences();
            });
        });

        // Price range slider
        const priceSlider = document.getElementById('priceRange');
        const currentPrice = document.getElementById('currentPrice');
        
        if (priceSlider && currentPrice) {
            priceSlider.addEventListener('input', (e) => {
                currentPrice.textContent = `€${e.target.value}`;
                this.savePreferences();
            });
        }
    }

    setupTastingNotes() {
        const addNoteBtn = document.getElementById('addTastingNoteBtn');
        if (addNoteBtn) {
            addNoteBtn.addEventListener('click', () => {
                this.showAddTastingNoteModal();
            });
        }
    }

    setupReviews() {
        // Review functionality can be added here
        console.log('Reviews functionality initialized');
    }

    loadUserData() {
        const user = authManager.getCurrentUser();
        if (user) {
            this.updateProfileHeader(user);
            this.loadUserPreferences(user);
        }
    }

    updateProfileHeader(user) {
        const userName = document.getElementById('userName');
        const userLocation = document.getElementById('userLocation');
        const eventsJoined = document.getElementById('eventsJoined');
        const eventsHosted = document.getElementById('eventsHosted');
        const winesTasted = document.getElementById('winesTasted');
        const averageRating = document.getElementById('averageRating');

        if (userName) userName.textContent = `${user.firstName} ${user.lastName}`;
        if (userLocation) userLocation.textContent = user.location || 'Amsterdam, Netherlands';
        if (eventsJoined) eventsJoined.textContent = user.eventsJoined || '12';
        if (eventsHosted) eventsHosted.textContent = user.eventsHosted || '8';
        if (winesTasted) winesTasted.textContent = user.winesTasted || '45';
        if (averageRating) averageRating.textContent = user.averageRating || '4.8';
    }

    loadUserPreferences(user) {
        // Load user preferences from stored data
        const preferences = user.preferences || {
            wineTypes: ['Red Wine'],
            regions: ['Bordeaux', 'Burgundy'],
            priceRange: 100,
            experienceLevel: 'intermediate'
        };

        // Update preference tags
        const wineTypeTags = document.querySelectorAll('.preference-tags')[0]?.querySelectorAll('.preference-tag');
        if (wineTypeTags) {
            wineTypeTags.forEach(tag => {
                if (preferences.wineTypes.includes(tag.textContent)) {
                    tag.classList.add('active');
                }
            });
        }

        const regionTags = document.querySelectorAll('.preference-tags')[1]?.querySelectorAll('.preference-tag');
        if (regionTags) {
            regionTags.forEach(tag => {
                if (preferences.regions.includes(tag.textContent)) {
                    tag.classList.add('active');
                }
            });
        }

        // Update price range
        const priceSlider = document.getElementById('priceRange');
        const currentPrice = document.getElementById('currentPrice');
        if (priceSlider && currentPrice) {
            priceSlider.value = preferences.priceRange;
            currentPrice.textContent = `€${preferences.priceRange}`;
        }

        // Update experience level
        const levelBadge = document.querySelector('.level-badge');
        if (levelBadge) {
            levelBadge.className = `level-badge ${preferences.experienceLevel}`;
            levelBadge.textContent = preferences.experienceLevel.charAt(0).toUpperCase() + preferences.experienceLevel.slice(1);
        }
    }

    savePreferences() {
        const user = authManager.getCurrentUser();
        if (!user) return;

        const activeWineTypes = Array.from(document.querySelectorAll('.preference-tags')[0]?.querySelectorAll('.preference-tag.active') || [])
            .map(tag => tag.textContent);
        
        const activeRegions = Array.from(document.querySelectorAll('.preference-tags')[1]?.querySelectorAll('.preference-tag.active') || [])
            .map(tag => tag.textContent);

        const priceRange = document.getElementById('priceRange')?.value || 100;

        user.preferences = {
            wineTypes: activeWineTypes,
            regions: activeRegions,
            priceRange: parseInt(priceRange),
            experienceLevel: user.preferences?.experienceLevel || 'intermediate'
        };

        authManager.setCurrentUser(user, true);
    }

    showAddTastingNoteModal() {
        // Create modal for adding tasting notes
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Add Tasting Note</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <form class="tasting-note-form">
                    <div class="form-group">
                        <label for="wineName">Wine Name</label>
                        <input type="text" id="wineName" name="wineName" required>
                    </div>
                    <div class="form-group">
                        <label for="wineVintage">Vintage</label>
                        <input type="number" id="wineVintage" name="wineVintage" min="1900" max="2024">
                    </div>
                    <div class="form-group">
                        <label for="rating">Rating (1-5)</label>
                        <div class="star-rating">
                            <span class="star" data-rating="1">★</span>
                            <span class="star" data-rating="2">★</span>
                            <span class="star" data-rating="3">★</span>
                            <span class="star" data-rating="4">★</span>
                            <span class="star" data-rating="5">★</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="appearance">Appearance</label>
                        <textarea id="appearance" name="appearance" rows="2"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="nose">Nose</label>
                        <textarea id="nose" name="nose" rows="2"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="palate">Palate</label>
                        <textarea id="palate" name="palate" rows="2"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="finish">Finish</label>
                        <textarea id="finish" name="finish" rows="2"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="overall">Overall Notes</label>
                        <textarea id="overall" name="overall" rows="3"></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary modal-cancel">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save Note</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        // Add event listeners
        modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
        modal.querySelector('.modal-cancel').addEventListener('click', () => modal.remove());
        modal.querySelector('.tasting-note-form').addEventListener('submit', (e) => this.handleAddTastingNote(e, modal));

        // Star rating functionality
        const stars = modal.querySelectorAll('.star');
        let selectedRating = 0;
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                selectedRating = index + 1;
                stars.forEach((s, i) => {
                    s.classList.toggle('active', i < selectedRating);
                });
            });
            star.addEventListener('mouseenter', () => {
                stars.forEach((s, i) => {
                    s.classList.toggle('hover', i <= index);
                });
            });
        });
        modal.querySelector('.star-rating').addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    }

    handleAddTastingNote(e, modal) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const note = {
            id: Date.now(),
            wineName: formData.get('wineName'),
            vintage: formData.get('wineVintage'),
            rating: selectedRating,
            appearance: formData.get('appearance'),
            nose: formData.get('nose'),
            palate: formData.get('palate'),
            finish: formData.get('finish'),
            overall: formData.get('overall'),
            date: new Date().toISOString()
        };

        // Save to user data
        const user = authManager.getCurrentUser();
        if (user) {
            user.tastingNotes = user.tastingNotes || [];
            user.tastingNotes.push(note);
            authManager.setCurrentUser(user, true);
        }

        // Add to UI
        this.addTastingNoteToUI(note);
        modal.remove();
    }

    addTastingNoteToUI(note) {
        const notesList = document.querySelector('.tasting-notes-list');
        if (!notesList) return;

        const noteElement = document.createElement('div');
        noteElement.className = 'tasting-note';
        noteElement.innerHTML = `
            <div class="note-header">
                <h3>${note.wineName} ${note.vintage ? note.vintage : ''}</h3>
                <span class="note-date">${new Date(note.date).toLocaleDateString()}</span>
            </div>
            <div class="note-rating">
                <div class="stars">${'★'.repeat(note.rating)}${'☆'.repeat(5 - note.rating)}</div>
                <span>${note.rating}/5</span>
            </div>
            <div class="note-content">
                ${note.appearance ? `<p><strong>Appearance:</strong> ${note.appearance}</p>` : ''}
                ${note.nose ? `<p><strong>Nose:</strong> ${note.nose}</p>` : ''}
                ${note.palate ? `<p><strong>Palate:</strong> ${note.palate}</p>` : ''}
                ${note.finish ? `<p><strong>Finish:</strong> ${note.finish}</p>` : ''}
                ${note.overall ? `<p><strong>Overall:</strong> ${note.overall}</p>` : ''}
            </div>
            <div class="note-actions">
                <button class="btn btn-secondary btn-small">Edit</button>
                <button class="btn btn-secondary btn-small">Share</button>
            </div>
        `;

        notesList.insertBefore(noteElement, notesList.firstChild);
    }
}

// Initialize profile manager if on profile page
if (window.location.pathname.includes('profile.html')) {
    const profileManager = new ProfileManager();
}

// Calendar and Payment Integration
class EventManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupCalendar();
        this.setupPaymentProcessing();
        this.setupEventForm();
    }

    setupCalendar() {
        const datetimeInput = document.getElementById('event-datetime');
        if (datetimeInput) {
            flatpickr(datetimeInput, {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                time_24hr: true,
                minDate: "today",
                maxDate: new Date().fp_incr(365), // 1 year from now
                onChange: (selectedDates, dateStr, instance) => {
                    this.updateCalendarPreview(selectedDates[0]);
                    this.updateFeeCalculation();
                }
            });
        }
    }

    setupPaymentProcessing() {
        // Initialize Stripe (you would replace with your actual publishable key)
        if (typeof Stripe !== 'undefined') {
            this.stripe = Stripe('pk_test_your_stripe_publishable_key_here');
            this.elements = this.stripe.elements();
        }

        // Setup payment method selection
        const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
        paymentMethods.forEach(method => {
            method.addEventListener('change', (e) => {
                this.handlePaymentMethodChange(e.target.value);
            });
        });

        // Setup fee calculation
        this.setupFeeCalculation();
    }

    setupEventForm() {
        const eventForm = document.querySelector('.create-event-form');
        if (eventForm) {
            eventForm.addEventListener('submit', (e) => this.handleEventSubmission(e));
        }

        // Real-time fee calculation
        const bottlePriceInput = document.getElementById('bottle-price');
        const participantsInput = document.getElementById('max-participants');
        
        if (bottlePriceInput) {
            bottlePriceInput.addEventListener('input', () => this.updateFeeCalculation());
        }
        
        if (participantsInput) {
            participantsInput.addEventListener('input', () => this.updateFeeCalculation());
        }
    }

    updateCalendarPreview(selectedDate) {
        const calendarWidget = document.getElementById('calendarWidget');
        if (!calendarWidget || !selectedDate) return;

        const eventDate = new Date(selectedDate);
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };

        calendarWidget.innerHTML = `
            <div class="calendar-event-preview">
                <div class="event-date-display">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${eventDate.toLocaleDateString('en-US', options)}</span>
                </div>
                <div class="event-time-info">
                    <i class="fas fa-clock"></i>
                    <span>Duration: ${document.getElementById('event-duration')?.value || 3} hours</span>
                </div>
            </div>
        `;
    }

    setupFeeCalculation() {
        this.updateFeeCalculation();
    }

    updateFeeCalculation() {
        const bottlePrice = parseFloat(document.getElementById('bottle-price')?.value) || 0;
        const participants = parseInt(document.getElementById('max-participants')?.value) || 1;
        
        const totalRevenue = bottlePrice;
        const platformFee = totalRevenue * 0.05; // 5% platform fee
        const processingFee = totalRevenue * 0.029; // 2.9% processing fee
        const totalFees = platformFee + processingFee;
        const hostReceives = totalRevenue - totalFees;
        const pricePerPerson = bottlePrice / participants;

        // Update fee display
        document.getElementById('platformFee').textContent = `€${platformFee.toFixed(2)}`;
        document.getElementById('processingFee').textContent = `€${processingFee.toFixed(2)}`;
        document.getElementById('totalFee').textContent = `€${totalFees.toFixed(2)}`;

        // Update price preview
        const pricePreview = document.querySelector('.price-preview');
        if (pricePreview) {
            pricePreview.innerHTML = `
                <div class="price-breakdown">
                    <div class="price-item">
                        <span>Bottle Price</span>
                        <span>€${bottlePrice.toFixed(2)}</span>
                    </div>
                    <div class="price-item">
                        <span>Price per Person</span>
                        <span>€${pricePerPerson.toFixed(2)}</span>
                    </div>
                    <div class="price-item total">
                        <span>You Receive</span>
                        <span>€${hostReceives.toFixed(2)}</span>
                    </div>
                </div>
            `;
        }
    }

    handlePaymentMethodChange(method) {
        const paymentForm = document.querySelector('.stripe-payment-form');
        
        if (method === 'stripe' && paymentForm) {
            paymentForm.style.display = 'block';
            this.initializeStripeElements();
        } else if (method === 'paypal' && paymentForm) {
            paymentForm.style.display = 'none';
            // Initialize PayPal here if needed
        }
    }

    initializeStripeElements() {
        if (!this.stripe || !this.elements) return;

        const cardElement = this.elements.create('card', {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                },
            },
        });

        const cardElementContainer = document.getElementById('card-element');
        if (cardElementContainer) {
            cardElement.mount('#card-element');
            this.cardElement = cardElement;
        }
    }

    async handleEventSubmission(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const eventData = {
            wineName: formData.get('wine-name'),
            wineType: formData.get('wine-type'),
            wineRegion: formData.get('wine-region'),
            wineVintage: formData.get('wine-vintage'),
            wineDescription: formData.get('wine-description'),
            eventDatetime: formData.get('event-datetime'),
            eventDuration: formData.get('event-duration'),
            eventType: formData.get('event-type'),
            eventLocation: formData.get('event-location'),
            bottlePrice: parseFloat(formData.get('bottle-price')),
            maxParticipants: parseInt(formData.get('max-participants')),
            eventNotes: formData.get('event-notes'),
            dressCode: formData.get('dress-code'),
            paymentMethod: formData.get('payment-method')
        };

        // Validate form
        if (!this.validateEventData(eventData)) {
            return;
        }

        // Process payment
        const paymentSuccess = await this.processPayment(eventData);
        if (!paymentSuccess) {
            return;
        }

        // Create event
        this.createEvent(eventData);
    }

    validateEventData(data) {
        const requiredFields = ['wineName', 'wineType', 'wineRegion', 'eventDatetime', 'eventType', 'eventLocation', 'bottlePrice', 'maxParticipants'];
        
        for (const field of requiredFields) {
            if (!data[field]) {
                this.showNotification(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field`, 'error');
                return false;
            }
        }

        if (data.bottlePrice < 50) {
            this.showNotification('Bottle price must be at least €50', 'error');
            return false;
        }

        if (data.maxParticipants < 2 || data.maxParticipants > 10) {
            this.showNotification('Number of participants must be between 2 and 10', 'error');
            return false;
        }

        return true;
    }

    async processPayment(eventData) {
        const paymentMethod = eventData.paymentMethod;
        
        if (paymentMethod === 'stripe') {
            return await this.processStripePayment(eventData);
        } else if (paymentMethod === 'paypal') {
            return await this.processPayPalPayment(eventData);
        }
        
        return true; // For demo purposes
    }

    async processStripePayment(eventData) {
        if (!this.stripe || !this.cardElement) {
            this.showNotification('Payment system not initialized', 'error');
            return false;
        }

        try {
            const { error, paymentMethod } = await this.stripe.createPaymentMethod({
                type: 'card',
                card: this.cardElement,
            });

            if (error) {
                this.showNotification(error.message, 'error');
                return false;
            }

            // In a real application, you would send the payment method to your server
            // For demo purposes, we'll simulate success
            this.showNotification('Payment processed successfully!', 'success');
            return true;
        } catch (error) {
            this.showNotification('Payment failed. Please try again.', 'error');
            return false;
        }
    }

    async processPayPalPayment(eventData) {
        // PayPal integration would go here
        this.showNotification('PayPal payment processed successfully!', 'success');
        return true;
    }

    createEvent(eventData) {
        // Generate event ID
        const eventId = 'event_' + Date.now();
        
        // Create event object
        const event = {
            id: eventId,
            ...eventData,
            status: 'active',
            participants: [],
            createdAt: new Date().toISOString(),
            host: authManager.getCurrentUser()
        };

        // Save to localStorage (in a real app, this would go to a server)
        const events = JSON.parse(localStorage.getItem('socialSommEvents') || '[]');
        events.push(event);
        localStorage.setItem('socialSommEvents', JSON.stringify(events));

        // Show success message
        this.showEventConfirmation(event);
    }

    showEventConfirmation(event) {
        const formContainer = document.querySelector('.form-container');
        if (!formContainer) return;

        formContainer.innerHTML = `
            <div class="event-confirmation">
                <div class="success-icon">✓</div>
                <h2>Event Created Successfully!</h2>
                <p>Your wine event has been created and is now live for participants to join.</p>
                
                <div class="event-details-summary">
                    <h3>Event Details</h3>
                    <div class="detail-row">
                        <span class="detail-label">Wine</span>
                        <span class="detail-value">${event.wineName} ${event.wineVintage ? event.wineVintage : ''}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Date & Time</span>
                        <span class="detail-value">${new Date(event.eventDatetime).toLocaleString()}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Location</span>
                        <span class="detail-value">${event.eventLocation}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Price per Person</span>
                        <span class="detail-value">€${(event.bottlePrice / event.maxParticipants).toFixed(2)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Max Participants</span>
                        <span class="detail-value">${event.maxParticipants}</span>
                    </div>
                </div>

                <div class="confirmation-actions">
                    <button class="btn btn-primary" onclick="window.location.href='events.html'">View All Events</button>
                    <button class="btn btn-secondary" onclick="window.location.href='profile.html'">Go to Profile</button>
                </div>
            </div>
        `;
    }

    showNotification(message, type = 'info') {
        // Reuse the notification system from authManager
        if (typeof authManager !== 'undefined') {
            authManager.showNotification(message, type);
        } else {
            alert(message);
        }
    }
}

// Initialize event manager if on create-event page
if (window.location.pathname.includes('create-event.html')) {
    const eventManager = new EventManager();
}

// Add notification styles
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        padding: 1rem 1.5rem;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        border-left: 4px solid #6B7280;
    }

    .notification.show {
        transform: translateX(0);
    }

    .notification-success {
        border-left-color: #10b981;
    }

    .notification-error {
        border-left-color: #ef4444;
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .notification-content i {
        font-size: 1.2rem;
    }

    .notification-success .notification-content i {
        color: #10b981;
    }

    .notification-error .notification-content i {
        color: #ef4444;
    }

    .user-menu {
        position: relative;
    }

    .user-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: none;
        border: none;
        color: #1a1a1a;
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        transition: background 0.3s ease;
    }

    .user-button:hover {
        background: #f3f4f6;
    }

    .user-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        right: 0;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        padding: 0.5rem 0;
        min-width: 200px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        z-index: 1000;
    }

    .user-menu:hover .dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .dropdown-menu a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        color: #374151;
        text-decoration: none;
        transition: background 0.3s ease;
    }

    .dropdown-menu a:hover {
        background: #f3f4f6;
    }
`;
document.head.appendChild(notificationStyle);
