import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Join Our Newsletter</h3>
      <p>Subscribe to get the latest updates and offers!</p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </footer>
  );
};

export default Footer;
