import styles from "./slide.module.css";
import Image from 'next/image'
import Slider from "react-slick";

export default function SliderComponent ({data}) {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    console.log(data)
    return (
      <div>
        <Slider className={styles.is_flex} {...settings}>
            {data.map((e) => (
                e
            ))}
        </Slider>
      </div>
    );

}