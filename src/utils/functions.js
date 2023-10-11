export const dateFormattingTxt = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (date) {
        const day = new Date(date);
        return `${day.getDate()} ${months[day.getMonth()]}`;
    }
    return 'N/A';
};
