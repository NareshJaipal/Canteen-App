import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./banner.module.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
  };

  const textSlides = [
    {
      heading: "Delicious Meals on Campus",
      description: "Order your favorites online",
    },
    { heading: "Fuel Your Day", description: "Fresh, healthy, and convenient" },
    {
      heading: "Discover Daily Specials",
      description: "Find exciting offers every day",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.carasoul}>
        <Slider {...settings}>
          {textSlides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <h1 className={styles.heading}>{slide.heading}</h1>
              <p className={styles.description}>{slide.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
