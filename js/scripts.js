$(function () {
    var releaseDate = '02/20/2026 07:07:07';

    $('#timer').countdown({
        date: releaseDate, //Website release date: February 20, 2026
        offset: +2,
        day: 'Day',
        days: 'Days'
    }, function () {
    });
});