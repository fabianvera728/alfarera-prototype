import Image from 'next/image'
import styles from './food.module.css'

export default function Food({foods}) {
    console.log(foods)
    return (
        <div className={`${styles.is_flex} `}>
            {foods.map((food) => (
                // eslint-disable-next-line react/jsx-key
                <div className={`${styles.is_flex} flex_direction_column`}>
                    <Image width={200} height={100} src={food.image} alt={"'Image food'"}/>
                    <p className={"is_bold"}>{food.name}</p>
                    <span>$ {food.price}</span>
                </div>
            ))}
        </div>
    );
}