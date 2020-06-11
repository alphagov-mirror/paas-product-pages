import React, { useEffect } from 'react';
import '../styles/application.scss'

export default function ProductPages({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add('js-enabled');
  }, []);
  return <Component {...pageProps} />
}
