// DEFININDO ELEMENTOS
// =========================
// MAIN
// =========================
var imgMainBanner = document.querySelector('#imgMainBanners');
var h2MainBanners = document.querySelector('#h2MainBanners');
var pMainBanners = document.querySelector('#pMainBanners');
// ===============================
// DEFIINDO VARIÁVEIS
// ===============================
// CONST
var maxElements = {
    banners: 3
};
var srcBanners = {
    1: {
        src: '../assets/banners/banner_novidades.png',
        h2Content: 'Novidades',
        pContent: 'Clique no banner e conheça nossas novidades'
    },
    2: {
        src: '../assets/banners/banner_meio_ambiente.png',
        h2Content: 'Meio Ambiente',
        pContent: 'Cuidando do meio ambiente, vamos participar dessa causa?'
    },
    3: {
        src: '../assets/banners/banner_ressurja.png',
        h2Content: 'Ressurja',
        pContent: 'Ressurja, motive-se e dê a volta por cima!'
    }
};
// VAR
var controlVar = {
    mainBanner: 0
};
function changeMainBanner() {
    controlVar.mainBanner++;
    if (imgMainBanner && h2MainBanners && pMainBanners) {
        imgMainBanner.src = srcBanners[controlVar.mainBanner].src;
        h2MainBanners.textContent = srcBanners[controlVar.mainBanner].h2Content;
        pMainBanners.textContent = srcBanners[controlVar.mainBanner].pContent;
    }
    if (maxElements.banners === controlVar.mainBanner) {
        controlVar.mainBanner = 0;
    }
}
export { changeMainBanner };
//# sourceMappingURL=main.js.map