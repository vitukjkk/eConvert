// DEFININDO ELEMENTOS

// =========================
// MAIN
// =========================
const mainBanner = document.querySelector('.imgMainBanners')
const h2MainBanners = document.querySelector('#h2MainBanners')
const pMainBanners = document.querySelector('#pMainBanners')

// ===============================
// DEFIINDO VARIÁVEIS
// ===============================

// CONST

const maxElements = {
    banners: 3
}

const srcBanners = {
    1: {
        src: '../assets/banners/banner_novidades.png',
        h2Content: 'Novidades',
        pContent: 'Conheça nossas novidades'
        
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
}

// VAR

var controlVar = {
    mainBanner: 0
}

function changeMainBanner() {
    controlVar.mainBanner++    
    mainBanner.src = srcBanners[controlVar.mainBanner].src
    if(maxElements.banners === controlVar.mainBanner) {
        controlVar.mainBanner = 0
    }
}

export {
    changeMainBanner
}