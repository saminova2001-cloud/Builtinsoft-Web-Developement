import React from "react";
import "./Navbar.css";
function Navbar() {
    return (
        <div>
            <div class="pre-nav">
                <div class="pre-navbar-1 a">
                    <div pre-nav>
                        <a href="">SIGN IN</a>
                        <a href="">TRACKINF INFO</a>
                        <a href="">GIFTING</a>
                    </div>
                    <div class="pre-navbar-2">
                        <p>Last Order Dates for Pre-Eid Delivery: International & Nationwide 15 Mar | Karachi 17 Mar</p>
                    </div>
                    <div class="pre-navbar-3">
                        <a href="">WELCOME TO J.</a>
                    </div>
                </div>
            </div>
            <div class="navbar">
                <div class="navbar-up">
                    <div class="navbar-up-left">
                        <img src="flag-of-pakistan.png" alt="" />
                        <p>PK</p>
                    </div>
                    <span>J.</span>
                    <div class="nav-up-right">
                        <p>SEARCH</p>
                        <p>CART</p>
                        <p>PKR</p>
                    </div>
                </div>
                <div class="navbar-down">
                    <a href="">SYNCC</a>
                    <a href="">CAST&CREW</a>
                    <a href="">WOMEN</a>
                    <a href="">MEN</a>
                    <a href="">BOYS & GIRLS</a>
                    <a href="">FRAGRANCES</a>
                    <a href="">MAKEUP</a>
                    <a href="">SKINCARE</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar; 