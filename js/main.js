

let menuBtn = document.querySelector(".menu--btn");
let menu = document.querySelector(".img-menu");
let cerrar = document.querySelector(".img-cerrar");
let navbar = document.getElementById("navbar"); /* puede ser tambien con la clase como lo de arriba */


/****Hacemos que se cambien los iconos del menu y cerrar menu al presionar los icon*****/
menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
    document.querySelector(".img-menu").style.display = "none";
    document.querySelector(".img-cerrar").style.display = "block";
    
});

cerrar.addEventListener("click", function () {
    navbar.classList.remove("active");
    document.querySelector(".img-menu").style.display = "block";
    document.querySelector(".img-cerrar").style.display = "none";
});


/****cambiamos el icono del cerrar menu a menu al hacer click el navbar ****/
navbar.addEventListener("click", function() {
    document.querySelector(".img-cerrar").style.display="none";
    document.querySelector(".img-menu").style.display = "block";
});


     /*******Formulario de registro*********/
/* Hacemos aparecer el login dando click en el logo */
document.querySelector("#login-btn").onclick = () => {
    document.querySelector(".login-form-container").classList.toggle("active");
}
/* Sacamos el formulario en la pantalla*/
document.querySelector("#close-login-form").onclick = () => {
    document.querySelector(".login-form-container").classList.remove("active");
}

/***Si el scroll es mayor que 0 activa la classe header que tiene el box-sadow */
window.onscroll = () => {
    if(window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
    navbar.classList.remove("active");
};

window.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
   
};

/********Movimiento del home-parallax ********/
document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll(".home-parallax").forEach(elm => {
      let speed = elm.getAttribute("data-speed");
      let x =  (window.innerWidth - e.pageX * speed) /90;
      let y =  (window.innerHeight - e.pageY * speed) /90;
      elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
};

document.querySelector(".home").onmouseleave = () => {
    document.querySelectorAll(".home-parallax").forEach(elm => {
      elm.style.transform = `translateX(0px) translateY(0px)`;
    });
};
