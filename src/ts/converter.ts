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
                divHeaderLeftSideR.style.display = divHeaderLeftSideR.style.display === 'none' ? 'flex' : 'none';
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
                    case 1: // MASSA
                        inputConvertResult.value = String(convertValue(1, selectMainConversions[1].value, selectMainConversions[8].value));
                        break;
                    case 2: // COMPRIMENTO
                        inputConvertResult.value = String(convertValue(2, selectMainConversions[2].value, selectMainConversions[9].value));
                        break;
                    case 3: // TEMPERATURA
                        inputConvertResult.value = String(convertValue(3, selectMainConversions[3].value, selectMainConversions[10].value));
                        break;
                    case 4: // VELOCIDADE
                        inputConvertResult.value = String(convertValue(4, selectMainConversions[4].value, selectMainConversions[11].value));
                        break;
                    case 5: // ÁREA
                        inputConvertResult.value = String(convertValue(5, selectMainConversions[5].value, selectMainConversions[12].value));
                        break;
                    case 6: // VOLUME
                        inputConvertResult.value = String(convertValue(6, selectMainConversions[6].value, selectMainConversions[13].value));
                        break;
                    case 7: // TEMPO    
                        inputConvertResult.value = String(convertValue(7, selectMainConversions[7].value, selectMainConversions[14].value));
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

