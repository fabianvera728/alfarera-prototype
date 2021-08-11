import styles from "./home.module.css";
import Header from "../components/header/header";
import BorderSection from "../components/border_section/border_section";
import Slider from "../components/slide/slide";
import Image from "next/image";
import Footer from "../components/footer/footer";
import { useEffect, useState } from "react";
import { fetchAPI } from "../../api/api";
import Worker from '../components/workers/workers';

//------ Vista de los productos
// Slide colocarle link a un detalle
// debajo donde estan las comidas hacer un estilo de galeria imagenes del lugar fisico
// debajo footer
//------

// slides noticias

// ------ detalle producto --
// quitar el navbar --n
// hero flechita para salir
// -- adñdir detalles compra-- footer
// ---------- Red social--
// algo como facebook
// - form modifixar datos o vista de edicion
// - targeta por pagina con formulario para rellenar los datos

export default function HomePage() {
  const [home, setHome] = useState({
   /*  header: {
      id: "",
      image: "",
      description: "",
    },
    content_us: {},
    workers: [], */
  });
  const getWorkers = () => {
      const workers = home.workers
      let works = []
        works.push(
         
      )
      console.log(works)
      return  <Worker workers={workers}/>
  }

  useEffect(() => {
    const getHome = async () => {
      await fetchAPI("/home").then((items) => {
        setHome(items);
      });
    };
    getHome();
  }, []);
  if(!home.header && !home.workers){
      return <h1>Loading....</h1>
  }
  console.log(home);
  return (
    <>
      <section className={styles.background}>
        <Header />
        <div className={styles.hero_container}>
          <Image
            width={1500}
            height={1000}
            src={"/assets/logo.jpg"}
            alt="image alfarera"
          />

          <div className={styles.hero}>
            <h2 className="font_title is_size_2">{home.header.title}</h2>
            <p className="font_normal is_size_3">{home.header.description}</p>
            <div>
              <button className="btn_primary">Log in</button>
              <a className="btn_link"> Sign up</a>
            </div>
          </div>
        </div>
      </section>
      <BorderSection />
      <section className={styles.content}>
        <h2 className="font_title is_size_2">{home.content_us.title}</h2>

        <div>
          <p className="font_normal is_size_4">{home.content_us.description}</p>
          <p className="font_normal is_size_4">
            En honor a este legado, nuestra cerveza adopta su nombre para rendir
            tributo a nuestra historia, Leyenda y Tradición Somos Alfarera,
            somos Cácota Norte de Santander
          </p>
        </div>
      </section>

      <section className={`article is_gray_2`}>
        <Slider data={[getWorkers()]} />
      </section>

      <div className={styles.border_section_revert}>
        <BorderSection />
      </div>

      <section className={styles.section}>
        <div className={styles.content_section}>
          <h2 className="font_title is_size_1 margin_1">Contáctanos</h2>
          <div>
            <input
              className="font_normal is_size_4"
              type="text"
              placeholder="Enter your full name"
            />
            <input
              className="font_normal is_size_4"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <input
              className="font_normal is_size_4"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <textarea
              className="font_normal is_size_4"
              placeholder="Enter your message"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
