/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Nav = styled.nav`
    height: 70px;
    background:  #12172c;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;

    @media only screen and (max-width: 500px) {
        padding: 0 0.5px;
    }
`

const NavMenu = styled.div`
    display: flex;
    width: 100vw;
    flex: 1;
    margin-left: 15px;
    align-items: center;

    @media only screen and (max-width: 500px) {
        margin-left: 5px;
    }

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        @media only screen and (max-width: 500px) {
            padding: 0 2px;
        }

        img {
            height: 20px;
            color: #040714;
        }

        span {
            font-size: 15px;
            letter-spacing: 1.42px;
            position: relative;
            margin-left: 1.5px;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const Wrap = styled.div`
    display: flex;
    margin-left: auto; 
    margin-right: 0;
    
    @media only screen and (max-width: 500px) {
        a{
            padding: 0 5px;
        }

        span {
            text-indent: -9999px; 
        }
    }
`

const Navbar = () => {
    return (
        <Nav>
            {/* <Logo src="/images/logo.svg" /> */}
            <NavMenu>
                <Link to="/">
                    <a>
                        <img src="/images/home-icon.svg" />
                        <span>Αρχική Σελίδα</span>
                    </a>
                </Link>

                <Wrap>
                    <a>
                        <img src="/images/search-icon.svg" />
                        <span>Αναζήτηση</span>
                    </a>

                    <Link to="/category/Ποδόσφαιρο">
                        <a>
                            <img src="/images/soccer.png" />
                            <span>Ποδόσφαιρο</span>
                        </a>
                    </Link>

                    <Link to="/category/Καλαθοσφαίριση">
                        <a>
                            <img src="/images/basketball.png" />
                            <span>Καλαθοσφαίριση</span>
                        </a>
                    </Link>

                    <Link to="/category/Άλλα">
                        <a>
                            <img src="/images/watchlist-icon.svg" />
                            <span>Άλλα</span>
                        </a>
                    </Link>
                </Wrap>
            </NavMenu>
            {/* <UserImg src="https://media-exp1.licdn.com/dms/image/C4D03AQEAvFhaBxi-eQ/profile-displayphoto-shrink_200_200/0/1603974130110?e=1642032000&v=beta&t=0KdEqQPmlpTPcPOEf1S1EPKX-fabr_mWuqdCJO0BvSY" /> */}
        
        </Nav>
    )
}

export default Navbar