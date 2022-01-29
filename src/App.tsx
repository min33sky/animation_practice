import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #00a5ff;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <GlobalStyle />

      <Box
        style={{
          justifyContent: clicked ? 'center' : 'flex-start',
          alignItems: clicked ? 'center' : 'flex-start',
        }}
      >
        <Circle layout />
      </Box>
    </Wrapper>
  );
}

export default App;
