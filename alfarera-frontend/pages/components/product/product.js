import Image from 'next/image'
import styles from './product.module.css'
import Link from 'next/link';


export default function Product({product}) {
    console.log(product)
    return (
        <div className={`${styles.is_flex} `}>
           <div className={`${styles.is_flex} ${styles.detail} flex_direction_column`}> 
                <p className={"font_title has_text_white is_size_3 is_bold"}>{product.subtitle}</p>
                <p className={"font_title has_text_yellow is_size_2 is_bold"}>{product.title}</p>
                <p className={"font_normal has_text_white is_size_4"}>{product.description}</p>
                <div className={`${styles.is_flex}`}>
                    <div className={`${styles.detail_prod}`}>
                        <p className="has_text_white is_bold">Precio</p>
                        <span className="has_text_white" >$ {product.price}</span>
                    </div>
                    <div>
                        <p className="has_text_white  is_bold">Alcohol</p>
                        <span className="has_text_white">{product.percentage_alcohol}%</span>
                    </div>
                </div>
                <div className={`${styles.is_flex} ${styles.options}`}>
                    <Link className="btn_primary" href="/detail-product">
                        <a className="btn_primary">Hacer pedido</a>
                    </Link>
                    <a className="btn_link has_text_yellow">Añadir al carrito</a>
                </div>
            </div> 
            <Image width={300} height={300} src={product.image} alt={"'Image food'"}/>
        </div>
    );
}