var login = prompt('Кто пришел?');

if (login === 'Админ') {

    var password = prompt('Пароль?');
    if (password === 'Черный Властелин') {
        console.log('Добро пожаловать!');
    } else if (password === null) {
        alert('Вход отменен');
    } else {        
        alert('Пароль неверен');
    }
    // var password = prompt('Пароль?') ?
    //     password === 'Черный Властелин' : alert('Добро пожаловать!') : alert('Пароль неверен');
    // }
} else if (login === null) {
    alert('Вход отменен');    
} else {
    alert('Я вас не знаю');
};
