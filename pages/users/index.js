import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Users.module.css';

const URL =
  'http://52.71.217.35:8082/admin-service/api/v1/tab/getTvAppAllDetails?organizationId=2';

export const getStaticProps = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log('error while fetching data');
  }
};

const Users = ({ data }) => {
  const allData = data.data[0].mediaSeriesDTOList[0].mediaItemDTO;
  useEffect(() => {
    console.log(
      'data on users >>>',
      data.data[0].mediaSeriesDTOList[0].mediaItemDTO
    );
  }, []);

  return (
    <>
      <Head>
        <title>3RILL | Users</title>
      </Head>
      <h2>All Items</h2>
      <div>
        {allData.map((item, index) => {
          return (
            <div key={item.id}>
              <Link href={`/users/${index + 1}`}>
                <a>
                  <h4 className={styles.text}>{item.title}</h4>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
