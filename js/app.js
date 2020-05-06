(function(){
    'use strict'
    
    const alem = document.getElementById('alem');
    const conhecimento = document.getElementById('conhecimento');
    const conectados = document.getElementById('conectados');
    const fabricamos = document.getElementById('fabricamos');
    const junteSe = document.getElementById('junteSe');
    const modalAlem = document.getElementById('id01');
    const modalConhecimento = document.getElementById('id02');
    const modalConectados = document.getElementById('id03');
    const modalFabricamos = document.getElementById('id04');
    const modalJunteSe = document.getElementById('id05');
    

    alem.addEventListener('click', ()=>{
        modalAlem.style.display='block';
    });

    conhecimento.addEventListener('click', ()=>{
        modalConhecimento.style.display='block';
    });

    conectados.addEventListener('click', ()=>{
        modalConectados.style.display='block';
    });

    fabricamos.addEventListener('click',()=>{
        modalFabricamos.style.display='block';
    });

    junteSe.addEventListener('click', ()=>{
        modalJunteSe.style.display='block';
    });

    window.onclick = function(event) {
        if (event.target == modalAlem || event.target == modalConhecimento || event.target == modalConectados || event.target == modalFabricamos || event.target == modalJunteSe) {
          modalAlem.style.display = "none";
          modalConhecimento.style.display = "none";
          modalConectados.style.display = "none";
          modalFabricamos.style.display = "none";
          modalJunteSe.style.display = "none";
        }
    };

})()
