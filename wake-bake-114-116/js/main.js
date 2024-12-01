(function () {

    // ---Бургер---

    document.addEventListener('click', function (event) {
        const isBurgerIcon = event.target.closest('.burger-icon')
        const isNavLink = event.target.closest('.nav__link')

        if (!isBurgerIcon && !isNavLink) {
            return
        }

        if (document.documentElement.clientWidth > 900) {
            return
        }

        const body = document.body

        if (body.classList.contains('body--opened-menu')) {
            body.classList.remove('body--opened-menu')
        } else {
            body.classList.add('body--opened-menu')

        }
    })


    // ---Модалка---

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }


    //  ---Табы---

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)

        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }

    //  ---Аккордеон---

    const accordeonLists = document.querySelectorAll('.accordeon-list')
    accordeonLists.forEach(el => {
    
        el.addEventListener('click', (e) => {
            const accordeonControl = e.target.closest('.accordeon-list__control')
            if (!accordeonControl) return
    
            const accordeonItem = accordeonControl.parentElement
            const accordeonContent = accordeonControl.nextElementSibling
    
            const allOpenItems = el.querySelectorAll('.accordeon-list__item--opened')
            allOpenItems.forEach(item => {
                if (item !== accordeonItem) {
                    item.classList.remove('accordeon-list__item--opened')
                    item.querySelector('.accordeon-list__content').style.maxHeight = null
                }
            })
    
            accordeonItem.classList.toggle('accordeon-list__item--opened')
    
            if (accordeonItem.classList.contains('accordeon-list__item--opened')) {
                accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px'
            } else {
                accordeonContent.style.maxHeight = null
            }
        })
    
    })

})()




