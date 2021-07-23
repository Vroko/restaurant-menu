const addItem = () => {
    // Get form inputs
    const name = document.querySelector('#name').value || 'Mysterious food'
    const link = document.querySelector('#link').value || 'none'
    const imgURL = document.querySelector('#img').value || 'none'
    const description = document.querySelector('#description').value || 'No description'
    firebase.database().ref('/menu').push({
        name: name,
        link: link,
        imgURL: imgURL,
        description: description
    })
    displayNotification('Your food has been successfully saved to our database', 'success')
}

const displayNotification = (msg, type) => {
    const alertDiv = document.createElement('div')
    alertDiv.className = `notification is-${type} is-light`
    const alertBtn = document.createElement('button')
    alertBtn.className = 'delete'
    alertBtn.addEventListener('click', () => {
        alertDiv.parentNode.removeChild(alertDiv)
    })
    const alertText = document.createElement('p')
    alertText.className = 'subtitle'
    alertText.innerHTML = msg
    alertDiv.appendChild(alertBtn)
    alertDiv.appendChild(alertText)
    document.querySelector('body').prepend(alertDiv)
}