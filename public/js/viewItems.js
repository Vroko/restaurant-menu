document.addEventListener('DOMContentLoaded', () => {
    getItems();
})

const getItems = () => {
    const menuRef = firebase.database().ref('/menu');
    menuRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
    })
}