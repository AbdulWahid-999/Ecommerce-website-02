import styles from '../styles/about.module.css';

export default function About() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Us</h2>
        <p className={styles.content}>
          Welcome to FASHION, where style meets passion. We offer a diverse range
          of clothing designed to empower individuals to express themselves. Our
          mission is to bring you the latest trends while ensuring comfort and
          quality in every piece. From chic casual wear to high-end fashion, we
          have everything you need to make a statement. Our team of designers
          and fashion enthusiasts work tirelessly to create collections that
          inspire and resonate with people around the world. At FASHION, we
          believe in inclusivity, creativity, and self-expression. Whether you’re
          dressing for work, play, or special occasions, we have something just
          for you.
        </p>
      </div>
    </section>
  );
}
