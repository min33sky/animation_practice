import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const variants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotateZ: 360,
  },
  leave: {
    scale: 0,
    opacity: 0,
    y: 150,
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowwing = () => setShowing((prev) => !prev);

  return (
    <Wrapper>
      <GlobalStyle />

      {/* 컴포넌트가 AnimatePresense 컴포넌트 내부에 있을 시 애니메이션 적용이 가능하다. */}
      <AnimatePresence>
        {showing ? (
          <Box variants={variants} initial="initial" animate="visible" exit="leave" />
        ) : null}
      </AnimatePresence>

      <button onClick={toggleShowwing}>Click</button>
    </Wrapper>
  );
}

export default App;
