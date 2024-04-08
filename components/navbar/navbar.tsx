import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";

import firebaseApp from "../../lib/firebase";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showSignoutBtn, setShowSignoutBtn] = useState(false);

  const router = useRouter();

  const auth = getAuth(firebaseApp);

  const handleMenuBarBtn = () => {
    setShowDropDown(!showDropDown);
  };

  const handleProfileBtn = (e: any) => {
    e.preventDefault();
    console.log(`Profile Button Clicked: ${showSignoutBtn}`);
    setShowSignoutBtn(!showSignoutBtn);
  };

  const handleCartBtn = (e: any) => {
    e.preventDefault();
    console.log("Cart Button Clicked");
  };

  const handleSignOutBtn = (e: any) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
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
          <button onClick={handleProfileBtn}>
            <div className={styles.faIconWrapper}>
              <Image
                className={styles.faIcons}
                src="/static/icons/user.svg"
                width={20}
                height={20}
                alt="userIcon"
              ></Image>
            </div>
          </button>
          {showSignoutBtn && (
            <div className={styles.signOutBtnWrapper}>
              <a onClick={handleSignOutBtn} className={styles.signOutBtn}>
                Sign Out
              </a>
              <div className={styles.signOutBtnPadding}></div>
            </div>
          )}
          <button onClick={handleCartBtn}>
            <div className={styles.faIconWrapper}>
              <Image
                className={styles.faIcons}
                src="/static/icons/cart.svg"
                width={20}
                height={20}
                alt="userIcon"
              ></Image>
            </div>
          </button>

          <Link href="#" className={styles.orderNow}>
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
