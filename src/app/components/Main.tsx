import styles from '../styles/main.module.css';
import Image from 'next/image';

const products = [
  { name: "Girls Hoodie", image: "/hoodie.webp", price: "$50" },
  { name: "Womens Coat ", image: "/coat.webp", price: "$120" },
  { name: "Tees ", image: "/shirt.avif", price: "$25" },
  { name: "Hoodie", image: "/hoodie1.webp", price: "$55" },
  { name: "Coat", image: "/coat1.webp", price: "$110" },
  { name: "T-Shirt", image: "/shirt3.webp", price: "$30" },
  { name: "Sweat Shirt", image: "/hoodie2.webp", price: "$60" },
  { name: "Jacket", image: "/coat2.webp", price: "$100" },
  { name: "Tees", image: "/shirt2.webp", price: "$40" },
];

export default function Main() {
  return (
    <section className={styles['main-section']}>
      <h2>New Arrivals</h2>
      <div className={styles['product-grid']}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <Image
              src={product.image}
              alt={product.name}
              width={150} // Set smaller width here
              height={150} // Height can be set to auto to maintain aspect ratio
              className="rounded-lg"
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
