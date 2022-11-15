import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/index.js'

//en
import translationEn from '../locales/en/translation.json' assert { type: "json" };

//ru
import translationRu from '../locales/ru/translation.json' assert { type: "json" };

const resources = {
    en: {
        translation: translationEn
    },

    ru: {
        translation: translationRu
    }
}

i18next.init({
    resources
});

function changeToEng() {
    document.getElementById('output').innerHTML = i18next.t(translationEn.title)
    document.getElementById('output2').innerHTML = i18next.t(translationEn.title2)
}

function changeToRu() {
    document.getElementById('output').innerHTML = i18next.t(translationRu.title)
    // document.getElementById('output2').innerHTML = i18next.t(translationRu.title2)
}


document.getElementById('ru').addEventListener('click', () => changeToRu())
document.getElementById('en').addEventListener('click', () => changeToEng())
