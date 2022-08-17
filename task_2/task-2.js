// Задача 2
// https://jsbin.com/deyoteb/edit?html,css,js,output - исправить код таким образом, чтобы при фокусе у инпутов добавлялась красная рамка. Обработка событий должна происходить на formElement.

var formElement = document.forms['formElement'];

formElement.onfocus = function(evt) {
    var activeElement = formElement.querySelector('.focused');
    if (activeElement) {
        activeElement.classList.remove('focused');
    }
    evt.target.classList.add('focused');
};

formElement.addEventListener("focus", formElement.onfocus, true);

formElement.onblur = function(evt) {
    console.log('1')
    var activeElement = formElement.querySelector('.focused');
    if (activeElement) {
        activeElement.classList.remove('focused');
    }
};

formElement.addEventListener("blur", formElement.onblur, true);