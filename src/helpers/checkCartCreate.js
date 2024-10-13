export const checkCartCreate = () => {
    const cartId = localStorage.getItem('cartId');
    const checkoutURL = localStorage.getItem('checkoutURL');

    return { cartId , checkoutURL }
};