function convertValue(module : number, moduleAfter : string, moduleResult : string) : number {
    var convertedValue = 0;
    switch(module) {
        case 1: // MASSA 
            switch(moduleAfter) {
                case "kg":
                    switch(moduleResult) {
                        case "g":
                            convertedValue = Number(inputMainValue.value) * 1000;
                        break;
                        case "mg":
                            convertedValue = Number(inputMainValue.value) * 1000000;
                            break;
                        case "t":
                            convertedValue = Number(inputMainValue.value) / 1000;
                            break;
                        case "lb":
                            convertedValue = Number(inputMainValue.value) * 2.20462;
                            break;
                        case "oz":
                            convertedValue = Number(inputMainValue.value) * 35.274;
                            break;
                    }
                    break;

                case "g":
                    switch(moduleResult) {
                        case "kg":
                            convertedValue = Number(inputMainValue.value) / 1000;
                            break;
                        case "mg":
                            convertedValue = Number(inputMainValue.value) * 1000;
                            break;
                        case "t":
                            convertedValue = Number(inputMainValue.value) / 1000000;
                            break;
                        case "lb":
                            convertedValue = Number(inputMainValue.value) / 453.592;
                            break;
                        case "oz":
                            convertedValue = Number(inputMainValue.value) / 28.3495;
                            break;
                    }
                    break;

                case "mg":
                    switch(moduleResult) {
                        case "kg":
                            convertedValue = Number(inputMainValue.value) / 1000000;
                            break;
                        case "g":
                            convertedValue = Number(inputMainValue.value) / 1000;
                            break;
                        case "t":
                            convertedValue = Number(inputMainValue.value) / 1000000000;
                            break;
                        case "lb":
                            convertedValue = Number(inputMainValue.value) / 453592;
                            break;
                        case "oz":
                            convertedValue = Number(inputMainValue.value) / 28349.5;
                            break;
                    }
                    break;

                case "t":
                    switch(moduleResult) {
                        case "kg":
                            convertedValue = Number(inputMainValue.value) * 1000;
                            break;
                        case "g":
                            convertedValue = Number(inputMainValue.value) * 1000000;
                            break;
                        case "mg":
                            convertedValue = Number(inputMainValue.value) * 1000000000;
                            break;
                        case "lb":
                            convertedValue = Number(inputMainValue.value) * 2204.62;
                            break;
                        case "oz":
                            convertedValue = Number(inputMainValue.value) * 35274;
                            break;
                    }
                    break;
                
                case "lb":
                    switch(moduleResult) {
                        case "kg":
                            convertedValue = Number(inputMainValue.value) / 2.20462;
                            break;
                        case "g":
                            convertedValue = Number(inputMainValue.value) * 453.592;
                            break;
                        case "mg":
                            convertedValue = Number(inputMainValue.value) * 453592;
                            break;
                        case "t":
                            convertedValue = Number(inputMainValue.value) / 2204.62;
                            break;
                        case "oz":
                            convertedValue = Number(inputMainValue.value) * 16;
                            break;
                    }
                    break;
                    
                case "oz":
                    switch(moduleResult) {
                        case "kg":
                            convertedValue = Number(inputMainValue.value) / 35.274;
                            break;
                        case "g":
                            convertedValue = Number(inputMainValue.value) * 28.3495;
                            break;
                        case "mg":
                            convertedValue = Number(inputMainValue.value) * 28349.5;
                            break;
                        case "t":
                            convertedValue = Number(inputMainValue.value) / 35274;
                            break;
                        case "lb":
                            convertedValue = Number(inputMainValue.value) / 16;
                            break;
                    }
                    break;
            }
            break;
        case 2: // COMPRIMENTO
            switch(moduleAfter) {
                case "m":
                    switch(moduleResult) {
                        case "cm":
                            convertedValue = Number(inputMainValue.value) * 100;
                            break;
                        case "mm":
                            convertedValue = Number(inputMainValue.value) * 1000;
                            break;
                        case "km":
                            convertedValue = Number(inputMainValue.value) / 1000;
                            break;
                        case "in":
                            convertedValue = Number(inputMainValue.value) * 39.3701;
                            break;
                        case "ft":
                            convertedValue = Number(inputMainValue.value) * 3.28084;
                            break;
                        case "yd":
                            convertedValue = Number(inputMainValue.value) * 1.09361;
                            break;
                        case "mi":
                            convertedValue = Number(inputMainValue.value) / 1609.34;
                            break;
                    }
                    break;

                case "cm":
                    switch(moduleResult) {
                        case "m":
                            convertedValue = Number(inputMainValue.value) / 100;
                            break;
                        case "mm":
                            convertedValue = Number(inputMainValue.value) * 10;
                            break;
                        case "km":
                            convertedValue = Number(inputMainValue.value) / 100000;
                            break;
                        case "in":
                            convertedValue = Number(inputMainValue.value) / 2.54;
                            break;
                        case "ft":
                            convertedValue = Number(inputMainValue.value) / 30.48;
                            break;
                        case "yd":
                            convertedValue = Number(inputMainValue.value) / 91.44;
                            break;
                        case "mi":
                            convertedValue = Number(inputMainValue.value) / 160934;
                            break;
                    }
                    break;
                
                case "mm":
                    switch(moduleResult) {
                        case "m":
                            convertedValue = Number(inputMainValue.value) / 1000;
                            break;
                        case "cm":
                            convertedValue = Number(inputMainValue.value) / 10;
                            break;
                        case "km":
                            convertedValue = Number(inputMainValue.value) / 1000000;
                            break;
                        case "in":
                            convertedValue = Number(inputMainValue.value) / 25.4;
                            break;
                        case "ft":
                            convertedValue = Number(inputMainValue.value) / 304.8;
                            break;
                        case "yd":
                            convertedValue = Number(inputMainValue.value) / 914.4;
                            break;
                        case "mi":
                            convertedValue = Number(inputMainValue.value) / 1609340;
                            break;
                    }
                    break;
                
                case "km":
                    switch(moduleResult) {
                        case "m":
                            convertedValue = Number(inputMainValue.value) * 1000;
                            break;
                        case "cm":
                            convertedValue = Number(inputMainValue.value) * 100000;
                            break;
                        case "mm":
                            convertedValue = Number(inputMainValue.value) * 1000000;
                            break;
                        case "in":
                            convertedValue = Number(inputMainValue.value) * 39370.1;
                            break;
                        case "ft":
                            convertedValue = Number(inputMainValue.value) * 3280.84;
                            break;
                        case "yd":
                            convertedValue = Number(inputMainValue.value) * 1093.61;
                            break;
                        case "mi":
                            convertedValue = Number(inputMainValue.value) / 1.60934;
                            break;
                    }
                    break;
                
                case "in":
                    switch(moduleResult) {
                        case "m":
                            convertedValue = Number(inputMainValue.value) / 39.3701;
                            break;
                        case "cm":
                            convertedValue = Number(inputMainValue.value) * 2.54;
                            break;
                        case "mm":
                            convertedValue = Number(inputMainValue.value) * 25.4;
                            break;
                        case "km":
                            convertedValue = Number(inputMainValue.value) / 39370.1;
                            break;
                        case "ft":
                            convertedValue = Number(inputMainValue.value) / 12;
                            break;
                        case "yd":
                            convertedValue = Number(inputMainValue.value) / 36;
                            break;
                        case "mi":
                            convertedValue = Number(inputMainValue.value) / 63360;
                            break;
                    }
                    break;

                case "ft":
                    switch(moduleResult) {
                        case "m":
                            convertedValue = Number(inputMainValue.value) / 3.28084;
                            break;
                        case "cm":
                            convertedValue = Number(inputMainValue.value) * 30.48;
                            break;
                        case "mm":
                            convertedValue = Number(inputMainValue.value) * 304.8;
                            break;
                        case "km":
                            convertedValue = Number(inputMainValue.value) / 3280.84;
                            break;
                        case "in":
                            convertedValue = Number(inputMainValue.value) * 12;
                            break;
                        case "yd":
                            convertedValue = Number(inputMainValue.value) / 3;
                            break;
                        case "mi":
                            convertedValue = Number(inputMainValue.value) / 5280;
                            break;
                    }
                    break;

                case "yd":
                    switch(moduleResult) {
                        case "m":
                            convertedValue = Number(inputMainValue.value) / 1.09361;
                            break;
                        case "cm":
                            convertedValue = Number(inputMainValue.value) * 91.44;
                            break;
                        case "mm":
                            convertedValue = Number(inputMainValue.value) * 914.4;
                            break;
                        case "km":
                            convertedValue = Number(inputMainValue.value) / 1093.61;
                            break;
                        case "in":
                            convertedValue = Number(inputMainValue.value) * 36;
                            break;
                        case "ft":
                            convertedValue = Number(inputMainValue.value) * 3;
                            break;
                        case "mi":
                            convertedValue = Number(inputMainValue.value) / 1760;
                            break;
                    }
                    break;

                case "mi":
                    switch(moduleResult) {
                        case "m":
                            convertedValue = Number(inputMainValue.value) * 1609.34;
                            break;
                        case "cm":
                            convertedValue = Number(inputMainValue.value) * 160934;
                            break;
                        case "mm":
                            convertedValue = Number(inputMainValue.value) * 1609340;
                            break;
                        case "km":
                            convertedValue = Number(inputMainValue.value) * 1.60934;
                            break;
                        case "in":
                            convertedValue = Number(inputMainValue.value) * 63360;
                            break;
                        case "ft":
                            convertedValue = Number(inputMainValue.value) * 5280;
                            break;
                        case "yd":
                            convertedValue = Number(inputMainValue.value) * 1760;
                            break;
                    }
                    break;
            }
            break;
        case 3: // TEMPERATURA  
            switch(moduleAfter) {
                case "c":
                    switch(moduleResult) {
                        case "f":
                            convertedValue = (Number(inputMainValue.value) * 9/5) + 32;
                            break;
                        case "k":
                            convertedValue = Number(inputMainValue.value) + 273.15;
                            break;
                    }
                    break;
                case "f":
                    switch(moduleResult) {
                        case "c":
                            convertedValue = (Number(inputMainValue.value) - 32) * 5/9;
                            break;
                        case "k":
                            convertedValue = (Number(inputMainValue.value) - 32) * 5/9 + 273.15;
                            break;
                    }
                    break;
                case "k":
                    switch(moduleResult) {
                        case "c":
                            convertedValue = Number(inputMainValue.value) - 273.15;
                            break;
                        case "f":
                            convertedValue = (Number(inputMainValue.value) - 273.15) * 9/5 + 32;
                            break;
                    }
                    break;
            }
            break;
        case 4: // VELOCIDADE
        switch(moduleAfter) {
            case "mps":
                switch(moduleResult) {
                    case "kmh":
                        convertedValue = Number(inputMainValue.value) * 3.6;
                        break;
                    case "mph":
                        convertedValue = Number(inputMainValue.value) * 2.23694;
                        break;
                    case "knots":
                        convertedValue = Number(inputMainValue.value) * 1.94384;
                        break;
                }
                break;
            case "kmh":
                switch(moduleResult) {
                    case "mps":
                        convertedValue = Number(inputMainValue.value) / 3.6;
                        break;
                    case "mph":
                        convertedValue = Number(inputMainValue.value) / 1.60934;
                        break;
                    case "knots":
                        convertedValue = Number(inputMainValue.value) / 1.852;
                        break;
                }
                break;
            case "mph":
                switch(moduleResult) {
                    case "mps":
                        convertedValue = Number(inputMainValue.value) / 2.23694;
                        break;
                    case "kmh":
                        convertedValue = Number(inputMainValue.value) * 1.60934;
                        break;
                    case "knots":
                        convertedValue = Number(inputMainValue.value) / 1.15078;
                        break;
                }
                break;
            case "knots":
                switch(moduleResult) {
                    case "mps":
                        convertedValue = Number(inputMainValue.value) / 1.94384;
                        break;
                    case "kmh":
                        convertedValue = Number(inputMainValue.value) * 1.852;
                        break;
                    case "mph":
                        convertedValue = Number(inputMainValue.value) * 1.15078;
                        break;
                }
            break;
        }
            break;
        case 5: // ÁREA
        switch(moduleAfter) {
            case "m2":
                switch(moduleResult) {
                    case "cm2":
                        convertedValue = Number(inputMainValue.value) * 10000;
                        break;
                    case "km2":
                        convertedValue = Number(inputMainValue.value) / 1000000;
                        break;
                    case "ha":
                        convertedValue = Number(inputMainValue.value) / 10000;
                        break;
                    case "acre":
                        convertedValue = Number(inputMainValue.value) / 4046.86;
                        break;
                }
                break;
            case "cm2":
                switch(moduleResult) {
                    case "m2":
                        convertedValue = Number(inputMainValue.value) / 10000;
                        break;
                    case "km2":
                        convertedValue = Number(inputMainValue.value) / 10000000000;
                        break;
                    case "ha":
                        convertedValue = Number(inputMainValue.value) / 100000000;
                        break;
                    case "acre":
                        convertedValue = Number(inputMainValue.value) / 40468600;
                        break;
                }
                break;
            case "km2":
                switch(moduleResult) {
                    case "m2":
                        convertedValue = Number(inputMainValue.value) * 1000000;
                        break;
                    case "cm2":
                        convertedValue = Number(inputMainValue.value) * 10000000000;
                        break;
                    case "ha":
                        convertedValue = Number(inputMainValue.value) * 100;
                        break;
                    case "acre":
                        convertedValue = Number(inputMainValue.value) * 247.105;
                        break;
                }
                break;
            case "ha":
                switch(moduleResult) {
                    case "m2":
                        convertedValue = Number(inputMainValue.value) * 10000;
                        break;
                    case "cm2":
                        convertedValue = Number(inputMainValue.value) * 100000000;
                        break;
                    case "km2":
                        convertedValue = Number(inputMainValue.value) / 100;
                        break;
                    case "acre":
                        convertedValue = Number(inputMainValue.value) * 2.47105;
                        break;
                }
                break;
            case "acre":
                switch(moduleResult) {
                    case "m2":
                        convertedValue = Number(inputMainValue.value) * 4046.86;
                        break;
                    case "cm2":
                        convertedValue = Number(inputMainValue.value) * 40468600;
                        break;
                    case "km2":
                        convertedValue = Number(inputMainValue.value) / 247.105;
                        break;
                    case "ha":
                        convertedValue = Number(inputMainValue.value) / 2.47105;
                        break;
                }
                break;
        }
        break;
        case 6: // VOLUME
            switch(moduleAfter) {
                case "m3":
                    switch(moduleResult) {
                        case "l":
                            convertedValue = Number(inputMainValue.value) * 1000;
                            break;
                        case "ml":
                            convertedValue = Number(inputMainValue.value) * 1000000;
                            break;
                        case "cm3":
                            convertedValue = Number(inputMainValue.value) * 1000000;
                            break;
                        case "km3":
                            convertedValue = Number(inputMainValue.value) / 1e9;
                            break;
                        case "gal":
                            convertedValue = Number(inputMainValue.value) * 264.172;
                            break;
                        case "gal_us":
                            convertedValue = Number(inputMainValue.value) * 264.172;
                            break;
                        case "gal_imp":
                            convertedValue = Number(inputMainValue.value) * 219.969;
                            break;
                        case "bbl":
                            convertedValue = Number(inputMainValue.value) * 6.28981;
                            break;
                    }
                    break;
                case "l":
                    switch(moduleResult) {
                        case "m3":
                            convertedValue = Number(inputMainValue.value) / 1000;
                            break;
                        case "ml":
                            convertedValue = Number(inputMainValue.value) * 1000;
                            break;
                        case "cm3":
                            convertedValue = Number(inputMainValue.value) * 1000;
                            break;
                        case "km3":
                            convertedValue = Number(inputMainValue.value) / 1e12;
                            break;
                        case "gal":
                            convertedValue = Number(inputMainValue.value) / 3.78541;
                            break;
                        case "gal_us":
                            convertedValue = Number(inputMainValue.value) / 3.78541;
                            break;
                        case "gal_imp":
                            convertedValue = Number(inputMainValue.value) / 4.54609;
                            break;
                        case "bbl":
                            convertedValue = Number(inputMainValue.value) / 159;
                            break;
                    }
                    break;
                case "ml":
                    switch(moduleResult) {
                        case "m3":
                            convertedValue = Number(inputMainValue.value) / 1e6;
                            break;
                        case "l":
                            convertedValue = Number(inputMainValue.value) / 1000;
                            break;
                        case "cm3":
                            convertedValue = Number(inputMainValue.value);
                            break;
                        case "km3":
                            convertedValue = Number(inputMainValue.value) / 1e15;
                            break;
                        case "gal":
                            convertedValue = Number(inputMainValue.value) / 3785.41;
                            break;
                        case "gal_us":
                            convertedValue = Number(inputMainValue.value) / 3785.41;
                            break;
                        case "gal_imp":
                            convertedValue = Number(inputMainValue.value) / 4546.09;
                            break;
                        case "bbl":
                            convertedValue = Number(inputMainValue.value) / 159000;
                            break;
                    }
                    break;
                case "cm3":
                    switch(moduleResult) {
                        case "m3":
                            convertedValue = Number(inputMainValue.value) / 1e6;
                            break;
                        case "l":
                            convertedValue = Number(inputMainValue.value) / 1000;
                            break;
                        case "ml":
                            convertedValue = Number(inputMainValue.value);
                            break;
                        case "km3":
                            convertedValue = Number(inputMainValue.value) / 1e15;
                            break;
                        case "gal":
                            convertedValue = Number(inputMainValue.value) / 3785.41;
                            break;
                        case "gal_us":
                            convertedValue = Number(inputMainValue.value) / 3785.41;
                            break;
                        case "gal_imp":
                            convertedValue = Number(inputMainValue.value) / 4546.09;
                            break;
                        case "bbl":
                            convertedValue = Number(inputMainValue.value) / 159000;
                            break;
                    }
                    break;
                case "km3":
                    switch(moduleResult) {
                        case "m3":
                            convertedValue = Number(inputMainValue.value) * 1e9;
                            break;
                        case "l":
                            convertedValue = Number(inputMainValue.value) * 1e12;
                            break;
                        case "ml":
                            convertedValue = Number(inputMainValue.value) * 1e15;
                            break;
                        case "cm3":
                            convertedValue = Number(inputMainValue.value) * 1e15;
                            break;
                        case "gal":
                            convertedValue = Number(inputMainValue.value) * 2.64172e11;
                            break;
                        case "gal_us":
                            convertedValue = Number(inputMainValue.value) * 2.64172e11;
                            break;
                        case "gal_imp":
                            convertedValue = Number(inputMainValue.value) * 2.19969e11;
                            break;
                        case "bbl":
                            convertedValue = Number(inputMainValue.value) * 6.28981e9;
                            break;
                    }
                    break;
                case "gal":
                    switch(moduleResult) {
                        case "m3":
                            convertedValue = Number(inputMainValue.value) / 264.172;
                            break;
                        case "l":
                            convertedValue = Number(inputMainValue.value) * 3.78541;
                            break;
                        case "ml":
                            convertedValue = Number(inputMainValue.value) * 3785.41;
                            break;
                        case "cm3":
                            convertedValue = Number(inputMainValue.value) * 3785.41;
                            break;
                        case "km3":
                            convertedValue = Number(inputMainValue.value) / 2.64172e11;
                            break;
                        case "gal_us":
                            convertedValue = Number(inputMainValue.value);
                            break;
                        case "gal_imp":
                            convertedValue = Number(inputMainValue.value) * 0.832674;
                            break;
                        case "bbl":
                            convertedValue = Number(inputMainValue.value) / 42;
                            break;
                    }
                    break;
                case "gal_us":
                    switch(moduleResult) {
                        case "m3":
                            convertedValue = Number(inputMainValue.value) / 264.172;
                            break;
                        case "l":
                            convertedValue = Number(inputMainValue.value) * 3.78541;
                            break;
                        case "ml":
                            convertedValue = Number(inputMainValue.value) * 3785.41;
                            break;
                        case "cm3":
                            convertedValue = Number(inputMainValue.value) * 3785.41;
                            break;
                        case "km3":
                            convertedValue = Number(inputMainValue.value) / 2.64172e11;
                            break;
                        case "gal":
                            convertedValue = Number(inputMainValue.value);
                            break;
                        case "gal_imp":
                            convertedValue = Number(inputMainValue.value) * 0.832674;
                            break;
                        case "bbl":
                            convertedValue = Number(inputMainValue.value) / 42;
                            break;
                    }
                    break;
                case "gal_imp":
                    switch(moduleResult) {
                        case "m3":
                            convertedValue = Number(inputMainValue.value) / 219.969;
                            break;
                        case "l":
                            convertedValue = Number(inputMainValue.value) * 4.54609;
                            break;
                        case "ml":
                            convertedValue = Number(inputMainValue.value) * 4546.09;
                            break;
                        case "cm3":
                            convertedValue = Number(inputMainValue.value) * 4546.09;
                            break;
                        case "km3":
                            convertedValue = Number(inputMainValue.value) / 2.19969e11;
                            break;
                        case "gal":
                            convertedValue = Number(inputMainValue.value) * 1.20095;
                            break;
                        case "gal_us":
                            convertedValue = Number(inputMainValue.value) * 1.20095;
                            break;
                        case "bbl":
                            convertedValue = Number(inputMainValue.value) / 34.9723;
                            break;
                    }
                    break;
                case "bbl":
                    switch(moduleResult) {
                        case "m3":
                            convertedValue = Number(inputMainValue.value) / 6.28981;
                            break;
                        case "l":
                            convertedValue = Number(inputMainValue.value) * 159;
                            break;
                        case "ml":
                            convertedValue = Number(inputMainValue.value) * 159000;
                            break;
                        case "cm3":
                            convertedValue = Number(inputMainValue.value) * 159000;
                            break;
                        case "km3":
                            convertedValue = Number(inputMainValue.value) / 6.28981e9;
                            break;
                        case "gal":
                            convertedValue = Number(inputMainValue.value) * 42;
                            break;
                        case "gal_us":
                            convertedValue = Number(inputMainValue.value) * 42;
                            break;
                        case "gal_imp":
                            convertedValue = Number(inputMainValue.value) * 34.9723;
                            break;
                    }
                    break;
            }
            break;
        case 7: // TEMPO
            switch(moduleAfter) {
                case "s":
                    switch(moduleResult) {
                        case "min":
                            convertedValue = Number(inputMainValue.value) / 60;
                            break;
                        case "h":
                            convertedValue = Number(inputMainValue.value) / 3600;
                            break;
                        case "d":
                            convertedValue = Number(inputMainValue.value) / 86400;
                            break;
                        case "week":
                            convertedValue = Number(inputMainValue.value) / 604800;
                            break;
                        case "month":
                            convertedValue = Number(inputMainValue.value) / 2.628e6;
                            break;
                        case "year":
                            convertedValue = Number(inputMainValue.value) / 3.154e7;
                            break;
                    }
                    break;
                case "min":
                    switch(moduleResult) {
                        case "s":
                            convertedValue = Number(inputMainValue.value) * 60;
                            break;
                        case "h":
                            convertedValue = Number(inputMainValue.value) / 60;
                            break;
                        case "d":
                            convertedValue = Number(inputMainValue.value) / 1440;
                            break;
                        case "week":
                            convertedValue = Number(inputMainValue.value) / 10080;
                            break;
                        case "month":
                            convertedValue = Number(inputMainValue.value) / 43800;
                            break;
                        case "year":
                            convertedValue = Number(inputMainValue.value) / 525600;
                            break;
                    }
                    break;
                case "h":
                    switch(moduleResult) {
                        case "s":
                            convertedValue = Number(inputMainValue.value) * 3600;
                            break;
                        case "min":
                            convertedValue = Number(inputMainValue.value) * 60;
                            break;
                        case "d":
                            convertedValue = Number(inputMainValue.value) / 24;
                            break;
                        case "week":
                            convertedValue = Number(inputMainValue.value) / 168;
                            break;
                        case "month":
                            convertedValue = Number(inputMainValue.value) / 730;
                            break;
                        case "year":
                            convertedValue = Number(inputMainValue.value) / 8760;
                            break;
                    }
                    break;
                case "d":
                    switch(moduleResult) {
                        case "s":
                            convertedValue = Number(inputMainValue.value) * 86400;
                            break;
                        case "min":
                            convertedValue = Number(inputMainValue.value) * 1440;
                            break;
                        case "h":
                            convertedValue = Number(inputMainValue.value) * 24;
                            break;
                        case "week":
                            convertedValue = Number(inputMainValue.value) / 7;
                            break;
                        case "month":
                            convertedValue = Number(inputMainValue.value) / 30.417;
                            break;
                        case "year":
                            convertedValue = Number(inputMainValue.value) / 365;
                            break;
                    }
                    break;
                case "week":
                    switch(moduleResult) {
                        case "s":
                            convertedValue = Number(inputMainValue.value) * 604800;
                            break;
                        case "min":
                            convertedValue = Number(inputMainValue.value) * 10080;
                            break;
                        case "h":
                            convertedValue = Number(inputMainValue.value) * 168;
                            break;
                        case "d":
                            convertedValue = Number(inputMainValue.value) * 7;
                            break;
                        case "month":
                            convertedValue = Number(inputMainValue.value) / 4.345;
                            break;
                        case "year":
                            convertedValue = Number(inputMainValue.value) / 52.143;
                            break;
                    }
                    break;
                case "month":
                    switch(moduleResult) {
                        case "s":
                            convertedValue = Number(inputMainValue.value) * 2.628e6;
                            break;
                        case "min":
                            convertedValue = Number(inputMainValue.value) * 43800;
                            break;
                        case "h":
                            convertedValue = Number(inputMainValue.value) * 730;
                            break;
                        case "d":
                            convertedValue = Number(inputMainValue.value) * 30.417;
                            break;
                        case "week":
                            convertedValue = Number(inputMainValue.value) * 4.345;
                            break;
                        case "year":
                            convertedValue = Number(inputMainValue.value) / 12;
                            break;
                    }
                    break;
                case "year":
                    switch(moduleResult) {
                        case "s":
                            convertedValue = Number(inputMainValue.value) * 3.154e7;
                            break;
                        case "min":
                            convertedValue = Number(inputMainValue.value) * 525600;
                            break;
                        case "h":
                            convertedValue = Number(inputMainValue.value) * 8760;
                            break;
                        case "d":
                            convertedValue = Number(inputMainValue.value) * 365;
                            break;
                        case "week":
                            convertedValue = Number(inputMainValue.value) * 52.143;
                            break;
                        case "month":
                            convertedValue = Number(inputMainValue.value) * 12;
                            break;
                    }
                    break;
            }
            break;
    }

    return convertedValue;
}