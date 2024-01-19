let divElement = document.createElement('div');
divElement.classList.add('wraper')
document.getElementById("div_1").append(divElement)

let imgElement = document.createElement('img');
imgElement.src = "https://picsum.photos/200/301";
imgElement.alt = "image"
document.getElementById("div_1").appendChild(imgElement);

let titleElement = document.createElement('h2')
titleElement.classList.add('title')
titleElement.textContent = 'Image Title';
titleElement.style.fontSize = '30px'
titleElement.style.color = 'red'
document.getElementById("div_1").appendChild(titleElement)


let divElements = document.querySelectorAll(".div_1")

divElements.forEach(function(item){
let titleSection = document.createElement('p');
titleSection.textContent = 'Hello';
titleSection.classList.add('title');
item.appendChild(titleSection)

})
