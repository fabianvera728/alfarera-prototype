import BorderSection from "../border_section/border_section";
import Header from "../header/header";
import styles from './mini-header.module.css'

export default function MiniHeader(){
    return(
        <div>
            <main className={styles.main}>
                <Header/>
            </main>
            <BorderSection/>
        </div>
    );
}


