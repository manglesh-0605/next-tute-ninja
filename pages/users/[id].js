import Image from 'next/image';

const URL =
  'http://52.71.217.35:8082/admin-service/api/v1/tab/getTvAppAllDetails?organizationId=2';
export const getStaticPaths = async () => {
  try {
    let res = await fetch(URL);
    let data = await res.json();

    let paths = data.data[0].mediaSeriesDTOList[0].mediaItemDTO.map(
      (item, index) => {
        return {
          params: {
            id: (index + 1).toString(),
          },
        };
      }
    );

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log('error', err);
  }
};
export const getStaticProps = async (context) => {
  try {
    const id = context.params.id;
    const res = await fetch(URL);
    const data = await res.json();

    const item = data.data[0].mediaSeriesDTOList[0].mediaItemDTO[id - 1];
    return {
      props: {
        item,
      },
    };
  } catch (err) {
    console.log('error while fetching data');
  }
};

const Details = ({ item }) => {
  return (
    <div>
      <Image src={item.wideArtwork.document.path} width={640} height={360} />
      <h1>{item.title}</h1>
      <h5>{item.subTitle}</h5>
      <p>{item.description}</p>
    </div>
  );
};

export default Details;
