import Image from "next/image";

import styles from "./card.module.css";
import Cart from "../icons/cart";
import { useState } from "react";

const Card = (props: any) => {
  const [cartValue, setCartValue] = useState(false);

  const { name, price } = props.data;

  const handleCartBtn = () => {
    setCartValue(!cartValue);
  };
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.cardImage}
          src={"/static/pizza.jpg"}
          height={400}
          width={280}
          alt="Card Pic"
        />
      </div>
      <div className={styles.cardHeading}>{name}</div>
      <div className={styles.cardFooter}>
        <div>
          PKR: <span className={styles.cardPrice}>{price}</span>
        </div>
        <button onClick={handleCartBtn}>
          <div className={styles.cardButton}>
            <Cart value={cartValue} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
