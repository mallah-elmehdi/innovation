export const dateFormattingTxt = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (date) {
        const day = new Date(date);
        return `${day.getDate()} ${months[day.getMonth()]}`;
    }
    return 'N/A';
};

export const dateFormattingTxtFull = (date) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    if (date) {
        const day = new Date(date);
        return `${day.getDate()} ${months[day.getMonth()]} ${day.getFullYear()}`;
    }
    return 'N/A';
};
