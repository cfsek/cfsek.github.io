const header = document.querySelector('header');

const secondaryColors = {
    'cfsek': '#74c69c',
    'cacf': '#cc2027',
    'fsacf': '#019f16',
    'gacf': '#8daa31'
}

const matchDayMinilogos = {
    'all': document.getElementById('logo-all'),
    'cfsek': document.getElementById('logo-cfsek'),
    'cacf': document.getElementById('logo-cacf'),
    'fsacf': document.getElementById('logo-fsacf'),
    'gacf': document.getElementById('logo-gacf')
}

const matchDayLinks = {
    'cfsek': document.getElementById('cfsek-link'),
    'cacf': document.getElementById('cacf-link'),
    'fsacf': document.getElementById('fsacf-link'),
    'gacf': document.getElementById('gacf-link')
}

const matchDayLogos = {
    'all': document.getElementById('full-logo-all'),
    'cfsek': document.getElementById('full-logo-cfsek'),
    'cacf': document.getElementById('full-logo-cacf'),
    'fsacf': document.getElementById('full-logo-fsacf'),
    'gacf': document.getElementById('full-logo-gacf')
}

const favicon = document.getElementById('fav');

const matchDayFavicons = {
    'cfsek': 'cfsek.png',
    'cacf': 'cacf.png',
    'fsacf': 'fsacf.png',
    'gacf': 'gacf.png'
}

for (const mdLink in matchDayLinks) {
    matchDayLinks[mdLink].addEventListener('mouseenter', e => {
        for (const minilogo in matchDayMinilogos) {
            matchDayMinilogos[minilogo].classList.add('hidden');
        }

        for (const logo in matchDayLogos) {
            matchDayLogos[logo].classList.add('hidden');
        }

        matchDayMinilogos[mdLink].classList.remove('hidden');
        matchDayLogos[mdLink].classList.remove('hidden');
        favicon.href = matchDayFavicons[mdLink];
    });
};