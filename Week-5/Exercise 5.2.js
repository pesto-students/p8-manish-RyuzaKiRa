/*
 * Q. Write a function called vowelCount which accepts a string and returns a map where the keys
 * are numbers and the values are the count of the vowels in the string.
*/

//Solution:

function vowelCount(string) {
    let vowels = "aeiou";
    const vowelMap = new Map();
    for (let str of string) {
      if (vowels.includes(str)) {
        if (vowelMap.has(str)) {
          let vowelCount = vowelMap.get(str) + 1;
          vowelMap.set(str, vowelCount);
        } else {
          vowelMap.set(str, 1);
        }
      }
    }
    return vowelMap;
  }
  
  console.log(vowelCount("Hritik Singh"));
  console.log(vowelCount("Pesto Fellowship"));
  console.log(vowelCount("_bcd_fgh_jklmn_pqrst_vwxyz"));
  