import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const handleMenuBarBtn = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo}>
          Canteen App
        </Link>
        <Image
          onClick={handleMenuBarBtn}
          className={
            showDropDown ? styles.menuBarIcon : styles.menuBarIconClicked
          }
          src={
            showDropDown ? "/static/icons/cross.svg" : "/static/icons/bar.svg"
          }
          width={24}
          height={24}
          alt="userIcon"
        ></Image>
      </div>

      <div
        className={`${styles.menuWrapper} ${showDropDown && styles.showMenu}`}
      >
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="#menu">Menu</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="#about">About Us</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.user}>
          <Image
            className={styles.faIcons}
            src="/static/icons/user.svg"
            width={20}
            height={20}
            alt="userIcon"
          ></Image>
          <Image
            className={styles.faIcons}
            src="/static/icons/cart.svg"
            width={20}
            height={20}
            alt="userIcon"
          ></Image>

          <Link href="#" className={styles.orderNow}>
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
