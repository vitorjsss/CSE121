// adding a text to a html file through js
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// adding an image to a html file through js
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals")
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

// creating a div using js
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// creating a section using js
const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newH2.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);

document.body.appendChild(newSection);