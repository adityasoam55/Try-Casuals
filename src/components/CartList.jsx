import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { getProductDetails } from './api';
import CartRow from './CartRow';

function CartList({ cart, updateCart }) {
  const [cartList, setCartList] = useState([]);
  const [localCart, setLocalCart] = useState(cart);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  useEffect(() => {
    const productIds = Object.keys(cart);
    const promises = productIds.map(id => getProductDetails(id));
    
    Promise.all(promises).then(resp => {
      setCartList(resp);
      setLoading(false);
    });
  }, [cart]);

  const calculateTotal = () => {
    return cartList.reduce((sum, product) => {
      return sum + product.price * (localCart[product.id] || 0);
    }, 0);
  };

  const handleChange = (value, productId) => {
    const newLocalCart = { ...localCart, [productId]: Math.max(1, value) };
    setLocalCart(newLocalCart);
  };

  const handleRemove = (productId) => {
    const newCart = { ...localCart };
    delete newCart[productId];
    setLocalCart(newCart);
    updateCart(newCart);
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    // Simulate payment processing
    try {
      // Basic card validation (just checking if fields are filled)
      if (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvc) {
        throw new Error('Please fill in all card details');
      }

      if (cardDetails.cardNumber.length < 12) {
        throw new Error('Card number is too short');
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate random success/failure (90% success rate)
      const isSuccess = Math.random() > 0.1;
      
      if (!isSuccess) {
        throw new Error('Payment failed. Please try again.');
      }

      alert('Payment successful!');
      setLocalCart({});
      updateCart({});
      setCardDetails({ cardNumber: '', expiry: '', cvc: '' });
    } catch (err) {
      setError(err.message);
    }
    setProcessing(false);
  };

  if (loading) return <Loading />;

  const total = calculateTotal();

  return (
    <div className="bg-gray-100 max-w-3xl mx-auto">
      {cartList.length === 0 && (
        <div className="font-medium w-full text-center text-2xl">
          CartList is Empty...
        </div>
      )}
      {cartList.length > 0 && (
        <>
          <div className="bg-gray-400 flex space-x-4 px-4 py-2 max-sm:hidden">
            <span className="pl-24 grow text-center">Products</span>
            <span>Price</span>
            <span className="w-14">Quantity</span>
            <span className="w-14">SubTotal</span>
          </div>
          {cartList.map(product => (
            <CartRow
              key={product.id}
              product={product}
              localCart={localCart}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          ))}
          <div className="px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-medium">
                Total: ${total.toFixed(2)}
              </span>
              <button
                className="bg-gray-400 hover:bg-gray-300 text-black px-2 py-1 rounded-md"
                onClick={() => updateCart(localCart)}
              >
                Update Cart
              </button>
            </div>
            
            {/* Mock Payment Form */}
            <form onSubmit={handlePayment}>
              <div className="space-y-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardChange}
                    placeholder="Card Number"
                    className="w-full p-2 border border-gray-300 rounded"
                    disabled={processing}
                  />
                </div>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleCardChange}
                    placeholder="MM/YY"
                    className="w-full p-2 border border-gray-300 rounded"
                    disabled={processing}
                  />
                  <input
                    type="text"
                    name="cvc"
                    value={cardDetails.cvc}
                    onChange={handleCardChange}
                    placeholder="CVC"
                    className="w-full p-2 border border-gray-300 rounded"
                    disabled={processing}
                  />
                </div>
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <button
                type="submit"
                disabled={processing || total === 0}
                className="w-full bg-gray-400 hover:bg-gray-300 text-black px-4 py-2 rounded-md disabled:bg-gray-400"
              >
                {processing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default CartList;