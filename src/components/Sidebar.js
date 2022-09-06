import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Sidebar extends Component{
    render()
{
  return (
    <><nav>
    <Link to="/Fizz.js">Fizz</Link><br></br>
    <Link to="/Buzz.js">Buzz</Link><br></br>
    <Link to="/Bazz.js">Bazz</Link><br></br>
    </nav></>
  )
}
}
export default Sidebar
