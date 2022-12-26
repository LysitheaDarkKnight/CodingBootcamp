const tanya = document.querySelector('.tanya');
const john = document.querySelector('.john');
const tanyaImage = document.querySelector('.tanya-image');
const johnImage = document.querySelector('.john-image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideIn = document.querySelector('.slideIn')
const slideOut = document.querySelector('.slideOut')

prev.addEventListener('click', e =>{

    tanya.style.display = 'block'

    john.style.display = 'none'

    tanyaImage.style.transform = 'translateX(0)';

    tanyaImage.style.opacity = '1';

    johnImage.style.transform = 'translateX(0)';

    johnImage.style.opacity = '0';

    prev.style.filter = 'brightness(0) saturate(100%) invert(94%) sepia(46%) saturate(5426%) hue-rotate(180deg) brightness(107%) contrast(104%)'

    next.style.filter = 'brightness(0) saturate(100%) invert(57%) sepia(11%) saturate(874%) hue-rotate(201deg) brightness(91%) contrast(91%)'

    prev.style.cursor = 'default'

    next.style.cursor = 'pointer'

    e.preventDefault()
    })

next.addEventListener('click', e =>{

    john.style.display = 'block'

    tanya.style.display = 'none'

    tanyaImage.style.transform = 'translateX(100%)';

    tanyaImage.style.opacity = '0';

    johnImage.style.transform = 'translateX(100%)';

    johnImage.style.opacity = '1';

    next.style.filter = 'brightness(0) saturate(100%) invert(94%) sepia(46%) saturate(5426%) hue-rotate(180deg) brightness(107%) contrast(104%)'

    prev.style.filter = 'brightness(0) saturate(100%) invert(57%) sepia(11%) saturate(874%) hue-rotate(201deg) brightness(91%) contrast(91%)'

    next.style.cursor = 'default'

    prev.style.cursor = 'pointer'
    
    e.preventDefault()
    })