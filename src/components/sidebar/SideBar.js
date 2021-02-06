import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";


const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="secondary" onClick={toggle} style={{ color: "#000" }}>
        &times;
      </span>
      <h3>Reactjs TP</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
      
        
        <NavItem>
          <NavLink tag={Link} to={"/tp1"}>
            <FontAwesomeIcon icon={faCopy} className="mr-2" />
            TP1 ->
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/tp2"}>
            <FontAwesomeIcon icon={faCopy} className="mr-2" />
             TP2 ->
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/tp3"}>
            <FontAwesomeIcon icon={faCopy} className="mr-2" />
           TP3 ->
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/tp4"}>
            <FontAwesomeIcon icon={faCopy} className="mr-2" />
             TP4 ->
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
