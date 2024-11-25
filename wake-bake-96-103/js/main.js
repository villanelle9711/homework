document.addEventListener('click', function (event) {
    const isBurgerIcon = event.target.closest('.burger-icon');
    const isNavLink = event.target.closest('.nav__link');

    if (!isBurgerIcon && !isNavLink) {
        return;
    }

    if (document.documentElement.clientWidth > 900) {
        return;
    }

    const body = document.body;

    if (body.classList.contains('body--opened-menu')) {
        body.classList.remove('body--opened-menu');
    } else {
        body.classList.add('body--opened-menu');

    }
});


// ====================================================================



// (function () {

//     document.addEventListener('click', burgerInit)

//     function burgerInit(e) {

//         const burgerIcon = e.target.closest('.burger-icon')
//         const burgerNavLink = e.target.closest('.nav__link')


//         if (!burgerIcon && !burgerNavLink) return
//         if (document.documentElement.clientWidth > 900) return

//         if (!document.body.classList.contains('body--opened-menu')) {
//             document.body.classList.add('body--opened-menu')
//         } else {
//             document.body.classList.remove('body--opened-menu')

//         }

//     }

// })()