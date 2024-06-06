import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoDark from "public/images/logo-two.png";
import LogoLight from "public/images/logo.png";
import LogoTwoDark from "public/images/logo-three.png";
import LogoTwoLight from "public/images/busybarlogo.png";
import LogoThreeDark from "public/images/logo-light.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const closeNav = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " nav__menu-link--dropdown-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // conditional classes for header
  const defaultClasses = "header";

  let logoSrc = LogoLight;
  let logoSrcMobile = LogoLight;

  const getPageHeaderClass = (pathname: string): string => {
    switch (pathname) {
      case "/":
        logoSrc = LogoTwoLight;
        logoSrcMobile = LogoTwoLight;
        return "header--light header-two";
      case "/index-light":
        return "";
      case "/index-two":
        logoSrc = LogoTwoDark;
        logoSrcMobile = LogoTwoDark;
        return "header--dark header-two";
      case "/index-two-light":
        logoSrc = LogoTwoLight;
        logoSrcMobile = LogoTwoLight;
        return "header--light header-two";
      case "/index-three":
        logoSrc = LogoThreeDark;
        logoSrcMobile = LogoThreeDark;
        return "header--dark";
      case "/index-three-light":
        return "header--light";
      default:
        return "";
    }
  };

  const router = useRouter();
  const headerClass = getPageHeaderClass(router.pathname);

  const combinedClasses = `${
    scrolled ? " header-active" : " "
  } ${headerClass} ${defaultClasses}`;

  return (
    <header className={combinedClasses}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="nav">
              <div className="nav__content">
                <div className="nav__logo">
                  <Link href="/">
                    <Image src={logoSrc} priority alt="Logo" />
                  </Link>
                </div>
                <div
                  className={
                    (openNav ? " nav__menu-active" : " ") + " nav__menu"
                  }
                >
                  <div className="nav__menu-logo d-flex d-xl-none">
                    <Link href="/" className="text-center hide-nav">
                      <Image src={logoSrcMobile} priority alt="Logo" />
                    </Link>
                    <button
                      aria-label="close the menu"
                      className="nav__menu-close"
                      onClick={closeNav}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <ul className="nav__menu-items">
                    <li className="nav__menu-item">
                      <Link
                        href="#aboutus"
                        className={`nav__menu-link hide-nav${openNav ? ' mb-4' : ''}`}
                        onClick={closeNav}
                      >
                        Discover
                      </Link>
                    </li>
                    <li className="nav__menu-item">
                      <Link
                        href="#contactus"
                        className="nav__menu-link hide-nav"
                        onClick={closeNav}
                      >
                        Early Access
                      </Link>
                    </li>
                    <li className="nav__menu-item">
                      <Link
                        href="#faqtwolight"
                        className="nav__menu-link hide-nav"
                        onClick={closeNav}
                      >
                        FAQ's
                      </Link>
                    </li>

                  </ul>
                  <div className="social">
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
                <div className="nav__uncollapsed">
                  <div className="nav__uncollapsed-item d-none d-md-flex">
                  </div>
                  <button
                    className={
                      (openNav ? " nav__bar-toggle" : " ") +
                      " nav__bar d-block d-xl-none"
                    }
                    onClick={handleNav}
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={(openNav ? " backdrop-active" : " ") + " backdrop"}
        onClick={() => {
          setOpenNav(false);
          setOpenSubMenu(null);
        }}
      ></div>
    </header>
  );
};

export default Header;
