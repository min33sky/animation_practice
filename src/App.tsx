import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { AnimatePresence, motion, Variants } from 'framer-motion';
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
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -300 : 300,
    opacity: 0,
    scale: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },

  exit: (isBack: boolean) => ({
    x: isBack ? 300 : -300,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);

  const nextItem = () =>
    setVisible((prev) => {
      setIsBack(false);
      return prev === 10 ? 10 : prev + 1;
    });

  const prevItem = () =>
    setVisible((prev) => {
      setIsBack(true);
      return prev === 1 ? 1 : prev - 1;
    });

  return (
    <Wrapper>
      <GlobalStyle />

      {/* 컴포넌트가 AnimatePresense 컴포넌트 내부에 있을 시 애니메이션 적용이 가능하다. */}
      {/* exitBeforeEnter: 한 번에 하나의 컴포넌트만 랜더링 */}
      <AnimatePresence custom={isBack}>
        <Box
          key={visible}
          custom={isBack}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevItem}>Prev</button>
      <button onClick={nextItem}>Next</button>
    </Wrapper>
  );
}

export default App;
