import React from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';

const Cart = () => {
      return (
            <div className="cart">
                  <div className="close">[close]</div>
                  <h2>Shopping Cart</h2>
                  <div>
                        <CartItem item={{ name: 'Walt Disney', image: 'walt-disney-world.jpg', price: 5, purchaseQuantity: 3 }} />
                        <CartItem item={{ name: 'Universal Studio', image: 'universal-studios.jpg', price: 6, purchaseQuantity: 4 }} />

                        <div className="flex-row space-between">
                              <strong>Total: $0</strong>
                              {
                                    Auth.loggedIn() ?
                                          <button>
                                                Checkout
                                          </button>
                                          :
                                          <span>(log in to check out)</span>
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Cart;