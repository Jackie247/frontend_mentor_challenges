const successScreen = document.querySelector('.success-msg')
const subscribeScreen = document.querySelector('.sign-up-holder')
const emailForm = document.getElementById('email-form')
const dismissBtn = document.getElementById('dismiss')

emailForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const inputField = document.getElementById('email-input')

    if(emailRegex.test(inputField.value)){
        successScreen.classList.toggle('hidden')
        subscribeScreen.classList.toggle('hidden')
    }else{
        alert("Please enter a valid email address")
    }
})

dismissBtn.addEventListener('click', () => {
    subscribeScreen.classList.remove('hidden')
    successScreen.classList.add('hidden')
})


