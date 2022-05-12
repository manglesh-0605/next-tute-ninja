import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/NotFound.module.css';
import Head from 'next/head';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    console.log('useEffect ran');
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className={styles.notFound}>
            <Head>
        <title>3RILL | NotFound</title>
      </Head>
      <h1>Oooops....</h1>
      <h2>The page you are looking for does not exist</h2>
      <p>
        Go back to the{' '}
        <Link href={'/'}>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
