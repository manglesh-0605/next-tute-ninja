import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>3RILL | Home</title>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae amet perspiciatis possimus voluptates libero! Tenetur qui
        tempore possimus magni laudantium quaerat unde officiis, itaque, laborum
        quibusdam sed nemo modi sunt ratione! Sit, quia optio. Perferendis
        accusantium dolorem, ratione facere ipsam earum quas architecto,
        maiores, est enim corrupti hic autem recusandae animi et ullam
        doloremque ipsum obcaecati dolor! Quasi magnam at voluptate eaque,
        corrupti quis amet, voluptatum repellendus dicta quaerat fuga accusamus
        odio nemo nesciunt! Cumque a quis dolores architecto. Repellat facere
        iusto rem placeat, explicabo ipsum tempora, nostrum sed eaque, maiores
        soluta possimus accusantium illo architecto vitae sapiente quo id! Eum,
        quas porro! Debitis, culpa. Iste, fuga dolorum. Voluptate eveniet
        architecto eum rem saepe ullam quibusdam obcaecati. Debitis autem eum
        error doloremque nulla sapiente rerum eveniet sequi nam odio delectus
        minus dolorem, deleniti illum recusandae aspernatur doloribus
        repellendus nemo hic facere obcaecati ipsum! Voluptatem laudantium
        nostrum animi et perspiciatis voluptate?
      </p>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga amet
        sequi praesentium illum quos accusantium vero animi perspiciatis magni
        aliquam. consectetur.
      </p>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur ullam nulla eius atque tempore magni!
      </p>

      <Link href={'/users'}>
        <a className={styles.btn}>See all users</a>
      </Link>
    </div>
  );
}
