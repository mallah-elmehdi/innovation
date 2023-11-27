export const dateFormattingTxt = (date) => {
    const months = ['Janv', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];

    if (date) {
        const day = new Date(date);
        return `${day.getDate()} ${months[day.getMonth() - 1]}`;
    }
    return 'N/A';
};

export const dateFormattingTxtFull = (date) => {
    const months = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
    ];

    if (date) {
        const day = new Date(date);
        return `${day.getDate()} ${months[day.getMonth() - 1]} ${day.getFullYear()}`;
    }
    return 'N/A';
};
