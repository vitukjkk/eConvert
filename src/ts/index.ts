import '../css/index.css';

import { srcMainElements } from './main';

// ==============================
// IMPORTANDO ARQUIVOS
// ==============================

import '../assets/icons/general/main.ico';
import '../assets/icons/general/icon_pages_sem_fundo.png';
import '../assets/icons/general/icon_sobre_sem_fundo.png';
import '../assets/icons/general/icon_config_sem_fundo.png';

import '../assets/images/logo_sem_fundo.png';

// MAIN

// BANNERS
import '../assets/banners/banner_ressurja.png';
import '../assets/banners/banner_novidades.png';
import '../assets/banners/banner_meio_ambiente.png';

import '../assets/images/image_notices_sem_fundo.png';

// SOCIAL MEDIA ICONS
import '../assets/icons/social_media/zap_pequeno.png';
import '../assets/icons/social_media/facebook_pequeno.png';
import '../assets/icons/social_media/github_pequeno.png';
import '../assets/icons/social_media/ig_pequeno.png';
import '../assets/icons/social_media/linkedin_pequeno.png';
import '../assets/icons/social_media/pinterest_pequeno.png';
import '../assets/icons/social_media/tik-tok_pequeno.png';
import '../assets/icons/social_media/youtube_pequeno.png';

// ============================
// ELEMENTOS
// ============================

const imgMainBanner = document.querySelector('#imgMainBanner') as HTMLImageElement;
const h2MainBanners = document.querySelector('#h2MainBanners') as HTMLHeadingElement;
const pMainBanners = document.querySelector('#pMainBanners') as HTMLParagraphElement;

const buttonEnviarContato = document.querySelector('#buttonEnviarContato') as HTMLButtonElement;
const inputMainContacts = document.querySelector('#inputMainContacts') as HTMLInputElement;

// ============================
// VARIABLES
// ============================

const MAX_BANNERS = 2;

var indexMainBanner = 0;

// ============================
// TRIGGERS
// ============================

buttonEnviarContato.onclick = () => window.open('https://wa.me/5561994030749?text=' + inputMainContacts.value.replace(' ', '%20'), '_blank');

window.onload = () => setInterval(() => changeMainBanner(indexMainBanner), 10000);

// FUNCTIONS

function changeMainBanner(index: number) {
    imgMainBanner.src = srcMainElements.banners[index];
    h2MainBanners.textContent = srcMainElements.titles[index];
    pMainBanners.textContent = srcMainElements.messages[index];
    if(indexMainBanner === MAX_BANNERS) return indexMainBanner = 0;
    indexMainBanner++;
}