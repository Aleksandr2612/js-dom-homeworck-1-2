// №1

// const button = document.querySelector('.button');

// button.addEventListener("click", function(e) {
//     console.log('Событие клика, 1-ый способ!');
// });



// button.onclick = function() {
//     console.log("Событие клика, 2-ой способ!");
// }



// button.addEventListener("click", showConsole);

// function showConsole() {
//     console.log('Событие клика, 3-ий способ!');
//     button.removeEventListener("click", showConsole);
// }

// button.addEventListener("click", showConsole);



// №2


// const newButton = document.querySelector('.new-button');

// newButton.addEventListener("dblclick", function(event) {
//     console.log(`Нажата кнопка ${event.which} (двойной клик)`);
// });


// №3 
// const mouse = document.querySelector('.block-for-mouse');

// function showConsole(event) {
//     console.log(`Координаты оси X: ${event.clientX}`);
//     console.log(`Координаты оси Y: ${event.clientY}`);
// }

// mouse.addEventListener("click", showConsole);



// №4

// window.addEventListener('scroll', function(event) {
//     console.log(`Координаты прокрутки оси Y: ${scrollY}px`);
//     console.log(`Координаты прокрутки оси X:${scrollX}px`);
// });