import styles from './edit-page.module.css';
import Header from "../components/header/header";
import BorderSection from "../components/border_section/border_section";
import Image from 'next/image'
import Footer from "../components/footer/footer";
import MiniHeader from '../components/mini-header/mini-header';


export default function EditPage(){
    return(
        <div>
            <MiniHeader/>
            <article className="article has_text_brown">
                <h2 className="font_title is_size_2">Maneja el contenido de tú página</h2>

                <div>
                    <h4 className="font_title">Paginas</h4>
                    <div className={styles.grid}>
                       <div className={styles.card_image}>
                        <button>
                            <Image 
                            width={200}
                            height={200}
                            src="/assets/combo.png"
                            alt="Image combo"/>
                        </button>
                        <a href="/edit-page-form" className="btn_link_dark">Home</a>
                    </div>
                    <div className={styles.card_image}>
                        <button>
                            <Image 
                            width={200}
                            height={200}
                            src="/assets/combo.png"
                            alt="Image combo"/>
                        </button>
                        <a href="/edit-page-form" className="btn_link_dark">Productos</a>
                    </div>
                    <div className={styles.card_image}>
                        <button>
                            <Image 
                            width={200}
                            height={200}
                            src="/assets/combo.png"
                            alt="Image combo"/>
                        </button>
                        <a href="/edit-page-form" className="btn_link_dark">Social</a>
                    </div>  
                    </div>
                   
                </div>
                <div>
                    <h4 className="font_title">Productos</h4>
                    <div className={styles.grid}>
                       <div className={styles.card_image}>
                        <button>
                            <Image 
                            width={200}
                            height={200}
                            src="/assets/combo.png"
                            alt="Image combo"/>
                        </button>
                        <a href="/edit-page-form" className="btn_link_dark">Cervezas</a>
                    </div>
                    <div className={styles.card_image}>
                        <button>
                            <Image 
                            width={200}
                            height={200}
                            src="/assets/combo.png"
                            alt="Image combo"/>
                        </button>
                        <a href="/edit-page-form" className="btn_link_dark">Comidas</a>
                    </div>
                    </div>
                </div>
                <div>
                    <h4 className="font_title">Otros</h4>
                    <div className={styles.grid}>
                       <div className={styles.card_image}>
                        <button>
                            <Image 
                            width={200}
                            height={200}
                            src="/assets/combo.png"
                            alt="Image combo"/>
                        </button>
                        <a href="/edit-page-form" className="btn_link_dark">Anuncios</a>
                    </div>
                    <div className={styles.card_image}>
                        <button>
                            <Image 
                            width={200}
                            height={200}
                            src="/assets/combo.png"
                            alt="Image combo"/>
                        </button>
                        <a href="/edit-page-form" className="btn_link_dark">Trabajadores</a>
                    </div>
                    </div>
                </div>
            </article>
            <Footer/>
        </div>   
    );
}