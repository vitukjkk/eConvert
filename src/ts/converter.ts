import '../css/index.css';

// ============================
// ELEMENTOS
// ============================

// HEADER
const divHeaderLeftSideR = document.querySelector('#divHeaderLeftSideR') as HTMLDivElement;
const imgHeaderIcons = document.querySelectorAll<HTMLImageElement>('.imgHeaderIcons');
const imgMainLogo = document.querySelector('#imgMainLogo') as HTMLImageElement;

// MAIN

const selectMainConversions = document.querySelectorAll<HTMLInputElement>('.selectMainConversions');
const inputMainValue = document.querySelector('#inputMainValue') as HTMLInputElement;
const inputConvertResult = document.querySelector('#inputConvertResult') as HTMLInputElement;
const buttonConversions = document.querySelectorAll<HTMLInputElement>('.buttonConversions');

// EVENTOS

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

// ONCLICK

imgMainLogo.onclick = () => window.location.href = './index.html';

buttonConversions.forEach((button, index) => {
    button.onclick = () => {
        switch(index) {
            case 0: // BOTÃO CONVERTER
                switch(Number(selectMainConversions[0].value)) {
                    case 1: //  MASSA
                        break;
                    case 2: // COMPRIMENTO
                        break;
                    case 3: // TEMPERATURA
                        break;
                    case 4: // VELOCIDADE
                        break;
                    case 5: // ÁREA
                        break;
                    case 6: // VOLUME
                        break;
                    case 7: // TEMPO
                        break;
                }
                break;
            case 1: // BOTÃO LIMPAR 
                inputConvertResult.value = "";
                inputMainValue.value = "";
                inputMainValue.focus();
                break;
        }
    }
});

// ONINPUT

inputMainValue.oninput = () => inputMainValue.value = inputMainValue.value.replace(/[^0-9.-]/g, '');

// FUNCTIONS

function convertValue(module : number, valueAfter : number) {
    switch(module) {
        case 1:
            
            break;
    }
}