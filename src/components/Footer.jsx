// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerSection}>
        <h4>About Us</h4>
        <p>Your trusted source for the latest news, analysis, and stories from around the world.</p>
      </div>
      <div style={styles.footerSection}>
        <h4>Contact Us</h4>
        <p>Email: contact@newswebsite.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <div style={styles.footerSection}>
        <h4>Follow Us</h4>
        <ul style={styles.socialList}>
          <li style={styles.socialItem}><a href="#" style={styles.socialLink}>Facebook</a></li>
          <li style={styles.socialItem}><a href="#" style={styles.socialLink}>Twitter</a></li>
          <li style={styles.socialItem}><a href="#" style={styles.socialLink}>Instagram</a></li>
        </ul>
      </div>
      <div style={styles.copyright}>
        <p>&copy; 2024 News Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  footerSection: {
    flex: '1',
    margin: '10px',
    minWidth: '200px',
  },
  socialList: {
    listStyleType: 'none',
    padding: 0,
  },
  socialItem: {
    marginBottom: '10px',
  },
  socialLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  copyright: {
    width: '100%',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Footer;
