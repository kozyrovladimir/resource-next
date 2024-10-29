// Считываем значения из .env файла
const yearProductCode: string = process.env.NEXT_PUBLIC_YEAR_PRODUCT_CODE || '';
const monthProductCode: string = process.env.NEXT_PUBLIC_MONTH_PRODUCT_CODE || '';
const month6ProductCode: string = process.env.NEXT_PUBLIC_6MONTH_PRODUCT_CODE || '';

// Определяем перечисление (enum)
export const Products = {
    'year': yearProductCode,
    'month': monthProductCode,
    'month6': month6ProductCode,
}
