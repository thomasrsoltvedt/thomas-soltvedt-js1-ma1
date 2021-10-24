// question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

// question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3
heading.style.fontSize = "2em";

// question 4
heading.classList.add("subheading");

// question 5 
const paragraphs = document.querySelectorAll("p"); 

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// question 6
let resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function listFunction(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

listFunction(cats);

// question 8

// I know this answer is far from right. I figured it would be best to leave it in to show you that I've made a try. I found this one a bit confusing, but I'm sure I'll get it eventually.


let items = "";

function createCats(cats) {
    for (let i = 0; i < createCats.length; i++) {
        items = items + "<h5>" + cats[i].name + "</h5>" + "<p>" + cats[i].age + "</p>";
        return items;
    }
}

const finalHtml = "<div>" + items + "</div>";

console.log(createCats(cats));