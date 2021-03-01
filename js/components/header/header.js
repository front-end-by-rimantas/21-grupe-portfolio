export default () => {
    const header = document.querySelector('header');
    const headerScrollBreakPointInPixels = 40;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerScrollBreakPointInPixels) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });
};
