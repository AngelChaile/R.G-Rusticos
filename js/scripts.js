/*!
* Start Bootstrap - Business Casual v7.0.3 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page

/* window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
 */


window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');

    // Verifica si hay elementos antes de intentar acceder a 'classList'
    if (listHoursArray.length > 0) {
        listHoursArray[new Date().getDay()].classList.add('today');
    }
});
