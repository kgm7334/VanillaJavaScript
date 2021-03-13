const CountrySelector = document.querySelector(".CountrySelector");
const StoredCountry = 'StroedCountry';

function SaveCountry(value){

    const SelectedCountry = CountrySelector.value;
    const SelectedIndex = CountrySelector.selectedIndex;

    if(SelectedIndex>0){
        localStorage.setItem(StoredCountry,SelectedCountry);
    }
    
}

function ShowStroedCountry(){
    const loadedStoredCountry=localStorage.getItem(StoredCountry);

    if(loadedStoredCountry !== null){

        var optionCount = CountrySelector.options.length;

        for (var i=0; i<optionCount; i++) {
            if (CountrySelector.options[i].value === loadedStoredCountry) {
                CountrySelector.options[i].selected = true;
            }
        }
     }
}

function init(){
    CountrySelector.addEventListener("change",SaveCountry);
    ShowStroedCountry();
}

init();