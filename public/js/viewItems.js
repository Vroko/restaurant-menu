let cardsData = "";

document.addEventListener('DOMContentLoaded', () => {
    getItems();
    
})

const getItems = () => {
    const menuRef = firebase.database().ref('/menu');
    menuRef.on('value', (snapshot) => {
        const data = snapshot.val();
        cardsData = data;
        
        var app = new Vue({
        el: '#app',
        data: {
            cardData: cardsData,
          message: "hello"
        }
      })
    })
}

