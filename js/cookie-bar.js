// Cookie bar
let data = localStorage.getItem('cookie-closed');
console.log('data of loc: ', data);

// Checks if the data exists
if (!data) {
    // If it does not exist, insert adjacentSibling on the back to top btn
    const html = `<div class="cookie-bar">
    <div class="cookie-bar__flex">
        <p class="cookie-bar__text">
            Ние използваме бисквитки за да подсигурим най-добро преживяване за вас на нашия сайт.
        </p>
        <div class="cookie-bar__btns">
            <a href="cookies.html" class="btn btn--outline btn--cookie">Научете повече</a>
            <a href="#" class="btn btn--full btn--close-bar btn--cookie">Затваряне</a>
        </div>
    </div>
</div>`;

    document.body.insertAdjacentHTML('afterbegin', html);

    const cookieBarBtns = document.querySelector('.cookie-bar__btns');
    const cookieBar = document.querySelector('.cookie-bar');

    cookieBarBtns.addEventListener('click', function (e) {
        const hrf = e.target.getAttribute('href');

        if (!hrf) return;

        if (hrf === '#') {
            e.preventDefault();

            if (!cookieBar.classList.contains('hidden')) {
                const isClosed = false;
                cookieBar.classList.add('hidden');
                backToTop.style.bottom = '6.4rem';
                localStorage.setItem('cookie-closed', isClosed.toString());
            }
        }
    });
} else backToTop.style.bottom = '6.4rem';