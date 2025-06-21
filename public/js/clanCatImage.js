// public/js/clanCatImage.js

// Mapa de clanes a URLs de imágenes de gatos
const clanCatImages = {
    'Bytewhiskers': '/img/clans/cats/bytewhiskers.png',
    'Packetpaws': '/img/clans/cats/packetpaws.png',
    'Indexclaws': '/img/clans/cats/indexclaws.png',
    'Stackfur': '/img/clans/cats/stackfur.png',
    'Cachefang': '/img/clans/cats/cachefang.png',
    'APItail': '/img/clans/cats/apitail.png',
    'Objecttooth': '/img/clans/cats/objecttooth.png',
    'Logmeow': '/img/clans/cats/logmeow.png',
    'Versionbite': '/img/clans/cats/versionbite.png',
    'Sin Clan': '/img/clans/cats/default.png'
};

// Ejecutar después de cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-clan]').forEach(el => {
        const clan = el.getAttribute('data-clan');
        const src = clanCatImages[clan] || clanCatImages['Sin Clan'];
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Clan ${clan}`;
        img.className = 'img-thumbnail mb-2';
        img.style.maxHeight = '1200px';
        el.prepend(img);
    });
});
