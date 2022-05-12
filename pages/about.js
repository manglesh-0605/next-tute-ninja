import styles from '../styles/About.module.css';
import Head from 'next/head';
import { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    console.log('log in about');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>3RILL | About</title>
      </Head>
      <h1>This is about page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        consectetur.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        consectetur.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        consectetur.
      </p>
    </div>
  );
};

export default About;
