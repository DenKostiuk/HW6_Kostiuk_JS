let string = prompt('Введите слово');

function getWordInform(string) {
    const words = string.split(" ");
    const result = [];

    words.forEach(function (word) {
        result.push({
            word: word,
            length: word.length,
            isCapitalize: word[0].toUpperCase() === word[0],
        })
    });

    return result;
}

console.log(getWordInform(string));
