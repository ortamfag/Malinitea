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
    document.getElementById('output3').innerHTML = i18next.t(translationEn.title3)
    document.getElementById('output4').innerHTML = i18next.t(translationEn.title4)
    document.getElementById('output5').innerHTML = i18next.t(translationEn.title5)
    document.getElementById('output6').innerHTML = i18next.t(translationEn.title6)
    document.getElementById('output7').innerHTML = i18next.t(translationEn.title7)

    document.getElementById('output8').innerHTML = i18next.t(translationEn.title8)
    document.getElementById('output9').innerHTML = i18next.t(translationEn.title9)
    document.getElementById('output10').innerHTML = i18next.t(translationEn.title10)
    document.getElementById('output11').innerHTML = i18next.t(translationEn.title11)
    document.getElementById('output12').innerHTML = i18next.t(translationEn.title12)
    document.getElementById('output13').innerHTML = i18next.t(translationEn.title13)
    document.getElementById('output14').innerHTML = i18next.t(translationEn.title14)
    document.getElementById('output15').innerHTML = i18next.t(translationEn.title15)
    document.getElementById('output16').innerHTML = i18next.t(translationEn.title16)
    document.getElementById('output17').innerHTML = i18next.t(translationEn.title17)
    document.getElementById('output18').innerHTML = i18next.t(translationEn.title18)
    document.getElementById('output19').innerHTML = i18next.t(translationEn.title19)

    document.getElementById('output20').innerHTML = i18next.t(translationEn.title20)
    document.getElementById('output21').innerHTML = i18next.t(translationEn.title21)
    document.getElementById('output22').innerHTML = i18next.t(translationEn.title22)

    document.getElementById('output23').innerHTML = i18next.t(translationEn.title23)
    document.getElementById('output24').innerHTML = i18next.t(translationEn.title24)
    document.getElementById('output25').innerHTML = i18next.t(translationEn.title25)
    document.getElementById('output26').innerHTML = i18next.t(translationEn.title26)
    document.getElementById('output27').innerHTML = i18next.t(translationEn.title27)
    document.getElementById('output28').innerHTML = i18next.t(translationEn.title28)
    document.getElementById('output29').innerHTML = i18next.t(translationEn.title29)
    document.getElementById('output30').innerHTML = i18next.t(translationEn.title30)
    document.getElementById('output31').innerHTML = i18next.t(translationEn.title31)
    document.getElementById('output32').innerHTML = i18next.t(translationEn.title32)
    document.getElementById('output33').innerHTML = i18next.t(translationEn.title33)
    document.getElementById('output34').innerHTML = i18next.t(translationEn.title34)
    document.getElementById('output35').innerHTML = i18next.t(translationEn.title35)
    document.getElementById('output36').innerHTML = i18next.t(translationEn.title36)
    document.getElementById('output37').innerHTML = i18next.t(translationEn.title37)
    document.getElementById('output38').innerHTML = i18next.t(translationEn.title38)

    document.getElementById('output39').innerHTML = i18next.t(translationEn.title39)
    document.getElementById('output40').innerHTML = i18next.t(translationEn.title40)
    document.getElementById('output41').innerHTML = i18next.t(translationEn.title41)
    document.getElementById('brandbook__preview').innerHTML = i18next.t(translationEn.title42)
    document.getElementById('web__preview').innerHTML = i18next.t(translationEn.title43)
    document.getElementById('branding__preview').innerHTML = i18next.t(translationEn.title44)
    document.getElementById('logodesign__preview').innerHTML = i18next.t(translationEn.title45)
    document.getElementById('presentation__preview').innerHTML = i18next.t(translationEn.title46)
    document.getElementById('polygraphy__preview').innerHTML = i18next.t(translationEn.title47)
    document.getElementById('signboards__preview').innerHTML = i18next.t(translationEn.title48)
    document.getElementById('social__preview').innerHTML = i18next.t(translationEn.title49)
    document.getElementById('illustrations__preview').innerHTML = i18next.t(translationEn.title50)
    document.getElementById('allowance__preview').innerHTML = i18next.t(translationEn.title51)
    document.getElementById('packaging__preview').innerHTML = i18next.t(translationEn.title52)
    document.getElementById('catalog__preview').innerHTML = i18next.t(translationEn.title53)
    document.getElementById('ad__preview').innerHTML = i18next.t(translationEn.title54)
    document.getElementById('merch__preview').innerHTML = i18next.t(translationEn.title55)
    document.getElementById('cosmetics__preview').innerHTML = i18next.t(translationEn.title56)
    document.getElementById('ceramics__preview').innerHTML = i18next.t(translationEn.title57)
    document.getElementById('realty__preview').innerHTML = i18next.t(translationEn.title58)
    document.getElementById('repair__preview').innerHTML = i18next.t(translationEn.title59)
    document.getElementById('beauty__preview').innerHTML = i18next.t(translationEn.title60)
    document.getElementById('education__preview').innerHTML = i18next.t(translationEn.title61)
    document.getElementById('food__preview').innerHTML = i18next.t(translationEn.title62)
    document.getElementById('clothes__preview').innerHTML = i18next.t(translationEn.title63)
    document.getElementById('tarot__preview').innerHTML = i18next.t(translationEn.title64)
    document.getElementById('experts__preview').innerHTML = i18next.t(translationEn.title65)
    document.getElementById('tobacco__preview').innerHTML = i18next.t(translationEn.title66)

    document.getElementById('output67').innerHTML = i18next.t(translationEn.title67)
    document.getElementById('output68').innerHTML = i18next.t(translationEn.title68)

    document.getElementById('output69').innerHTML = i18next.t(translationEn.title69)
    document.getElementById('output70').innerHTML = i18next.t(translationEn.title70)

    document.getElementById('output71').innerHTML = i18next.t(translationEn.title71)
    document.getElementById('output72').innerHTML = i18next.t(translationEn.title72)
    document.getElementById('output73').innerHTML = i18next.t(translationEn.title73)
    document.getElementById('output74').innerHTML = i18next.t(translationEn.title74)

    document.getElementById('output75').innerHTML = i18next.t(translationEn.title75)
    document.getElementById('output76').innerHTML = i18next.t(translationEn.title76)
    document.getElementById('output77').innerHTML = i18next.t(translationEn.title77)


}

