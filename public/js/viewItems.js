let cardsData = "";

document.addEventListener('DOMContentLoaded', () => {
    getItems();
    var app = new Vue({
        el: '#app',
        data: {
          cardData: cardsData
        }
      })
    console.log(cardsData);
})

const getItems = () => {
    const menuRef = firebase.database().ref('/menu');
    menuRef.on('value', (snapshot) => {
        const data = snapshot.val();
        cardsData = data;
    })
}

