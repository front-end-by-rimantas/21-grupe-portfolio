function age(year) {
    let msg = '';
    if (year < 2000) {
        msg = 'Uzeik';
    } else {
        msg = 'Palauk';
    }
    return msg;
}

export { age }