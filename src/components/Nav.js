import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import { Link } from 'react-router-dom'
import Projects from './Projects'



class Nav extends Component{
  render(){
    return(
      <Navbar brand='logo' right>
	      <li><Link to="/"> Home</Link></li>  
        <li><Link to="/Projects"> Projects</Link></li>      
      </Navbar>
    )
  }
}

export default Nav