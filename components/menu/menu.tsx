interface FoodItem {
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
}

import styles from "./menu.module.css";
import data from "../../data/dummy.json";
import Card from "../card/card";

const Menu = () => {
  const foodData: FoodItem[] = data;

  return (
    <div className={styles.container}>
      <h1 className={styles.menuHeading}>Food Menu</h1>
      <div className={styles.cardsWrapper}>
        {foodData.map((food, idx) => (
          <Card key={idx} data={food} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
