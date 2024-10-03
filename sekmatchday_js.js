const header = document.querySelector('header');

const secondaryColors = {
    'cfsek' : '#74c69c',
    'cacf' : '#cc2027',
    'fsacf' : '#019f16',
    'gacf' : '#8daa31'
}

const matchDayMinilogos = {
    'cfsek' : document.getElementById('logo-cfsek'),
    'cacf' : document.getElementById('logo-cacf'),
    'fsacf' : document.getElementById('logo-fsacf'),
    'gacf' : document.getElementById('logo-gacf')
}

const matchDayLinks = {
    'cfsek' : document.getElementById('cfsek-link'),
    'cacf' : document.getElementById('cacf-link'),
    'fsacf' : document.getElementById('fsacf-link'),
    'gacf' : document.getElementById('gacf-link')
}

const favicon = document.getElementById('fav');

const matchDayFavicons = {
    'cfsek' : 'cfsek.png',
    'cacf' : 'cacf.png',
    'fsacf' : 'fsacf.png',
    'gacf' : 'gacf.png',
}

for (const mdLink in matchDayLinks) {
    matchDayLinks[mdLink].addEventListener('mouseenter', e => {
        for (const minilogo in matchDayMinilogos) {
            matchDayMinilogos[minilogo].classList.add('hidden');
        }

        matchDayMinilogos[mdLink].classList.remove('hidden');

        header.style.backgroundColor = secondaryColors[mdLink];
        favicon.href = matchDayFavicons[mdLink];
    });
};
