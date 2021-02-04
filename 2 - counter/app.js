//начальное значение для счетчика
let count = 0;

//выбор значения и кнопок
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        //проверка на нажатие кнопок
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        //изменение цвета
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count
    });
});