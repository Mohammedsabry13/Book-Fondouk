/**
 * Book Fondouk - Main JavaScript
 * ================================================
 * Template originally created by Mohammed Sabry
 * Credit required: github.com/Mohammedsabry13
 * License: MIT
 *
 * (c) [2026] [Mohammed Sabry]
 * ================================================
 */


document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // SERVICES DATA
    // ========================================
    var services = [
        {
            title: "Honeymoon Packages Online Consultation",
            duration: "30 mins",
            price: "50 AED",
            image: "assets/image/rs=w_1920,m.jpeg",
            category: "Honeymoon Packages"
        },
        {
            title: "Hotel Booking Online Consultation",
            duration: "30 mins",
            price: "50 AED",
            image: "assets/image/rs=w_1920,m_4.jpeg",
            category: "Hotel Booking"
        },
        {
            title: "Flight Tickets Online Consultation",
            duration: "30 mins",
            price: "50 AED",
            image: "assets/image/rs=w_1920,m_2.jpeg",
            category: "Flight Tickets"
        },
        {
            title: "MICE Online Consultation",
            duration: "30 mins",
            price: "50 AED",
            image: "assets/image/rs=w_365_1.jpeg",
            category: "MICE"
        },
        {
            title: "VIP Meet And Greet Online Consultation",
            duration: "15 mins",
            price: "25 AED",
            image: "assets/image/rs=w_365_2.jpeg",
            category: "Transportation"
        },
        {
            title: "Transportation Online Consultation",
            duration: "15 mins",
            price: "25 AED",
            image: "assets/image/rs=w_710.jpeg",
            category: "Transportation"
        }
    ];

    // ========================================
    // HEADER & NAVIGATION
    // ========================================
    var mainNav = document.getElementById('mainNav');
    var menuToggle = document.getElementById('menuToggle');
    var menuClose = document.getElementById('menuClose');
    var mobileMenu = document.getElementById('mobileMenu');

    // Sticky header on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.add('open');
        });
    }

    if (menuClose) {
        menuClose.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
        });
    }

    // Close mobile menu when clicking a link
    var mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
        });
    });

    // ========================================
    // ONLINE APPOINTMENTS FILTER
    // ========================================
    var servicesGrid = document.getElementById('servicesGrid');
    var categoryTabs = document.querySelectorAll('.category-tab');

    function renderServices(category) {
        var filtered = category === 'All Services'
            ? services
            : services.filter(function (s) { return s.category === category; });

        servicesGrid.innerHTML = '';

        filtered.forEach(function (service) {
            var col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-lg-4';

            col.innerHTML =
                '<div class="service-card">' +
                    '<img src="' + service.image + '" alt="' + service.title + '" class="service-card-img">' +
                    '<div class="service-card-body">' +
                        '<h3 class="service-card-title">' + service.title + '</h3>' +
                        '<p class="service-card-info">' + service.duration + ' | ' + service.price + '</p>' +
                        '<button class="service-card-btn">Book</button>' +
                    '</div>' +
                '</div>';

            servicesGrid.appendChild(col);
        });
    }

    // Initial render
    renderServices('All Services');

    // Tab click handlers
    categoryTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            categoryTabs.forEach(function (t) { t.classList.remove('active'); });
            tab.classList.add('active');
            renderServices(tab.getAttribute('data-category'));
        });
    });

    // ========================================
    // COOKIE BANNER
    // ========================================
    var cookieBanner = document.getElementById('cookieBanner');
    var cookieAccept = document.getElementById('cookieAccept');

    if (!localStorage.getItem('cookie_consent')) {
        setTimeout(function () {
            cookieBanner.classList.add('visible');
        }, 1000);
    }

    if (cookieAccept) {
        cookieAccept.addEventListener('click', function () {
            localStorage.setItem('cookie_consent', 'true');
            cookieBanner.classList.remove('visible');
        });
    }

    // ========================================
    // MAILING LIST FORM (Visual Only)
    // ========================================
    var mailingForm = document.getElementById('mailingForm');
    if (mailingForm) {
        mailingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = mailingForm.querySelector('.mailing-input');
            if (input && input.value) {
                alert('Thank you for subscribing!');
                input.value = '';
            }
        });
    }

});
