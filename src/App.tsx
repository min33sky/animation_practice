import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Box
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateX: 360, rotateZ: 360 }}
        transition={{ delay: 0.5, type: 'spring' }}
      />
    </Wrapper>
  );
}

export default App;
