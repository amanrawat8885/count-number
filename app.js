const btn1 = document.getElementById("dec");
const btn2 = document.getElementById("reset");
const btn3 = document.getElementById("inc");
const h1 = document.querySelector("h1");

let count = "";
btn1.addEventListener("click", () => {
    count--;
    h1.textContent = count;
    save();
});

btn2.addEventListener("click", () => {
    count = 0;
    h1.textContent = 0;
    count
    save();
});

btn3.addEventListener("click", () => {
    count++;
    h1.textContent = count;
    save();
});

// save locastorage 
function save() {
    localStorage.setItem("data1", h1.innerHTML);
}

function show() {
    h1.innerHTML = localStorage.getItem("data1");
}

show();