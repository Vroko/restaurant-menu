const LIMIT_CHAR = 150

const addItem = () => {
    // Get form inputs
    const name = document.querySelector('#name').value || 'Mysterious food'
    const link = document.querySelector('#link').value || 'none'
    const imgURL = document.querySelector('#img').value || 'none'
    const description = document.querySelector('#description').value || 'No description'

    if (description.length > LIMIT_CHAR) {
        displayNotification(`Your description is too long! Please reduce to <b>${LIMIT_CHAR}</b> characters.`, 'danger')
    }
    else if (!validURL(link)) {
        displayNotification(`You have an invalid link for your food's link. Please try again.`, 'danger')
    }
    else if (!validURL(imgURL)) {
        displayNotification(`You have an invalid link for your food's image URL. Please try again.`, 'danger')
    }
    else {
        firebase.database().ref('/menu').push({
            name: name,
            link: link,
            imgURL: imgURL,
            description: description
        })
        displayNotification('Your food has been successfully saved to our database', 'success')
    }
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

// From https://stackoverflow.com/a/5717133
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}