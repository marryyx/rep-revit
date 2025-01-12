export const faq = () => {

    const faqSeeMore = document.querySelector('.faq-see-more');
    const faqSeeMoreButton = document.querySelector('.faq__button');

    const clickBtnSeeMore = () => {
        faqSeeMoreButton.addEventListener("click", () => {
            faqSeeMore.classList.toggle('gm-hide');
            faqSeeMoreButton.classList.toggle('--bottom');
        });
    }

    clickBtnSeeMore();
}