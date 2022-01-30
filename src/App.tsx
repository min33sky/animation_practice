import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }

  gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [boxId, setBoxId] = useState<string | null>(null);

  return (
    <Wrapper>
      <GlobalStyle />

      <Grid>
        {[1, 2, 3, 4].map((item) => (
          <Box key={item} onClick={() => setBoxId(String(item))} layoutId={String(item)} />
        ))}
      </Grid>

      <AnimatePresence>
        {boxId && (
          <Overlay
            onClick={() => setBoxId(null)}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          >
            <Box layoutId={boxId} style={{ width: 200, height: 200 }} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
