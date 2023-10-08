
const modalImg = document.getElementById("modal-slider");
const pokedex = document.getElementById("pokedex");
const close_slider = document.getElementById("close-slider");


const listaModal = document.querySelectorAll('#modalPokemon')
const btnPokemon = document.querySelectorAll('#btnPokemon')
const btnCerrar = document.querySelectorAll('#close')



pokedex.addEventListener("click", (e) => {
  e.preventDefault();
  modalImg.classList.add("modal--show");
});

close_slider.addEventListener("click", (e) => {
  e.preventDefault();
  modalImg.classList.remove("modal--show");
});




btnPokemon.forEach((btn, index) => {
  
  btn.addEventListener('click', () => {

    listaModal[index].classList.add("modal--show");
    
   
  });
});




btnCerrar.forEach((btn, index) => {
  
  btn.addEventListener('click', () => {

    listaModal[index].classList.remove("modal--show");
    
   
  });
});






























