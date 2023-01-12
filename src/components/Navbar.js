import React from 'react'
import styled from "styled-components";
import Menu from "./menu";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavMenu=styled.div`
  display: flex;
  align-items: center;
`;

const Navbar= () => {
    return (
        <Nav>
            <NavMenu>
                <Menu/>
            </NavMenu>
        </Nav>
    )
}

export default Navbar;