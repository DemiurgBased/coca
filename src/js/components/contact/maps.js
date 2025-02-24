export const mapSwitcher = () => {
    const switcher = document.querySelector('[data-price="switcher"]');
    const yanMap = document.querySelector('.hero__maps-yandex');
    const imgMap = document.querySelector('.hero__maps-img')
    const maps = document.querySelector('.hero__maps')

    yanMap.style.display = 'none'
    switcher.addEventListener('click', () => {
        maps.classList.toggle('active');

        if (maps.classList.contains('active')) {
            yanMap.style.display = 'block'
            imgMap.style.display = 'none'
        } else {
            yanMap.style.display = 'none'
            imgMap.style.display = 'block'
        }
    })
}