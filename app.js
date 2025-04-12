const toggleElements = document.querySelectorAll('.hidden');
const toggleMenu = document.querySelector('.menu');
toggleMenu.addEventListener('click', () => {
    toggleElements.forEach((element) => {
        console.log(element)
        element.classList.toggle('hidden')
    })
})