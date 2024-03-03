/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", () => {
    // Verificar se todos os campos estão preenchidos
    const inputs = document.querySelectorAll('input[required]');
    const textareas = document.querySelectorAll('textarea[required]');
    let todosPreenchidos = true;

    inputs.forEach(input => {
        if (input.value === '') {
            todosPreenchidos = false;
            // Pode adicionar lógica adicional aqui, por exemplo, realçar o campo não preenchido
        }
    });

    const emailInput = document.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        todosPreenchidos = false;
    }

    textareas.forEach(textarea => {
        if (textarea.value === '') {
            todosPreenchidos = false;
            // Pode adicionar lógica adicional aqui, por exemplo, realçar o campo não preenchido
        }
    });

    // Mudar o botão apenas se todos os campos estiverem preenchidos
    if (todosPreenchidos) {
        btnEnviarLoader.style.display = "block";
        btnEnviar.style.display = "none";
    }
});

setTimeout(() => {
    document.querySelector("#alerta").style.display = "none";
    }, 5000)

