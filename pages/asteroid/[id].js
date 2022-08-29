import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const API_TOKEN = 'https://api.nasa.gov';
const TOKEN = 'eyM6hqgRiS4il65FrxVT34FdVogIQlgjg6FMrWRm';

const Asteroid = (props) => {
  console.log('ASTEROID PROPS', props);
  const [data, setData] = useState(props.data);

  // const router = useRouter();

  // console.log('---ROUTER---', router);

  // useEffect(() => {
  //   fetch(
  //     `${API_TOKEN}/neo/rest/v1/neo/${router.query.id}?api_key=${TOKEN}`,
  //   )
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  if (!data)
    return <h5 style={{ textAlign: 'center' }}>Loading ...</h5>;

  return <h1 style={{ textAlign: 'center' }}>{data.name}</h1>;
};

export const getServerSideProps = async (context) => {
  console.log('QUERY', context.query);

  const response = await fetch(
    `${API_TOKEN}/neo/rest/v1/neo/${context.query.id}?api_key=${TOKEN}`,
  );
  const data = await response.json();

  return { props: { data } };
};

export default Asteroid;
