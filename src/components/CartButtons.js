import React from "react";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { firebaseAuth, useFirebase } from "../Firebase/Firebase";
import cartLogo from "../assets/cartlogo.png";
import { toast } from "react-toastify";

const CartButtons = () => {
  const navigate = useNavigate();
  const { total_items } = useCartContext();
  const { closeSideBar } = useProductsContext();
  const { isLoggedIn } = useFirebase();

  const handleLogout = () => {
    firebaseAuth.signOut().then(() => {
      navigate("/login");
      toast.success("Logged Out");
    });
  };

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSideBar}>
        cart
        <span className="cart-container">
          <div className="cart-btn">
            <img src={cartLogo} alt="" />
          </div>
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {isLoggedIn ? (
<<<<<<< Updated upstream
        <Link onClick={handleLogout} className="cart-btn">
=======
        <Link onClick={handleLogOut} className="cart-btn">
>>>>>>> Stashed changes
          LogOut
          <span className="auth-btn">
            <FaUserMinus />
          </span>
        </Link>
      ) : (
        <Link to="/login" className="cart-btn" onClick={closeSideBar}>
          LogIn
          <span className="auth-btn">
            <FaUserPlus />
          </span>
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    display: flex;
    align-items: center;
    padding: 10px;
    color: goldenrod;
    img {
      width: 30px;
      height: fit-content;
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: 0px;
    right: -15px;
    background: var(--clr-primary-2);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
