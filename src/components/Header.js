import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { selectProducts } from '../features/Products/ProductsSlice'

function Header() {
    const [menuStatus, setMenuStatus] = useState(false);
    const products = useSelector(selectProducts)

    return (
        <div>
            <Container>
                <a href="/">
                    <img className="tesla-logo" src="/images/logo.svg" alt="tesla logo" width="110px" height="18px"/>
                </a>
                <Menu>
                    {products && products.map((product, index) => 
                    <a key={index} href="/">{product}</a>
                    )} 
                </Menu>
                <RightMenu>
                    <a href="/">Shop</a>
                    <a href="/">Account</a>
                    <RightMenuBttn onClick={() => setMenuStatus(true)}>
                        <a  href onClick={() => setMenuStatus(false)}>Menu</a>
                    </RightMenuBttn>
                </RightMenu>
                <CustomMenuIcon onClick={() => setMenuStatus(true)}>
                        Menu
                    </CustomMenuIcon>
                <MenuNav show={menuStatus}>
                    <CloseWrapper onClick={() => setMenuStatus(false)}>
                        <CustomClose />
                    </CloseWrapper>
                    {products && products.map((product, index) => 
                    <li><a key={index} href="/">{product}</a></li>
                    )} 
                    <li><a href="/">Existing Inventory</a></li>
                    <li><a href="/">Used Inventory</a></li>
                    <li><a href="/">Trade-in</a></li>
                    <li><a href="/">Test Drive</a></li>
                    <li><a href="/">Powerwall</a></li>
                    <li><a href="/">Commercial Energy</a></li>
                    <li><a href="/">Utilities</a></li>
                    <li><a href="/">Charging</a></li>
                    <li><a href="/">Find Us</a></li>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">Investor Relations</a></li>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Account</a></li>
                    <li><a href="/">
                        More <i className="fas fa-chevron-right"></i>
                    </a></li>
                    <li><a href="/">
                        United States
                        <br/>
                        <p>English</p>
                    </a></li>

                </MenuNav>
            </Container>
        </div>
    )
}

export default Header;



const Container = styled.div`
    min-height: 150px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
    top:0;
    left: 0;
    right: 0;
    z-index: 1;
    
    
    .tesla-logo{
        padding-left: 0.7rem;
    }

    
`

const Menu = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    flex: 1;
    align-items: center;
   a {
       font-weight: 600;
       padding: 0 0.5rem;
       flex-wrap: nowrap;
       padding:10px;
       margin: 4px;
   }

   a:hover{
        background-color: lightgray;
        border-radius: 100px;
        transition: 300ms;
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
       padding: 0 0.5rem;
       flex-wrap: nowrap;
       padding:10px;
       margin: 4px;
    }

    a:hover{
        background-color: lightgray;
        border-radius: 100px;
        transition: 300ms;
    }

    @media(max-width: 1100px){
       display: none;
   }
`

const RightMenuBttn=styled.div`

`

const CustomMenuIcon = styled.div`
    cursor: pointer;
    @media(min-width: 1100px){
       display: none;
   }
   font-weight: 600;
`
const MenuNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 75;
    list-style: none;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    color: #181B21;
    transform: ${props => props.show ? 'transalteX(0)' : 'translateX(100%)'};
    transition: transform 0.4s ease-in-out;

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

    .fa-chevron-right{
        display: inline-flex;
        margin-left: 11rem;
        font-size: smaller;
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`