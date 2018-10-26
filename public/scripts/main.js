function toDatetimeLocal(date) {
    ten = function(i) {
            return (i < 10 ? '0' : '') + i;
        },
        YYYY = date.getFullYear(),
        MM = ten(date.getMonth() + 1),
        DD = ten(date.getDate()),
        HH = ten(date.getHours()),
        II = ten(date.getMinutes()),
        SS = ten(date.getSeconds());

    return YYYY + '-' + MM + '-' + DD + 'T' +
        HH + ':' + II + ':' + SS;
};

function fromDateTimeLocal(BST) {
    return new Date(BST).toISOString().slice(0, 16) === BST ?
        // if it is, it needs to be removed
        function() {
            return new Date(
                this.getTime() +
                (this.getTimezoneOffset() * 60000)
            ).toISOString();
        }
};
