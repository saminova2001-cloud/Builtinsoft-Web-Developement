import React from 'react';
import './Pizzahut.css';
import p1 from '../public/sIpz1.png';

function Navbar(){
    
    const navItems = [{
        label: "Delivery",
        path: "#"
    },
    {
        label: "Pickup",
        path: "#"
    },
    {
        label: "Our Menu",
        path: "#"
    },
    {
        label: "Find Your Restaurant",
        path: "#"
    }
]
return(
    <div className="nav-container">
        <div className="pre-nav">
            <img src="/images/pizzahutlogo.webp" alt="Pizza Hut Logo" height="42" />
            <img src={p1} alt="logo" height="42" />
        </div>
        <div className='nav-items'>
            {navItems.map((item, index) =>(
                <>
                <a href="{item.path}">{item.label}</a>
                </>
            ))}
        </div>
        <div className='btn-button'>
            <button className='btn-1'>Login</button>

        </div>
    </div>
)

}

export default Navbar;