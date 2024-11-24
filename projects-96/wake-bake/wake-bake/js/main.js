(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')


        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')

        }

    }

})()




// ====================================================================

// document.addEventListener('click', function (event) {  // Слушаем клики по всему документу

//     // Находим элемент, на котором произошел клик, и проверяем, является ли он:
//     const isBurgerIcon = event.target.closest('.burger-icon');
//     const isNavLink = event.target.closest('.nav__link');

//     // Если клик не по иконке бургера и не по ссылке в меню, ничего не делаем
//     if (!isBurgerIcon && !isNavLink) {
//         return;
//     }

//     // Если ширина экрана больше 900px, тоже ничего не делаем
//     if (document.documentElement.clientWidth > 900) {
//         return;
//     }

//     // Находим элемент body
//     const body = document.body;

//     // Проверяем, есть ли у него класс 'body--opened-menu'
//     if (body.classList.contains('body--opened-menu')) {
//         // Если класс есть, удаляем его (закрываем меню)
//         body.classList.remove('body--opened-menu');
//     } else {
//         // Если класса нет, добавляем его (открываем меню)
//         body.classList.add('body--opened-menu');
//     }
// });