const arr = [1, 2, 3, 2, 1, 4, 5, 4, "hi", "hi", "Hello", "hello", "Hello" ];
const uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (uniqueArr.indexOf(arr[i]) === -1) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr); // [1, 2, 3, 4, 5]



function countVowels(arr) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    arr.forEach(str => {
      for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
          count++;
        }
      }
    });
    return count;
  }

  count = countVowels(arr);
  console.log(count);
  