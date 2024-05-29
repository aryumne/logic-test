function findSymbols(word) {
  // buat regex untuk mengembalikan negasi dari alfa numerik (noted: symbol terakhir dan tanda penghubung tidak termasuk dalam pengencekan)
  const symbolRegex = /(?<!^)[^a-zA-Z0-9\s-](?<![,.?!])|^[^a-zA-Z0-9\s-]/g;

  // kompare string dengan regex
  const symbols = word.match(symbolRegex) || [];

  // jika mengandung symbols maka kembalikan true, sebaliknya kebalikan false
  return symbols.length > 0;
}

function checkByWord(txtInput) {
  // konversi string "kalimat" ke array "kata" dengan spasi sebagai pemisah
  const words = txtInput.split(" ");

  // check setiap kata mengandung symbol atau tidak, jika tidak tambahkan counter
  const counterOfCleanWord = words.reduce((acc, word) => {
    !findSymbols(word) && acc++;
    return acc;
  }, 0);
  // kembalikan total kata yang tidak mengandung symbol
  return counterOfCleanWord;
}

const string1 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
const countCleanWord1 = checkByWord(string1);
console.log(countCleanWord1);
const string2 = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const countCleanWord2 = checkByWord(string2);
console.log(countCleanWord2);
const string3 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";
const countCleanWord3 = checkByWord(string3);
console.log(countCleanWord3);
