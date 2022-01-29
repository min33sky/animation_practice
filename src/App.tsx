import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  /**
   * ? motionValue 값이 변경되어도 react rendering cycle과는 관련이 없다.
   * ? -> 필요없는 리랜더링 발생을 막아준다.
   */
  const x = useMotionValue(0);
  //* MotionValue 값을 변형할 수 있다.
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(135deg, #e09, #d0e)',
      'linear-gradient(135deg,rgb(0, 210, 238), rgb(0, 83, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
    ]
  );

  //* 뷰포트의 스크롤 관련 정보를 가져온다
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    x.onChange(() => console.log(rotateZ.get()));
  }, [rotateZ, x]);

  // console.log(x); //! motionValue가 변해도 리랜더링이 발생하지 않으므로 처음에만 출력됨

  return (
    <Wrapper style={{ background: gradient }}>
      <GlobalStyle />

      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
