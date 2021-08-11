import styles from './edit-page-form.module.css'
import MiniHeader from '../components/mini-header/mini-header';
import Footer from '../components/footer/footer';
export default function EditPageForm(){

    return (
        <div>
            <MiniHeader/>
            <article className="article has_text_brown">
                <h1 className="font_title is_size_2">Maneja el contenido de tú página</h1>
                <section className={styles.titles}>
                    <div className={`${styles.is_flex} ${styles.home}`}>
                        <h2 className="font_title is_size_3">Home</h2>
                        <div>
                            <button className="btn_primary">Guardar cambios</button>
                        </div>
                        
                    </div>
                    <h5 className="font_normal is_bold is_size_3 margin_1">Metadatos</h5>
                    <div className={styles.is_flex}>
                        <div className={`${styles.item} ${styles.item1}`}>
                            <h4 className="font_normal is_bold margin_bottom_1 ">Titulo de la página</h4>
                            <input className="input_text font_normal is_size_4" type="text" placeholder="Ingrese el titulo"/>
                        </div>
                        <div className={styles.item}>
                            <h4 className="font_normal is_bold margin_0">Descripción de la pagina</h4>
                            <input className="input_text font_normal is_size_4" type="text" placeholder="Ingrese el titulo"/>
                        </div>
                    </div>
                    <h5 className="font_normal is_bold is_size_3 margin_top_1">Contenido</h5>
                    <div className={styles.is_flex}>
                        <div className={`${styles.item} ${styles.item1}`}>
                            <h4 className="font_normal is_bold margin_bottom_1">Titulo del hero</h4>
                            <input className="input_text font_normal is_size_4"type="text" placeholder="Ingrese el titulo del hero"/>
                        </div>
                        <div className={styles.item}>
                            <h4 className="font_normal is_bold margin_0">Descripción del hero</h4>
                            <input className="input_text font_normal is_size_4"type="text" placeholder="Ingrese la descripción del hero"/>
                        </div>
                    </div>
                    <h4 className="font_normal is_bold margin_1">Imagen del hero</h4>
                    <div className={styles.is_flex}>
                        <div className={`${styles.item} ${styles.input_file} margin_bottom_1`}>
                            <label>
                                <input className={`${styles.input_file} btn_primary`} type="file"/>
                            </label>
                        </div>
                    </div>
                    <h4 className="font_normal is_bold margin_0">Titulo del hero</h4>
                    <div className={styles.is_flex}>
                        <div className={`${styles.item}  margin_bottom_1`}>
                            <input className="input_text font_normal is_size_4" type="text" placeholder="Ingrese el titulo"/>
                        </div>
                    </div>
                    <div className={styles.is_flex}>
                        <div className={styles.description}>
                            <h4 className="font_normal is_bold margin_0">Descripcion del contenido</h4>
                            <textarea className="textarea_custom font_normal is_size_4" type="text" placeholder="Ingrese la description"/>
                        </div>
                    </div>
                </section>
                <button className="btn_primary">Guardar cambios</button>
            </article>
            <Footer/>
        </div>
    );

}