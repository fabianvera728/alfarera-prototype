import Footer from "../components/footer/footer";
import styles from "./detail-product.module.css";
import Image from "next/image";
import BorderSection from "../components/border_section/border_section";
import Link from 'next/link';

export default function DetailProduct() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.actions_header}>
          <Link href="/products">
            <a className="btn_primary"> Back </a>
          </Link>
          <Link href="/edit-page">
            <a className="btn_primary">Admin</a>
          </Link>
          
        </div>
        <div className={styles.detail_product}>
          <div>
            <h2 className={styles.subtitle}>Cervezas</h2>
            <h1 className={styles.title}>Leyenda</h1>
            <p className={styles.description}>
              Una cerveza maltosa, pero lupulada, frecuentemente con aromas a
              chocolate y caramelo
            </p>
            <div className={styles.detail_product_prices}>
              <div>
                <span>
                  <strong>Price</strong>
                </span>
                <p>$ 8000</p>
              </div>
              <div>
                <span>
                  <strong>Alcohol</strong>
                </span>
                <p>5.2%</p>
              </div>
            </div>
          </div>
          <div className={styles.image_product}>
            <Image width={250} height={250} src={"/assets/combo.png"} alt="" />
          </div>
        </div>
      </main>
      <BorderSection/>
      <article className={`${styles.is_flex} ${styles.content} article`}>
        <section className={styles.data_order}>
          <h2>Datos del pedido</h2>
          <h3>Cerveza: Leyenda</h3>
          <h5>
            <strong>Strock disponible:</strong> 400u
          </h5>
          <h5>
            <strong>Cantidad:</strong> 12u
          </h5>
          <h2>$ 96.000</h2>
          <button className="btn_primary">Comprar ahora</button>

          <h3>Comentarios</h3>
          <h4>Ingresa tu comentario</h4>
          <textarea className="textarea_custom" type="text" placeholder="Ingresa tu comentario" />
        </section>
        <section className={styles.data_order}>
          <h3>Metodos de pago</h3>
          <div>
            <h5>
            <strong>Targetas de crédito:</strong></h5>
            <Image width={200} height={30} src={"/assets/visa-mastercard.jpg"} alt="" />
          </div>
          <div>
            <h5>
            <strong>Targetas de debito:</strong></h5>
            <Image width={200} height={30} src={"/assets/visa-mastercard.jpg"} alt="" />
          </div>
          <div>
            <h5>
            <strong>Efectivo en puntos de pago:</strong></h5>
            <Image width={120} height={30} src={"/assets/EFECTY.png"} alt="" />
          </div>
          
          
        </section>
      </article>

      <Footer />
    </div>
  );
}
