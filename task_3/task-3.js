const getNum = function() {
    number = [];

    while (number.length < 6) {
        let newNum = Math.floor(Math.random() * 10);
        if (number.push(newNum) < 0) {
            number.push(newNum)
        };
    }
    console.log(number)
    return number;
};

const goal = getNum();

const guess = function() {
    let playersNumber = document.querySelector('#player').value;
    let arr = [];

    for (let i = 0; i < 6; i++) {
        let newUserArrElement = parseInt(playersNumber.substr(i, 1));
        arr.push(newUserArrElement);
    }
    check(arr);
}

const check = function(param) {
    let bulls = 0;
    let cows = 0;
    let turns = parseInt(document.querySelector('.turns').innerHTML);

    for (let i = 0; i < 6; i++) {
        if (param[i] == goal[i]) {
            bulls++;
        } else if (goal.indexOf(param[i] >= 0)) {
            cows++;
        }
    }
    turns--;
    document.querySelector('.turns').innerHTML = turns;

    if (turns == 0 || bulls == 6) {
        let status = ' проиграли ';
        if (bulls == 6) {
            status = ' выйграли '
        };
        endGame(param, turns, status);
    }
    goOnRecord(param, bulls, cows);

};

const goOnRecord = function(param, bulls, cows) {
    let table = document.querySelector('.turnsList');
    let newLine = document.createElement('p');

    newLine.innerHTML = '<span class ="guessed">' + param + ' bulls: ' + bulls + '; cows: ' + cows;
    table.appendChild(newLine);
}

const endGame = function(param, turns, status) {
    document.querySelector('.number').innerHTML = goal;
    alert('Вы ' + status + '\r\nЗагаданное число: ' + goal + ' Обновите страницу чтобы начать заново!');
}