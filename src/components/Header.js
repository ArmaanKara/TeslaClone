import React from 'react'
import styled from 'styled-components';
 import CloseIcon from '@material-ui/icons/Close';

function Header() {
    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="tesla logo" />
            </a>
            <Menu>
                <a href="/">Model S</a> 
                <a href="/">Model 3</a> 
                <a href="/">Model X</a> 
                <a href="/">Model Y</a> 
                <a href="/">Solar Roof</a>  
                <a href="/">Solar Panel</a> 
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Account</a>
                <a href="/">Menu</a>
                <CustomMenuIcon >
                    Menu
                </CustomMenuIcon>
            </RightMenu>
            <MenuNav>
                <CloseWrapper>
                    <CustomClose />
                </CloseWrapper>
                {/* <i className="fas fa-times" id="close-button"></i> */}
                <li><a href="/">Model S</a></li>
                <li><a href="/">Model 3</a></li>
                <li><a href="/">Model X</a></li>
                <li><a href="/">Model Y</a></li>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-in</a></li>
                <li><a href="/">Test Drive</a></li>
            </MenuNav>
        </Container>
    )
}

export default Header;


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
    top:0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    flex: 1;
    align-items: center;
   a {
       font-weight: 600;
       text-transform: uppercase;
       padding: 0 0.5rem;
       flex-wrap: nowrap
   }

   @media(max-width: 1100px){
       display: none;
   }
`

const RightMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a{
       font-weight: 600;
       text-transform: uppercase;
       padding: 0 0.5rem;
       flex-wrap: nowrap
    }
`

const CustomMenuIcon = styled.div`
    cursor: pointer;

`
const MenuNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    color: #181B21;
    
    /* #close-button{
       display: flex;
       justify-content: flex-end;
       font-size: 1.2rem;
       opacity: 0.8;
    } */

    li{
        padding: 15px 15px;
        a{
            font-weight: 550;
        }
    }

    li:hover{
        background-color: lightgray;
        border-radius: 100px;
        
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`