let ceros = document.getElementsByClassName('ceros')

for (let i = 0; i < ceros.length; i++) {
  if (ceros[i].textContent == '$ 0' || ceros[i].textContent == '0') {
    ceros[i].style.color = 'dodgerblue'
    ceros[i].style.backgroundColor = 'dodgerblue'
    ceros[i].style.boxShadow = 'none'
  }
}