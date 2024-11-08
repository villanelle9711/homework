const modal = document.querySelector('.modal')
const btn = document.querySelector('.open-modal')
const x = document.querySelector('.close-modal')

btn.addEventListener('click', () => {
    modal.style.display = 'block'
})

x.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
})