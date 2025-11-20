(function() {
    'use strict';
    
    function initMobileMenu() {
        var menuToggle = document.getElementById('menuToggle');
        var nav = document.getElementById('mainNav');
        var backdrop = document.getElementById('mobileBackdrop');
        
        if (!menuToggle || !nav || !backdrop) {
            console.error('Mobile menu elements not found');
            return;
        }
        
        function closeMenu() {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        function openMenu() {
            nav.classList.add('active');
            menuToggle.classList.add('active');
            backdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function toggleMenu(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            if (nav.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        // Toggle on button click
        menuToggle.addEventListener('click', toggleMenu, false);
        menuToggle.addEventListener('touchend', function(e) {
            e.preventDefault();
            toggleMenu();
        }, false);
        
        // Close on backdrop click
        backdrop.addEventListener('click', closeMenu, false);
        backdrop.addEventListener('touchend', function(e) {
            e.preventDefault();
            closeMenu();
        }, false);
        
        // Close when clicking menu links
        var links = nav.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', closeMenu, false);
        }
        
        console.log('Mobile menu initialized');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();
