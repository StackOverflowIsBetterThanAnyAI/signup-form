function formatName(name) {
    return name
        .split('-')
        .map(
            (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
        )
        .join('-')
}

function checkValidFirstName() {
    const firstName = document.getElementById('firstName')

    if (/^[a-zäöü\-]+$/i.test(firstName.value)) {
        firstName.style.outline = 'green solid 2px'
        firstName.value = formatName(firstName.value)
    } else firstName.style.outline = 'red solid 2px'
    return /^[a-zäöü\-]+$/i.test(firstName.value)
}

function checkValidLastName() {
    const lastName = document.getElementById('lastName')

    if (/^[a-zäöü\-]+$/i.test(lastName.value)) {
        lastName.style.outline = 'green solid 2px'
        lastName.value = formatName(lastName.value)
    } else lastName.style.outline = 'red solid 2px'
    return /^[a-zäöü\-]+$/i.test(lastName.value)
}

function checkValidEmail() {
    const email = document.getElementById('email')

    if (
        /^[^.\-][a-zA-Z\._\d]+@[a-z]{2,}\.[a-z\-\._]*[a-z]{2,3}$/.test(
            email.value
        )
    )
        email.style.outline = 'green solid 2px'
    else email.style.outline = 'red solid 2px'
    return /^[^.\-][a-zA-Z\._\d]+@[a-z]{2,}\.[a-z\-\._]*[a-z]{2,3}$/.test(
        email.value
    )
}

function checkValidTel() {
    const tel = document.getElementById('phone')

    if (/^[0-9\-\s/]+$/.test(tel.value)) tel.style.outline = 'green solid 2px'
    else tel.style.outline = 'red solid 2px'
    return /^[0-9\-\s/]+$/.test(tel.value)
}

function checkValidPassword() {
    const confirm = document.getElementById('confirmPassword')
    const password = document.getElementById('password')

    if (/^[\S]{8,}$/.test(password.value)) {
        password.style.outline = 'green solid 2px'
        confirm.removeAttribute('disabled')
        confirm.setAttribute('aria-disabled', 'false')
    } else {
        password.style.outline = 'red solid 2px'
        confirm.setAttribute('disabled', true)
        confirm.setAttribute('aria-disabled', 'true')
    }
    return /^[\S]{8,}$/.test(password.value)
}

function checkValidConfirmPassword() {
    const confirm = document.getElementById('confirmPassword')
    const error = document.getElementById('error')
    const password = document.getElementById('password')

    if (confirm.value === password.value) {
        confirm.style.outline = 'green solid 2px'
        error.style.visibility = 'hidden'
    } else {
        confirm.style.outline = 'red solid 2px'
        if (password.value.length > 8) error.style.visibility = 'visible'
    }
    return confirm.value === password.value && password.value.length > 8
}

function resetConfirmPassword() {
    const confirm = document.getElementById('confirmPassword')
    confirm.value = ''
    confirm.style.outline = '#aba9a9 solid 2px'
}

const checkValidForm = () => {
    const submit = document.getElementById('submit')
    const isValid =
        checkValidConfirmPassword() &&
        checkValidEmail() &&
        checkValidFirstName() &&
        checkValidLastName() &&
        checkValidPassword() &&
        checkValidTel()

    if (isValid) {
        submit.removeAttribute('disabled')
        submit.setAttribute('aria-disabled', false)
    } else {
        submit.setAttribute('disabled', true)
        submit.setAttribute('aria-disabled', true)
    }
}
