import '../css/index.css';

// ============================
// ELEMENTOS
// ============================

// HEADER
const divHeaderLeftSideR = document.querySelector('#divHeaderLeftSideR') as HTMLDivElement;
const imgHeaderIcons = document.querySelectorAll<HTMLImageElement>('.imgHeaderIcons');
const imgMainLogo = document.querySelector('#imgMainLogo') as HTMLImageElement;

imgHeaderIcons.forEach((icon, index) => {
    icon.onclick = () => {
        switch(index) {
            case 0:
                divHeaderLeftSideR.style.display = divHeaderLeftSideR.style.display === 'none' ? 'block' : 'none';
                break;
            case 1:
                window.location.href = './sobre.html';
                break;
            case 2:
                window.location.href = './configuracoes.html';
                break;
        }
    }
});

imgMainLogo.onclick = () => window.location.href = './index.html';