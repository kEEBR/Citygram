import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import Login from "./Login"
class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Header">
          <div>
            <Link to="/Main">
              <img id="Logo" src={Logo} />
            </Link>
          </div>
          <div className="nav-bar">
            <ul>
              <li>
                <Link to="/About">О проекте</Link>
              </li>
              <li>
                <Link to="/NewsMap">Карта</Link>
              </li>
              <li id="Login">
                <Link to="/Login">
                  <span className="percent">Войти</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
