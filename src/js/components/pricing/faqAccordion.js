export const initializeFaqAccordion = () => {
    const accordions = document.querySelectorAll('.faq__list-item');

    accordions.forEach(accordion => {
    const accordionContent = accordion.querySelector('.faq__list-item-descr');
    
    if (accordionContent) {
        accordionContent.style.maxHeight = '0';
        accordionContent.style.overflow = 'hidden';

        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');

            if (accordion.classList.contains('active')) {
                accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
                accordionContent.style.overflow = 'visivle';


            } else {
                accordionContent.style.maxHeight = '0'
            }
        })
    }
})

}



