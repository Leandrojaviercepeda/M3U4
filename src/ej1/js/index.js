const changeMainBackgroundColor = (id, color) => {
    const main = document.getElementById("main");
    switch (id) {
        case 1:
            main.style = `background-color: ${color} !important;`;
            break;
        case 2:
            main.style = `background-color: ${color} !important;`;
            break;
        case 3:
            main.style = `background-color: ${color} !important;`;
            break;
    }
}

var cardBody = document.getElementById('card-body');
cardBody.addEventListener('click' , changeMainBackgroundColor);
