let str = "sHiVa PrAsAd ReDdY";
let x = "";
for (i = 0; i < str.length; i++) {
  //   console.log(str[i] == str[i].toUpperCase());
  if (str[i] == str[i].toUpperCase()) {
    //console.log(`${str[i]} is upper case`)
    x += str[i].toLowerCase();
  } else {
    x += str[i].toUpperCase();
    //console.log(`${str[i]} is lower case`)
  }
}
console.log(x);

//converting the string upper case to lower case through functions
function stringConverter(str) {
  let str1 = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      str1 += str[i].toLowerCase();
    } else {
      str1 += str[i].toUpperCase();
    }
  }
  return str1;
}
let op = stringConverter("sHiVa PrAsAd ReDdY");
let op1 = stringConverter("HgFAHkIOmBUyIoNvRInBVk");
console.log(op);
console.log(op1);

let arr = [
  "hello",
  "python",
  "django",
  "welcome",
  "java",
  "end",
  "developer",
  "loser",
];
for (i = 0; i < arr.length; i++) {
  if (arr[i].indexOf("e") == -1) {
    console.log(`e is not available in ${arr[i]}`);
  } else {
    console.log(
      `e is available in ${arr[i]}  at index of ${arr[i].indexOf("e")} `
    );
  }
}
console.log(arr[0].indexOf("e"));
console.log(arr[1].indexOf("e"));
console.log(arr[2].indexOf("e"));
console.log(arr[3].indexOf("e"));
console.log(arr[4].indexOf("e"));
console.log(arr[5].indexOf("e"));
console.log(arr[6].indexOf("e"));
console.log(arr[7].indexOf("e"));

//task
let arr1 = ["html ", "css ", "JAVASCRIPT ", "react ", "ANGULAR "];
let arr2 = [""];
for (i = 0; i < arr1.length; i++) {
  if (arr1[i] == arr1[i].toLowerCase()) {
    arr2 += arr1[i].toUpperCase();
  } else {
    arr2 += arr1[i].toLowerCase();
  }
}
console.log(arr2);
