import styles from "./products.module.css";
import Header from "../components/header/header";
import Slider from "../components/slide/slide";
import BorderSection from "../components/border_section/border_section";
import Footer from "../components/footer/footer";
import Food from "../components/food/food";
import Product from "../components/product/product";
import { useEffect, useState } from "react";
import { fetchAPI } from "../../api/api";

export default function Products() {
    const [products, setProducts] = useState({});
       const getBeers = () => {
           const beers = products.beers
           let beer = []
           beers.map((e)=>{
               beer.push(
                <Product product={{title:e.title,percentage_alcohol:e.percentage_alcohol, subtitle: e.subtitle, description:e.description, price: e.price, image: "/assets/combo.png"}}/>
              )
           })
           
           console.log(beer)
           return  beer
       }
       const getFoods = () => {
        const foods = products.foods
        let food = []
        foods.map((e)=>{
            food.push(
             <Food foods={[{name:e.name,price:e.price, image: "/assets/platocomida.jpg"}]}/>
           )
        })
        
        console.log(food)
        return  food
    }
       useEffect(() => {
         const getHome = async () => {
           await fetchAPI("/products").then((items) => {
            setProducts(items);
           });
         };
         getHome();
       }, []);
       if(!products.header && !products.beers && !products.foods && !products.rental){
           return <h1>Loading....</h1>
       }
    // eslint-disable-next-line react/jsx-key
    const comidas = [<Food foods={[{name: "Plato tipico", price: "1234", image: "/assets/platocomida.jpg"},
        {name: "Plato tipico", price: "1234", image: "/assets/platocomida.jpg"},
        {name: "Plato tipico", price: "1234", image: "/assets/platocomida.jpg"}]}/>,
        // eslint-disable-next-line react/jsx-key
        <Food foods={[{name: "Plato tipico", price: "1234", image: "/assets/platocomida.jpg"},
            {name: "Plato tipico", price: "1234", image: "/assets/platocomida.jpg"},
            {name: "Plato tipico", price: "1234", image: "/assets/platocomida.jpg"}]}/>]

    return (
        <main>
            <section className={styles.background}>
                <Header>
                </Header>
                <section className={styles.slider_margin}>
                    <Slider data={getBeers()}/>
                </section>
            </section>
            <BorderSection/>
            <article className="has_text_brown article">
                <h2 className="font_title is_size_2">{products.content_us.title}</h2>
                <div className={styles.is_flex}>
                    <p className="font_normal is_size_4 padding_right_2">{products.content_us.description}.</p>
                    <p className="font_normal is_size_4">Para brindarte la posibilidad de elegir qué cerveza quieres tomar.
                        Contamos con 3 cervezas de línea: Leyenda, Historia y Tradición</p>
                </div>
            </article>
            <div className={styles.border_section_revert}>
                <BorderSection/>
            </div>
            <section className="article is_brown_primary">
                <Slider data={getBeers()}/>
            </section>
            <BorderSection/>
            <article className="has_text_brown article">
                <h2 className="font_title is_size_2 margin_1">Comidas</h2>
                <div className={styles.is_flex}>
                    <p className="font_normal is_size_4">Contamos con un amplio menú de comida, perfecto para acompañar nuestras
                        cervezas artesanales </p>
                </div>
            </article>

            <section className="article is_gray_2">
                <Slider data={getFoods()}/>
            </section>

            
            <article className="has_text_brown article">
                <h2 className="font_title is_size_2 margin_1">{products.rental.title}</h2>
                <div className={styles.is_flex}>
                    <p className="font_normal is_size_4">{products.rental.description}</p>
                </div>
            </article>
            <section className="margin_1">
                <Slider data={getFoods()}/>
            </section>
            <div className={styles.border_section_revert}>
                <BorderSection/>
            </div>
            <Footer/>
        </main>
    )
}