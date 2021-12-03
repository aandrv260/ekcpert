const author = {
    name: 'Angel',
    copy: 'Copyright'
};
const year = new Date().getFullYear();
const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const closeBtn = document.querySelector('.btn--close-bar');
const topCoords = header?.getBoundingClientRect() || document.querySelector('.contacts-header').getBoundingClientRect();
const backToTop = document.querySelector('.btn-back-to-top');
// Footer date
const dateClasses = [
    ...document.querySelectorAll('.date')
];
for (const dClass of dateClasses)dClass.textContent = year;
// Sticky header
// Smooth scroll
const smoothScroll = (e, f)=>{
    const sectionCoords = f.getBoundingClientRect();
    e.preventDefault();
    window.scrollTo({
        left: sectionCoords.left + window.pageXOffset,
        top: sectionCoords.top + window.pageYOffset + 50,
        behavior: "smooth"
    });
};
backToTop.addEventListener('click', function(e) {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
});
// Add beforeunload event when the Form Input is not empty
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
});
const inputs = [
    ...document.querySelectorAll('input'),
    ...document.querySelectorAll('textarea')
];
const addBUnloadEvent = function(inps) {
    inps.forEach((inp)=>{
        inp.addEventListener('input', function(e1) {
            if (e1.target.value !== '') window.addEventListener('beforeunload', function(e) {
                e.preventDefault();
                e.returnValue = 'Информацията ви няма да се запази';
            });
        });
    });
};
// inputs[0].attr
addBUnloadEvent(inputs);
const heroBtns = document.querySelector('.hero__btns');
if (heroBtns) heroBtns.addEventListener('click', function(e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    if (!id || id === '#') return;
    const targetLocation = document.querySelector(id).getBoundingClientRect();
    window.scrollTo({
        top: targetLocation.top + window.pageYOffset,
        left: 0,
        behavior: 'smooth'
    });
});
const options = {
    root: null,
    threshold: 0
};
const observerCaBck = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) backToTop.classList.remove('hidden');
    else backToTop.classList.add('hidden');
};
const observer = new IntersectionObserver(observerCaBck, options);
observer.observe(header);
// Mob Navigation
const mobNav = document.querySelector('.mob-nav');
const mobNavBtns = [
    document.querySelector('.mob-nav__close'),
    document.querySelector('.mob-nav__open')
];
mobNavBtns.forEach((btn)=>{
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const btnType = this.classList[0].includes('__open') ? 'open' : 'close';
        console.log(btnType);
        mobNav.classList.toggle('open');
        mobNavBtns.forEach((bt)=>bt.classList.toggle('hidden')
        );
    });
// Save Inputs to Local Storage
});

//# sourceMappingURL=cookies.d644d586.js.map
