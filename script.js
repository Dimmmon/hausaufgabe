//Write a function to check if symbols is uppercase or lowercase.
// It might be useful to look into ASCII symbols table for this task.

const str = "HeTllo World !!!  ";

console.log(checkUppercaseOrLowercase(str));

function checkUppercaseOrLowercase(str) {
  array = [];

  for (let i = 0; i < str.length; i++) {
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (uppercase.test(str.charAt(i))) {
      array.push("uppercase");
    }

    if (lowercase.test(str.charAt(i))) {
      array.push("lowercase");
    }
  }
  return array;
}
