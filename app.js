let btn = document.getElementsByClassName('bx');
let main = document.getElementsByClassName('main')[0];

for(i = 0; i < 8; i++){
    btn[i].addEventListener("click" , ()=>{
        main.classList.toggle('active')
    })
}