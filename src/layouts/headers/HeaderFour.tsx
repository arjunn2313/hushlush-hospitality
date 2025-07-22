 
 
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import useSticky from "../../hooks/use-sticky";
import { Link } from "react-router-dom";

const HeaderFour = () => {

  const { sticky } = useSticky()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add or remove the class on body depending on isOpen
    if (isOpen) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }

    // Optional: Cleanup on component unmount
    return () => {
      document.body.classList.remove("mobile-menu-visible");
    };
  }, [isOpen]);



  return (
    <>
      <header className={`main-header ${sticky ? 'fixed-header' : ''}`}>
        <div className="header-nav">
          <div className="logo-box">
            <figure className="logo"><Link to="/"><img src="assets/images/logo-4.png" alt="" /></Link></figure>
          </div>
          <div className="menu-area">
            <div className="mobile-nav-toggler" onClick={() => setIsOpen(true)}>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                <NavMenu />
              </div>
            </nav>
          </div>
          <div className="btn-box">
            <Link to="/contact" className="primary-btn one gradient-bg white-color"><span>Contact Us</span><i className="icon-1 gradient-color"></i></Link>
          </div>
        </div>

        <div className="sticky-header">
          <div className="header-nav">
            <div className="logo-box">
              <figure className="logo"><Link to="/"><img src="assets/images/logo-4.png" alt="" /></Link></figure>
            </div>
            <div className="menu-area">
              <nav className="main-menu">
                <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                  <NavMenu />
                </div>
              </nav>
            </div>
            <div className="btn-box">
              <Link to="/contact" className="primary-btn one gradient-bg white-color"><span>Contact Us</span><i className="icon-1 gradient-color"></i></Link>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  );
};

export default HeaderFour;