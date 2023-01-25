export const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
    }, 0)
    return total
}