export function formatCurrency(value, currency) {
    if (currency === 'IRT') {
        return new Intl.NumberFormat('fa-IR', {
            style: 'decimal',
            currency: 'IRR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 9
        }).format(value);
    } else if (currency === 'USDT') {
        return new Intl.NumberFormat('fa-IR', {
            style: 'decimal',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 9
        }).format(value);
    } else {
        throw new Error('Unsupported currency type');
    }
}