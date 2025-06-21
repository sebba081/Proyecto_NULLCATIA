// Mapa de clanes a URLs de imágenes de escudos
const clanShieldImages = {
    'Bytewhiskers': '/img/clans/shield/Bytewhiskers.png',
    'Packetpaws': '/img/clans/shield/packetpaws.png',
    'Indexclaws': '/img/clans/shield/indexclaws.png',
    'Stackfur': '/img/clans/shield/stackfur.png',
    'Cachefang': '/img/clans/shield/cachefang.png',
    'APItail': '/img/clans/shield/apitail.png',
    'Objecttooth': '/img/clans/shield/objecttooth.png',
    'Logmeow': '/img/clans/shield/logmeow.png',
    'Versionbite': '/img/clans/shield/versionbite.png',
    'Sin Clan': '/img/clans/shield/default.png'
};

// Ejecutar después de cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-clan-escudo]').forEach(el => {
        const clan = el.getAttribute('data-clan-escudo');
        const src = clanShieldImages[clan] || clanShieldImages['Sin Clan'];

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Escudo del clan ${clan}`;
        img.className = 'img-fluid mb-3';
        img.style.maxHeight = '150px';

        el.prepend(img);
    });
});
