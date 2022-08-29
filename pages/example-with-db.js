import React from 'react';

const ExampleWithDB = (props) => {
  return <h1 style={{ textAlign: 'center' }}>ExampleWithDB</h1>;
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};

export default ExampleWithDB;
