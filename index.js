document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});


