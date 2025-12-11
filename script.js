document.addEventListener('DOMContentLoaded', () => {
    // Menyediakan ScrollSpy bawaan Bootstrap agar menu navbar menyorot bagian aktif saat halaman di-scroll.
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && window.bootstrap) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 120
        });
    }

    // Menutup menu collapse setelah tautan diklik (berguna di layar kecil/mobile).
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const togglerVisible = navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none';
            if (togglerVisible) {
                navbarToggler.click();
            }
        });
    });
});