function findDuplicates(arrInput) {
  const groupedElements = [];
  // mengelompokkan element yang sama sebagai key, dengan total duplikasinya sebagai value
  for (const el of arrInput) {
    groupedElements[el] = (groupedElements[el] || 0) + 1;
  }

  const duplicates = [];
  // buat array baru untuk menampung key yang valuenya lebih dari 1 (artinya setidaknya punya duplicate/pasangan)
  for (const [key, val] of Object.entries(groupedElements)) {
    if (val > 1) duplicates.push(key);
  }
  console.log(duplicates);
  // kembalikan banyaknya element yang duplicate
  return duplicates.length;
}

const input1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const countDuplicates1 = findDuplicates(input1);
console.log(countDuplicates1);
const input2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const countDuplicates2 = findDuplicates(input2);
console.log(countDuplicates2);
const input3 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
const countDuplicates3 = findDuplicates(input3);
console.log(countDuplicates3);
