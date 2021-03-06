import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component { 
    constructor (props) {
        super(props);
        this.state = {active: false};
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({overlay: !this.state.overlay});
        document.body.style.backgroundColor = "red"
    }

    render () {
        let icon;
        if (this.state.overlay) {   
            icon = <FontAwesomeIcon className='fa-times' icon={faTimes} />
        } else {
            icon = <FontAwesomeIcon className ='fa-bars' icon={faBars} />
        }

        return (
            <>
            <div className={` overlay ${this.state.overlay && 'overlay-active'} `}></div>
     
            <div className='header'>
                <button className='toggle' onClick={() => this.toggleNav()}> 
                    {icon}
                </button>
                <h1>Wendell Horton</h1>           
            </div>
            
            <nav className={` nav ${this.state.overlay && 'overlay-active'} `}>
                <Link className='nav-item' to='/' onClick={() => this.toggleNav()}>Introduction</Link>
                <Link className='nav-item' to='/prologue' onClick={() => this.toggleNav()}>Prologue</Link>
                <Link className='nav-item' to='/chapter1' onClick={() => this.toggleNav()}>Chapter 1</Link>
                <Link className='nav-item' to='/chapter2' onClick={() => this.toggleNav()}>Chapter 2</Link>
                <Link className='nav-item' to='/chapter3' onClick={() => this.toggleNav()}>Chapter 3</Link>
                <Link className='nav-item' to='/chapter4' onClick={() => this.toggleNav()}>Chapter 4</Link>
                <Link className='nav-item' to='/chapter5' onClick={() => this.toggleNav()}>Chapter 5</Link>
                <Link className='nav-item' to='/chapter6' onClick={() => this.toggleNav()}>Chapter 6</Link>
                <Link className='nav-item' to='/chapter7' onClick={() => this.toggleNav()}>Chapter 7</Link>
                <Link className='nav-item' to='/chapter8' onClick={() => this.toggleNav()}>Chapter 8</Link>
                <Link className='nav-item' to='/chapter9' onClick={() => this.toggleNav()}>Chapter 9</Link>
                <Link className='nav-item' to='/chapter10' onClick={() => this.toggleNav()}>Chapter 10</Link>
                <Link className='nav-item' to='/chapter11' onClick={() => this.toggleNav()}>Chapter 11</Link>
            </nav>

            
            </>  

        )

    }
}

/* 
import 'font-awesome/css/font-awesome.min.css'; 
<i className={` ${!this.state.overlay && 'fa fa-bars'}  ${this.state.overlay && 'fa fa-times'} ${this.state.overlay && 'overlay-active'}`}></i>


*/