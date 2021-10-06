let hiraganaLetter = document.querySelector("#hira");
let btn            = document.querySelector("#response");

let hiragana = ['あ', 'い', 'う', 'え', 'お',
                'か', 'き', 'く', 'け', 'こ',
                'さ', 'し', 'す', 'せ', 'そ',
                'た', 'ち', 'つ', 'て', 'と',
                'な', 'に', 'ぬ', 'ね', 'の',
                'は', 'ひ', 'ふ', 'へ', 'ほ',
                'ま', 'み', 'む', 'め', 'も',
                'や', 'ゆ', 'よ',
                'ら', 'り', 'る', 'れ', 'ろ',
                'わ', 'を', 'ん']; 

let romaji = ['a', 'i', 'u', 'e', 'o',
              'ka', 'ki', 'ku', 'ke', 'ko',
              'sa', 'shi', 'su', 'se', 'so',
              'ta', 'chi', 'tsu', 'te', 'to',
              'na', 'ni', 'nu', 'ne', 'no',
              'ha', 'hi', 'fu', 'he', 'ho',
              'ma', 'mi', 'mu', 'me', 'mo',
              'ya', 'yu', 'yo',
              'ra', 'ri', 'ru','re', 'ro',
              'wa', 'wo', 'n']

let randomNumber = parseInt(Math.random() * 46);
let hiraganaSort = hiragana[randomNumber];

hiraganaLetter.innerHTML = hiraganaSort;

btn.addEventListener('click', () => {
    let responseBox = document.querySelector("#romaji").value;
    
    if(responseBox.toLowerCase() === romaji[randomNumber]){
        window.alert("ACERTOU");
        location.reload();
    } else {
        window.alert("ERROU");
        location.reload();
    }
});