import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import g from '../Assets/general.gif'
import b from '../Assets/business.gif'
import e from '../Assets/entertainment.gif'
import h from '../Assets/health.gif'
import sci from '../Assets/science.gif'
import s from '../Assets/sports.gif'
import t from '../Assets/technology.gif'
import gw from '../Assets/general_white.gif'
import bw from '../Assets/business_white.gif'
import ew from '../Assets/entertainment_white.gif'
import hw from '../Assets/health_white.gif'
import sciw from '../Assets/science_white.gif'
import sw from '../Assets/sports_white.gif'
import tw from '../Assets/technology_white.gif'




const Navbar = (props) => {
  const [logo, setlogo] = useState(g);
  const handlelogo = (category) => {
    if (props.mode === 'dark') {
      selectlogoWhite(category);
    }
    else {
      selectlogo(category);
    }
  }
  const selectlogo = (cate) => {
    switch (cate) {
      case 't': setlogo(t);
        break;
      case 'b': setlogo(b);
        break;
      case 'e': setlogo(e);
        break;
      case 'h': setlogo(h);
        break;
      case 'sci': setlogo(sci);
        break;
      case 's': setlogo(s);
        break;
      case 'g': setlogo(g);
        break;
      default:
        break;
    }

  }

  const selectlogoWhite = (cate) => {
    switch (cate) {
      case 't': setlogo(tw);
        break;
      case 'b': setlogo(bw);
        break;
      case 'e': setlogo(ew);
        break;
      case 'h': setlogo(hw);
        break;
      case 'sci': setlogo(sciw);
        break;
      case 's': setlogo(sw);
        break;
      case 'g': setlogo(gw);
        break;
      default:
        break;
    }

  }

  return (

    <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/about">{props.about}</Link>
        </li> */}
            <li className="nav-item">
              <Link className="nav-link " onClick={() => handlelogo('g')} aria-current="page" to="/">Home</Link></li>
            <li className="nav-item">
              <Link className="nav-link " onClick={() => handlelogo('b')} to="/business">Business</Link></li>
            <li className="nav-item">
              <Link className="nav-link " onClick={() => handlelogo('e')} to="/entertainment">Entertainment</Link></li>
            <li className="nav-item">
              <Link className="nav-link " onClick={() => handlelogo('h')} to="/health">Health</Link></li>
            <li className="nav-item">
              <Link className="nav-link " onClick={() => handlelogo('sci')} to="/science">Science</Link></li>
            <li className="nav-item">
              <Link className="nav-link " onClick={() => handlelogo('s')} to="/sports">Sports</Link></li>
            <li className="nav-item">
              <Link className="nav-link " onClick={() => handlelogo('t')} to="/technology">Technology</Link></li>


          </ul>

          <div className={`form-check form-switch mx-3 my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>  {/* `back ticks`  ===?: ternary operator */}
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};
Navbar.defaultProps = {
  home: "Default Home"
}
export default Navbar
