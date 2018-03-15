function dz3_start(){
  var text = document.querySelector('.text');
  text.innerText = text.innerText.replace(/([^a-zA-Zа-яёА-ЯЁ0-9])'|'([^a-zA-Zа-яёА-ЯЁ0-9])/g, '$1\"$2');

  form = document.querySelector('.form1');
  form.addEventListener('submit', subm);
}
function subm(e){

  err('#name', /^([a-zA-ZА-ЯЁа-яё]+)$/, nameerr, e);
  err('#email', /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/, emailerr, e);
  err('#tel', /^(\+7\(\d{3}\)\d{3}\-\d{4})$/, telerr, e);
  err('#text', /[.\S]{5,}/, texterr, e);
}
function err(input, reg, errdiv, e){
  var inp = document.querySelector(input);
  if(!(reg.test(inp.value))){
    e.preventDefault();
    inp.classList.add('inperr');
    form.insertBefore(errdiv, inp.labels[0]);
  } else if(errdiv.parentElement){
    inp.classList.remove('inperr');
    errdiv.parentElement.removeChild(errdiv);
  }
}
