import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';
import arrowImgMoblie from '../assets/images/icon-arrow-dark.svg';
import Button from './button';
import NavDropdown from './dropdown';
import { useState } from 'react';
import './mobile-menu.css';

function MobileHeader(){
    const [hamOpen,sethamOpen] = useState(false);

    function toggleham(){
        sethamOpen(!hamOpen);
    };

    return(
            <div id="hamburger_menu">
                <nav id="menu_flex">
                <img id="ham_logo" src={logo}/>
                <img
                    src={hamOpen ? close : hamburger}
                    onClick ={toggleham}
                    id="menu_icon"
                />
                </nav>
                { hamOpen && (
                    <div
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        gap:'20px',
                        alignItems:'center',
                        backgroundColor:'#fff',
                        borderRadius: '2.5lvw',
                        padding:'20px 0'
                    }}>
                    <NavDropdown 
                        dropdownTitle = "Product"
                        dropdownItems={[
                            "Overview",
                            "Pricing", 
                            "Marketplace", 
                            "Features", 
                            "Integrations"]}
                        imgSrc={arrowImgMoblie}
                    />
                    <NavDropdown 
            dropdownTitle = "Company"
            dropdownItems={[
                "About",
                "Team", 
                "Blog", 
                "Careers"
            ]}
            imgSrc={arrowImgMoblie}
                />
            <NavDropdown 
            dropdownTitle = "Connect"
            dropdownItems={[
                "Contact",
                "Newsletter", 
                "LinkedIn"
            ]}
            imgSrc={arrowImgMoblie}
                />
                <hr></hr>
                <a href="#" id="ham_login">Login</a>
                <Button text='Sign Up'/>
                    </div>
                )

                }
            </div>
    )
}


export default MobileHeader;