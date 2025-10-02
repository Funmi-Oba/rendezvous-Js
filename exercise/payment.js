class Payment{
    constructor(){

        
    }
    totalAmount(amount){
        return `Total amount to be paid is $${amount}`;
    }
    discountedAmount(amount, discount){
    }
}
export default Payment;
export const paymentService = () => {
    console.log("PaymentService initialized");
}
export const calculateDiscount = (amount, discount) => {    
    console.log(`Calculating discounted amount for $${amount} with ${discount}% discount`);
    const discountedAmount = amount - (amount * discount) / 100;
    console.log(`Discounted amount is $${discountedAmount}`);
    return discountedAmount;
}
export const processPayment = (amount) => {
    console.log(`Processing payment of $${amount}`);
    console.log("Payment processed successfully");
    return true;
}
