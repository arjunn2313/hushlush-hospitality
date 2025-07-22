 
 
import NavMenu from "./NavMenu"; 
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import useSticky from "../../hooks/use-sticky";
import { Link } from "react-router-dom";


const HeaderFive = () => {
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
      <header className={`main-header style-four ${sticky ? 'fixed-header' : ''}`}>
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
          <div className="menu-right">
            <div className="mobile-nav-toggler visible" onClick={() => setIsOpen(true)}><img src="assets/images/icons/icon-28.png" alt="" /></div>
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
            <div className="menu-right">
              <div className="mobile-nav-toggler visible" onClick={() => setIsOpen(true)}><img src="assets/images/icons/icon-28.png" alt="" /></div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  );
};

export default HeaderFive;