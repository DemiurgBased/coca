export const initializeAccordion = () => {
    const accordions = document.querySelectorAll('.footer__inner-item');

    accordions.forEach(accordion => {
    const accordionContent = accordion.querySelector('.footer__inner-sublist');
    
    if (accordionContent) {
        accordionContent.style.maxHeight = '0';
        accordionContent.style.overflow = 'hidden';

        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');

            if (accordion.classList.contains('active')) {
                accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`
            } else {
                accordionContent.style.maxHeight = '0'
            }
        })
    }
})

}

