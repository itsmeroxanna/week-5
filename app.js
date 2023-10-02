// program to display text 5 times
const n = 5;

// looping from i = 1 to 10
for (let i = 1; i <= n; i++) {
    console.log(`I'm still learning JavaScript.`);
}

// while loop 
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}


// change css 
const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

changeColor.addEventListener("click", function() {
    text.classList.toggle("change");
});