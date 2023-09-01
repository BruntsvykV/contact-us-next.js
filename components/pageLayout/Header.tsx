import React, { useState } from "react";
import Link from "next/link";
import ArrowDownIcon from "@/lib/icons/arrowDownIcon";
import { useRouter } from "next/router";
import MenuOpenIcon from "@/lib/icons/menuOpenIcon";
import MenuCloseIcon from "@/lib/icons/menuCloseIcon";
import LogoIcon from "@/lib/icons/logoIcon";
import ProfileIcon from "@/lib/icons/profileIcon";
import CartIcon from "@/lib/icons/cartIcon";
import styles from ".//Header.module.css";

const Header = () => {

  const router = useRouter();
  const [menuOpen, setMenuOpen]: [boolean, any] = useState(false);
  const [showMenu, setShowMenu]: [boolean, any] = useState(false);

  // Toggle hamburger menu in mobile view
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Hiding drop menu in mobile view
  const handleHideMenu = () => {
    setShowMenu(false);
    setMenuOpen(false)
  };

  // Setting font to  semibold if link is active
  const handleActiveLink = (path: string) => {
    return router.pathname === path ? "font-[600]" : "font-[400]";
  };

  const headerLink = () => (
    <div className={styles.headerMain}>
      <Link
        href={'/'}
        className={`${styles.link} ` + (handleActiveLink('/'))}
        onClick={handleHideMenu}
      >
        Home
      </Link>
      <div className={"flex space-x-2 items-center"}>
        <Link
          href={'/features'}
          className={`${styles.link} ` + (handleActiveLink("/features"))}
          onClick={handleHideMenu}
        >
          Features
        </Link>
        <ArrowDownIcon
          className={"cursor-pointer"}
          fill={menuOpen ? "white" : "#1F1F1F"}
        />
      </div>
      <Link
        href={'/blog'}
        className={`${styles.link} ` + (handleActiveLink("/blog"))}
        onClick={handleHideMenu}
      >
        Blog
      </Link>
      <Link
        href={'/shop'}
        className={`${styles.link} ` + (handleActiveLink("/shop"))}
        onClick={handleHideMenu}
      >
        Shop
      </Link>
      <Link
        href={'/about'}
        className={`${styles.link} ` + (handleActiveLink("/about"))}
        onClick={handleHideMenu}
      >
        About
      </Link>
      <Link
        href={'/contact'}
        className={`${styles.link} ` + (handleActiveLink("/contact"))}
        onClick={handleHideMenu}
      >
        Contact
      </Link>
      <div className={"flex flex-row space-x-9 justify-center items-center"}>
        <div className={styles.headerIcon}>
          <ProfileIcon
            className={"cursor-pointer hover:scale-125 transition hover:duration-300"}
            fill={menuOpen ? "white" : "#1F1F1F"}
            onClick={() => {
              router.push('/user');
              handleHideMenu
            }}
          />
        </div>
        <div className={styles.headerIcon}>
          <CartIcon
            className={"cursor-pointer hover:scale-125 transition hover:duration-300"}
            fill={menuOpen ? "white" : "#1F1F1F"}
            onClick={() => {
              router.push('/cart');
              handleHideMenu
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <header>
      <div className={styles.container + (menuOpen ? " bg-black" : "")}>
        <div className={"md:flex items-center w-full"}>
          <Link href={"/"} onClick={handleHideMenu}>
            <LogoIcon
              className={"cursor-pointer hover:scale-105 transition hover:duration-300"}
              fill={menuOpen ? "white" : "black"}
              width={"w-[91px] md:w-[121px]"}
              height={"h-[22px] md:h-[29px]"}
            />
          </Link>
          {/*Mobile view*/}
          <div className={"md:hidden " + (menuOpen ? "pt-14" : "pt-0")}>
            {showMenu && headerLink()}
          </div>
        </div>
        <div className={"md:hidden"}>
          {menuOpen
            ? (<MenuCloseIcon
              onClick={() => {
                handleMenuToggle()
                setShowMenu(false)
              }}
            />)
            : (<MenuOpenIcon
              onClick={() => {
                handleMenuToggle();
                setShowMenu(true)
              }}
            />)
          }
        </div>
        {/*Desktop view*/}
        <div className={"hidden md:flex justify-between items-center w-full"}>
          {headerLink()}
        </div>
      </div>
    </header>
  )
}

export default Header;
