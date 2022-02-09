import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MovieResult } from '../typings/movie';

const Container = styled.div`
  margin-bottom: 2rem;

  button {
    margin-right: 2rem;
    min-width: 5rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: white;
    border-radius: 1rem;
    color: rgb(65, 98, 168);
    border: 2px solid rgb(65, 98, 168);
    font-weight: bold;

    cursor: pointer;
  }

  /* 현재 선택한 필터 메뉴 */
  .active {
    background-color: rgb(65, 98, 168);
    color: white;
  }
`;

interface IFilter {
  popular: MovieResult[];
  setFiltered: React.Dispatch<React.SetStateAction<MovieResult[]>>;
  activeGenre: number;
  setActiveGenre: React.Dispatch<React.SetStateAction<number>>;
}

function Filter({ activeGenre, popular, setFiltered, setActiveGenre }: IFilter) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
    setFiltered(filtered);
  }, [activeGenre, popular, setFiltered]);

  return (
    <Container>
      <button className={activeGenre === 0 ? 'active' : ''} onClick={() => setActiveGenre(0)}>
        All
      </button>
      <button className={activeGenre === 35 ? 'active' : ''} onClick={() => setActiveGenre(35)}>
        Comedy
      </button>
      <button className={activeGenre === 28 ? 'active' : ''} onClick={() => setActiveGenre(28)}>
        Action
      </button>
    </Container>
  );
}

export default Filter;
