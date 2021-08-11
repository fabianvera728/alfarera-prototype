import Image from 'next/image'
import styles from './workers.module.css'

export default function Worker({workers}) {
    console.log(workers)
    return (
        <div className={`${styles.is_flex} `}>
            {workers.map((workers) => (
                // eslint-disable-next-line react/jsx-key
                <div className={`${styles.is_flex} flex_direction_column`}>
                    <Image width={750} height={400} src={"/assets/workers.jpg"} alt={"'Image food'"}/>
                    <p className={"is_bold"}>{workers.name}</p>
                    <span>{workers.rol}</span>
                </div>
            ))}
        </div>
    );
}