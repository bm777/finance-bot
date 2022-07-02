import Head from 'next/head';
import styles from '../styles/Home.module.css';

import useWindowSize from '../hooks/useWindowSize';

import WebHome from '../components/WebHome';
import MobileHome from '../components/MobileHome';

export default function Home() {
  const { width } = useWindowSize();
  console.log(width);

  return (
    <div className={styles.app}>
      <Head>
        <title>AI - Finance</title>
        <meta
          name="description"
          content="Finance Bot | AI Tools | Personal Website "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {width > 640 ? <WebHome /> : <MobileHome />}
    </div>
  );
}