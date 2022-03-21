/*
Task 1

Given a sentence with multiple lowercase words separated by spaces,
write a Javascript code that finds the longest word in the sentence.
If there are multiple words of the same length, choose one that has the highest number of vowels.
Ignore any character in the sentence that is not a letter or a space. Find the most efficient way to achieve this.
*/

let sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

function findLongestWordLength(sentence) {
    let array = sentence.split(" ");
    array.sort((a, b) => b.length - a.length);
    return array[0];
}

console.log(findLongestWordLength(sentence))

///////////////////////////////////////////////////////////////////////////////////////////

/*
Task 2
*/
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
console.log(y);

function firstParagraph() {
    document.getElementById("demo").innerHTML = ""
    document.getElementById("demo").innerHTML = y[0].innerText;
}

function secondParagraph() {
    document.getElementById("demo").innerHTML = ""
    document.getElementById("demo").innerHTML = y[1].innerText;
}