function changeToRu() {
    document.getElementById('output').innerHTML = i18next.t(translationRu.title)
    document.getElementById('output2').innerHTML = i18next.t(translationRu.title2)
    document.getElementById('output3').innerHTML = i18next.t(translationRu.title3)
    document.getElementById('output4').innerHTML = i18next.t(translationRu.title4)
    document.getElementById('output5').innerHTML = i18next.t(translationRu.title5)
    document.getElementById('output6').innerHTML = i18next.t(translationRu.title6)
    document.getElementById('output7').innerHTML = i18next.t(translationRu.title7)

    document.getElementById('output8').innerHTML = i18next.t(translationRu.title8)
    document.getElementById('output9').innerHTML = i18next.t(translationRu.title9)
    document.getElementById('output10').innerHTML = i18next.t(translationRu.title10)
    document.getElementById('output11').innerHTML = i18next.t(translationRu.title11)
    document.getElementById('output12').innerHTML = i18next.t(translationRu.title12)
    document.getElementById('output13').innerHTML = i18next.t(translationRu.title13)
    document.getElementById('output14').innerHTML = i18next.t(translationRu.title14)
    document.getElementById('output15').innerHTML = i18next.t(translationRu.title15)
    document.getElementById('output16').innerHTML = i18next.t(translationRu.title16)
    document.getElementById('output17').innerHTML = i18next.t(translationRu.title17)
    document.getElementById('output18').innerHTML = i18next.t(translationRu.title18)
    document.getElementById('output19').innerHTML = i18next.t(translationRu.title19)

    document.getElementById('output20').innerHTML = i18next.t(translationRu.title20)
    document.getElementById('output21').innerHTML = i18next.t(translationRu.title21)
    document.getElementById('output22').innerHTML = i18next.t(translationRu.title22)

    document.getElementById('output23').innerHTML = i18next.t(translationRu.title23)
    document.getElementById('output24').innerHTML = i18next.t(translationRu.title24)
    document.getElementById('output25').innerHTML = i18next.t(translationRu.title25)
    document.getElementById('output26').innerHTML = i18next.t(translationRu.title26)
    document.getElementById('output27').innerHTML = i18next.t(translationRu.title27)
    document.getElementById('output28').innerHTML = i18next.t(translationRu.title28)
    document.getElementById('output29').innerHTML = i18next.t(translationRu.title29)
    document.getElementById('output30').innerHTML = i18next.t(translationRu.title30)
    document.getElementById('output31').innerHTML = i18next.t(translationRu.title31)
    document.getElementById('output32').innerHTML = i18next.t(translationRu.title32)
    document.getElementById('output33').innerHTML = i18next.t(translationRu.title33)
    document.getElementById('output34').innerHTML = i18next.t(translationRu.title34)
    document.getElementById('output35').innerHTML = i18next.t(translationRu.title35)
    document.getElementById('output36').innerHTML = i18next.t(translationRu.title36)
    document.getElementById('output37').innerHTML = i18next.t(translationRu.title37)
    document.getElementById('output38').innerHTML = i18next.t(translationRu.title38)

    document.getElementById('output39').innerHTML = i18next.t(translationRu.title39)
    document.getElementById('output40').innerHTML = i18next.t(translationRu.title40)
    document.getElementById('output41').innerHTML = i18next.t(translationRu.title41)
    document.getElementById('brandbook__preview').innerHTML = i18next.t(translationRu.title42)
    document.getElementById('web__preview').innerHTML = i18next.t(translationRu.title43)
    document.getElementById('branding__preview').innerHTML = i18next.t(translationRu.title44)
    document.getElementById('logodesign__preview').innerHTML = i18next.t(translationRu.title45)
    document.getElementById('presentation__preview').innerHTML = i18next.t(translationRu.title46)
    document.getElementById('polygraphy__preview').innerHTML = i18next.t(translationRu.title47)
    document.getElementById('signboards__preview').innerHTML = i18next.t(translationRu.title48)
    document.getElementById('social__preview').innerHTML = i18next.t(translationRu.title49)
    document.getElementById('illustrations__preview').innerHTML = i18next.t(translationRu.title50)
    document.getElementById('allowance__preview').innerHTML = i18next.t(translationRu.title51)
    document.getElementById('packaging__preview').innerHTML = i18next.t(translationRu.title52)
    document.getElementById('catalog__preview').innerHTML = i18next.t(translationRu.title53)
    document.getElementById('ad__preview').innerHTML = i18next.t(translationRu.title54)
    document.getElementById('merch__preview').innerHTML = i18next.t(translationRu.title55)
    document.getElementById('cosmetics__preview').innerHTML = i18next.t(translationRu.title56)
    document.getElementById('ceramics__preview').innerHTML = i18next.t(translationRu.title57)
    document.getElementById('realty__preview').innerHTML = i18next.t(translationRu.title58)
    document.getElementById('repair__preview').innerHTML = i18next.t(translationRu.title59)
    document.getElementById('beauty__preview').innerHTML = i18next.t(translationRu.title60)
    document.getElementById('education__preview').innerHTML = i18next.t(translationRu.title61)
    document.getElementById('food__preview').innerHTML = i18next.t(translationRu.title62)
    document.getElementById('clothes__preview').innerHTML = i18next.t(translationRu.title63)
    document.getElementById('tarot__preview').innerHTML = i18next.t(translationRu.title64)
    document.getElementById('experts__preview').innerHTML = i18next.t(translationRu.title65)
    document.getElementById('tobacco__preview').innerHTML = i18next.t(translationRu.title66)

    document.getElementById('output67').innerHTML = i18next.t(translationRu.title67)
    document.getElementById('output68').innerHTML = i18next.t(translationRu.title68)

    document.getElementById('output69').innerHTML = i18next.t(translationRu.title69)
    document.getElementById('output70').innerHTML = i18next.t(translationRu.title70)

    document.getElementById('output71').innerHTML = i18next.t(translationRu.title71)
    document.getElementById('output72').innerHTML = i18next.t(translationRu.title72)
    document.getElementById('output73').innerHTML = i18next.t(translationRu.title73)
    document.getElementById('output74').innerHTML = i18next.t(translationRu.title74)

    document.getElementById('output75').innerHTML = i18next.t(translationRu.title75)
    document.getElementById('output76').innerHTML = i18next.t(translationRu.title76)
    document.getElementById('output77').innerHTML = i18next.t(translationRu.title77)

}


document.getElementById('ru').addEventListener('click', () => changeToRu())
document.getElementById('en').addEventListener('click', () => changeToEng())
