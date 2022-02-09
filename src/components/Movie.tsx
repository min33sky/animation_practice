import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface IMovie {
  title: string;
  imageUrl?: string;
}

const Container = styled(motion.div)`
  h2 {
    font-size: 0.8rem;
    font-weight: 800;
  }

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
`;

function Movie({ title, imageUrl }: IMovie) {
  return (
    <Container layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2>{title}</h2>
      <img src={'https://image.tmdb.org/t/p/w500' + imageUrl} alt="" />
    </Container>
  );
}

export default Movie;
