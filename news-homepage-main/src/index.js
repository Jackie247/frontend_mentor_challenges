const hamburgerBtn = document.getElementById('hamburger')
const hamburgerExitBtn = document.getElementById('hamburger-exit')
const sidebar = document.getElementById('sidebar')

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hidden')
    hamburgerExitBtn.classList.toggle('hidden')
    sidebar.classList.toggle('active')
    document.getElementById('backdrop').classList.toggle('hidden');
})

hamburgerExitBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hidden')
    hamburgerExitBtn.classList.toggle('hidden')
    sidebar.classList.toggle('active')
    document.getElementById('backdrop').classList.toggle('hidden');
})