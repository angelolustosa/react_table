export const productsGenerator = (quantity = 5, callback) => {
    if (callback) return Array.from({ length: quantity }, callback);

    // if no given callback, retrun default product format.
    return (
        Array.from({ length: quantity }, (value, index) => ({
            id: index,
            name: `Item name ${index}`,
            price: 2100 + index
        }))
    );
};