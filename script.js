const messageBlock = document.getElementById ('messageBlock');
const countBtn = document.getElementById('countBtn');
const yourDate = document.getElementById('yourDate');

function countDays () {
    const yourBirthdayStr = yourDate.value;
    const yourBirthdayTimestamp = Date.parse(yourBirthdayStr);
    const currentTimestamp = Date.now();
    const daysDiff = Math.ceil ((yourBirthdayTimestamp - currentTimestamp)/(1000*60*60*24));
    console.log(daysDiff);
    let days;
    if (daysDiff % 10 === 1 && daysDiff % 100 !== 11) {
        days = "день";
    } else if ([2, 3, 4].includes(daysDiff % 10) && ![12, 13, 14].includes(daysDiff % 100)) {
        days = "дня";
    } else {
        days = "дней";
    }
    
    if (isNaN(daysDiff)) {
        messageBlock.innerHTML = "Укажите Ваш день рождения!";
        messageBlock.style.color = 'red';
    } else if (daysDiff === 0) {
        messageBlock.innerHTML = "С днем рождения!";
        messageBlock.style.color = 'green';
    } else if (daysDiff > 0) {
        messageBlock.innerHTML = `До Вашего дня рождения ${daysDiff} ${days}`;
        messageBlock.style.color = 'black';
    } else {
        messageBlock.innerHTML = "Ваш день рождения уже прошел";
    }
};
