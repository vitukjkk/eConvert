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

// VARIAVEIS

const MAX_MODULES = 15;

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

// ONCHANGE


selectMainConversions.forEach((select, index) => {
    select.style.display = 'none';
});

selectMainConversions[0].onchange = () => {
    switch(Number(selectMainConversions[0].value)) {
        case 0: // SELECIONE
            for(let i = 0; i < MAX_MODULES; i++) {
                selectMainConversions[i].style.display = 'none';
            }  
            selectMainConversions[0].style.display = 'flex';   
            break;
        case 1: // MASSA
            for(let i = 0; i < MAX_MODULES; i++) {
                selectMainConversions[i].style.display = 'none';
            }
            selectMainConversions[0].style.display = 'flex';   
            selectMainConversions[1].style.display = 'flex';
            selectMainConversions[8].style.display = 'flex';   
            break;
        case 2: // COMPRIMENTO
            for(let i = 0; i < MAX_MODULES; i++) {
                selectMainConversions[i].style.display = 'none';
            }  
            selectMainConversions[0].style.display = 'flex';   
            selectMainConversions[2].style.display = 'flex';
            selectMainConversions[9].style.display = 'flex';   
            break;
        case 3: // TEMPERATURA
            for(let i = 0; i < MAX_MODULES; i++) {
                selectMainConversions[i].style.display = 'none';
            }  
            selectMainConversions[0].style.display = 'flex';   
            selectMainConversions[3].style.display = 'flex';
            selectMainConversions[10].style.display = 'flex';   
            break;
        case 4: // VELOCIDADE
            for(let i = 0; i < MAX_MODULES; i++) {
                selectMainConversions[i].style.display = 'none';
            }  
            selectMainConversions[0].style.display = 'flex';   
            selectMainConversions[4].style.display = 'flex';
            selectMainConversions[11].style.display = 'flex';   
            break;
        case 5: // ÁREA
            for(let i = 0; i < MAX_MODULES; i++) {
                selectMainConversions[i].style.display = 'none';
            }      
            selectMainConversions[0].style.display = 'flex';   
            selectMainConversions[5].style.display = 'flex';
            selectMainConversions[12].style.display = 'flex';   
            break;
        case 6: // VOLUME
            for(let i = 0; i < MAX_MODULES; i++) {
                selectMainConversions[i].style.display = 'none';
            }      
            selectMainConversions[0].style.display = 'flex';   
            selectMainConversions[6].style.display = 'flex';
            selectMainConversions[13].style.display = 'flex';     
            break;
        case 7: // TEMPO
            for(let i = 0; i < MAX_MODULES; i++) {
                selectMainConversions[i].style.display = 'none';
            }  
            selectMainConversions[0].style.display = 'flex';   
            selectMainConversions[7].style.display = 'flex';
            selectMainConversions[14].style.display = 'flex';   
            break;
    }
}
    
selectMainConversions[0].style.display = 'flex';

// FUNCTIONS

function convertValue(module : number, valueAfter : number) {
    switch(module) {
        case 1:
            
            break;
    }
}