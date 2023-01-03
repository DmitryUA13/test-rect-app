import styles from './ProductList.module.scss';
import ProductItem from '../ProductItem/ProductItem';


export default function ProductList({ onAddToCart , products}) {
    return (
        <section className={styles.WrapperList}>
           
            {products.map(product => (
                <ProductItem key={product.id}
                    product={product} 
                    onAddToCart={onAddToCart}
                />
            ))}
        </section>
    )
}