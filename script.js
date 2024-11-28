const btnctrl=document.querySelector('.btn')
const sidebar=document.querySelector('.sidebar')

btnctrl.addEventListener('click',function(){
    sidebar.classList.toggle('show')
    btnctrl.classList.toggle('open')
});