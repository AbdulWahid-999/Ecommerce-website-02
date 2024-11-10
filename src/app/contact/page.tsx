import styles from '../styles/contact.module.css';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import icons from react-icons

export default function Contact() {
  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.content}>
          We would love to hear from you! Whether you have questions about our products,
          need assistance with an order, or want to provide feedback, our team is here
          to help. You can reach us via email at support@fashion.com or call us at 
          (123) 456-7890. Our customer service representatives are available 
          Monday to Friday, from 9 AM to 5 PM. We value your input and look forward
          to connecting with you!
        </p>
        
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className={styles.icon} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}
