let valorColor = document.getElementsByClassName("valorColor");

for (let i = 0; i < valorColor.length; i++) {
<<<<<<< HEAD
  if (valorColor[i].textContent <= 0) {
    valorColor[i].style.backgroundColor = "whitesmoke";
    valorColor[i].style.color = "whitesmoke";
    valorColor[i].style.border = "1px solid whitesmoke";
  } else if (valorColor[i].textContent <= 100000) {
    valorColor[i].style.backgroundColor = "whitesmoke";
    valorColor[i].style.color = "dodgerblue";
    valorColor[i].style.border = "1px solid dodgerblue";
=======
  if (valorColor[i].textContent <= 1) {
    valorColor[i].style.backgroundColor = "whitesmoke";
    valorColor[i].style.color = "white";
    valorColor[i].style.border = "1px solid white";
    valorColor[i].textContent = "";
  } else if (valorColor[i].textContent <= 100000) {
    valorColor[i].style.backgroundColor = "white";
    valorColor[i].style.color = "hotpink";
    valorColor[i].style.border = "1px solid hotpink";
>>>>>>> 28a7aa189f53bd818ebd82f25ec5949ed099247e
  } else if (valorColor[i].textContent <= 200000) {
    valorColor[i].style.backgroundColor = "whites";
    valorColor[i].style.color = "dodgerblue";
    valorColor[i].style.border = "1px solid dodgerblue";
  } else if (valorColor[i].textContent <= 500000) {
    valorColor[i].style.backgroundColor = "dodgerblue";
    valorColor[i].style.color = "white";
  } else if (valorColor[i].textContent <= 1000000) {
    valorColor[i].style.backgroundColor = "#0000f0";
    valorColor[i].style.color = "white";
    valorColor[i].style.fontWeight = "bold";
  } else if (valorColor[i].textContent <= 1500000) {
    valorColor[i].style.backgroundColor = "lime";
    valorColor[i].style.color = "rgb(50,50,50)";
    valorColor[i].style.fontWeight = "bold";
  } else if (valorColor[i].textContent <= 2000000) {
    valorColor[i].style.backgroundColor = "deeppink";
    valorColor[i].style.color = "white";
    valorColor[i].style.fontWeight = "bold";
  } else if (valorColor[i].textContent <= 15000000) {
    valorColor[i].style.backgroundColor = "gold";
    valorColor[i].style.color = "rgb(50,50,50)";
  }
}
