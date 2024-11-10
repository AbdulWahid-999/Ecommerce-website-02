import styles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to Fashion-<span>Shop!</span></h1>
      <p>Discover amazing products just for you.</p>
      <button className={styles.shopButton}>Shop Now</button>
    </section>
  );
};

export default Hero;
