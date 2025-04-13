//toggling the responsive navbar
const toggleElements = document.querySelectorAll('.hidden');
const toggleMenu = document.querySelector('.menu');
toggleMenu.addEventListener('click', () => {
    toggleElements.forEach((element) => {
        console.log(element)
        element.classList.toggle('hidden')
    })
})

//toggling the modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModal = document.querySelector('.show-modal');

//opening the modal
openModal.addEventListener('click', () => {
    modal.classList.remove('hide-modal');
    overlay.classList.remove('hide-modal')
});

//closing the modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hide-modal');
    overlay.classList.add('hide-modal')
})