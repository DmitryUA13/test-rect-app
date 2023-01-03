import styles from './ProductItem.module.scss';

export default function ProductItem({ product, onAddToCart }) {
    const onAddTOCartHandler = () => {

        onAddToCart(product);
    }

    return (
        <section className={styles.ProdItem}>
            <h2 className={styles.H2}>{product.h2}</h2>
            <div className={styles.Descriptor}>{product.descr}</div>
            <div className={styles.ImageContainer}></div>
            <div className={styles.Price}>{product.price} {product.currency}</div>
            <button className={styles.Button} onClick={onAddTOCartHandler}>Купить {product.h2}</button>
        </section>
    )
}