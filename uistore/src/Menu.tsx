import React from 'react'
import { Link } from "react-router-dom"
import Icon from './GitHub-Mark-32px.png'

const Menu:React.FC = () =>{
  return(
    <div className="menu-container">
      <div className="menu-title"><Link to="/">UI Store</Link></div>
      <nav className="menu-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/button">Button</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/item">Item</Link></li>
          <li><Link to="/box">Box</Link></li>
          <li><Link to="/Form">Form</Link></li>
        </ul>
      </nav>
      <div className="menu-footer">
        <a href="https://github.com/natsuyuHub" target="blank"><img src={Icon} width="20" alt="GitHub"/></a>
        </div>
    </div>
  )

}

export default Menu