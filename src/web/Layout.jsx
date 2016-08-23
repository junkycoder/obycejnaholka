import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import styles from './styles.css';

export default function Layout ({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
