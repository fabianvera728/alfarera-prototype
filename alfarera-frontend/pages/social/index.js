import styles from "./social.module.css";
import Header from "../components/header/header";
import BorderSection from "../components/border_section/border_section";
import Slider from "../components/slide/slide";
import Image from "next/image";
import Footer from "../components/footer/footer";

export default function Social() {
  return (
    <div>
      <section className={styles.background}>
        <Header />
        <div className={styles.hero_container}>
          <Image
            width={500}
            height={500}
            src={"/assets/combo.png"}
            alt="image alfarera"
          />
          <div className={`${styles.hero}`}>
            <h2 className="font_title is_size_2 has_text_yellow">
              Cerveza Artesanal Alfarera
            </h2>
            <p className="font_normal">
             La calidez de una mano da sabor a una cerveza. sentir es parte del sabor trabajamos con pasión 
            </p>
            <div>
              <button className="btn_primary">Log in</button>
              <a className="btn_link"> Sign up</a>
            </div>
          </div>
        </div>
      </section>
      <BorderSection />
      <article className={`article `}>
          <div className={`${styles.section_article} article `}>
              <h1>Social</h1>
        <input type="text" className={`${styles.input} input_text`} placeholder="Buscar" />
          </div>
        
        <div className={styles.is_flex}>
          <section className={`${styles.is_flex} ${styles.column}`}>
            <span>Publicacones</span>
            <span>Categorias</span>
            <span>Eventos</span>
            <span>Karaoke</span>
            <span>Anuncios</span>
            <span>Privacidad</span>
            <span>Acerca de</span>
          </section>
          <section>
            <div className={styles.filters}>
              <button className="btn_primary">Todos</button>
              <button className="btn_primary">Cervezas</button>
              <button className="btn_primary">Comidas</button>
              <button className="btn_primary">Karaoke</button>
            </div>
            <div className={styles.card}>
              <div className={`${styles.is_flex}`}>
                <button>Admin</button>
                <button className="btn_primary">Publicar</button>
              </div>
              <div className={`${styles.section_input_card} ${styles.is_flex}`}>
                <input 
                    type="text" 
                    className={`${styles.section_input_card} input_text`} 
                    placeholder="Description de la publicacion"
                    />
                <button className="btn_primary">Subir imagen</button>
              </div>
            </div>
            <div className={styles.card}>
              <a className="btn_link_dark">Admin</a>
              <p>Descripción publicación Descripción publicación
              Descripción publicación
              Descripción publicación
              </p>
              <Image
                width={500}
                height={600}
                src="/assets/combo.png"
                alt="Imagen de la publicacion"
              />
              <div className={ `${styles.is_flex} ${styles.align_center}`}>
                
                  <a className="button">Me gusta</a>
                  <a>compartir</a>
               
                    <p>101 commentario</p>
              </div>
              <div className={``}>
                   <input type="text" placeholder="Comentar" className={`${styles.custom_input} input_text`} />
              </div>
              </div>
          </section>
          <section>
            <div className={styles.card_anuncio}>
              <Image
                width={200}
                height={200}
                src="/assets/combo.png"
                alt="Anuncio producto a la venta"
              />
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}
