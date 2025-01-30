export const footerComponent = () => {
    const reportWindowSize = () => {
        const widthWindow = window.innerWidth;

        const titleTopAll = document.querySelectorAll('.footer__top');

        if (widthWindow <= 600) {
            titleTopAll.forEach(item => {
                item.addEventListener('click', () => {
                    const cardKey = item.dataset.showCard;
                    const card = document.querySelector(`.footer__card[data-show-card="${cardKey}"]`);

                    card.classList.toggle('--is-select');
                });
            });
        }
    }
    reportWindowSize();

    window.addEventListener("resize", () => {
        reportWindowSize();
    });
}