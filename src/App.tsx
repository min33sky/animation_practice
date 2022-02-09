import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { MovieResult } from './typings/movie';
import Filter from './components/Filter';

const Container = styled.div`
  margin: 5% 20%;
`;

const List = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

function App() {
  const [popular, setPopular] = useState<MovieResult[]>([]);
  const [filtered, setFiltered] = useState<MovieResult[]>([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      const movies = await data.json();
      setPopular(movies.results);
      setFiltered(movies.results);
      console.log(movies);
    })();
  }, []);

  return (
    <Container>
      <GlobalStyle />

      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />

      <List layout>
        <AnimatePresence>
          {filtered?.map((movie) => (
            <Movie key={movie.id} title={movie.title} imageUrl={movie.backdrop_path} />
          ))}
        </AnimatePresence>
      </List>
    </Container>
  );
}

export default App;
