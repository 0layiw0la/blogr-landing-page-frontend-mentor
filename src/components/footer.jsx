import logo from '../assets/images/logo.svg';
import './footer.css';

function Footer() {
    return (
        <section id="final_section">
        <div id="footer">

            <img id="footer_logo"src={logo} />

            <div class="options_flex">
                <span class="footer_header" >Product</span>
                <div class="footer_options">
                    <a href ="#">Overview</a>
                    <a href ="#">Pricing</a>
                    <a href ="#">Marketplace</a>
                    <a href ="#">Features</a>
                    <a href ="#">Integrations</a>
                </div>
            </div>

            <div class="options_flex">
                <span class="footer_header" >Company</span>
                <div class="footer_options">
                    <a href ="#">About</a>
                    <a href ="#">Team</a>
                    <a href ="#">Blog</a>
                    <a href ="#">Careers</a>
                </div>
            </div>

            <div class="options_flex">
                <span class="footer_header" >Connect</span>
                <div class="footer_options">
                    <a href ="#">Contact</a>
                    <a href ="#">Newsletter</a>
                    <a href ="#">LinkedIn</a>
                </div>
            </div>
      </div>
      </section>
    )
}

export default Footer;