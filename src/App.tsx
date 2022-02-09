import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import images from './libs/images';

const Carousel = styled(motion.div)`
  margin: 10% 10%;
  cursor: grab;
  overflow: hidden;
`;

const InnerCarousel = styled(motion.div)`
  display: flex;
`;

const Item = styled(motion.div)`
  min-width: 25rem;
  min-height: 40rem;
  padding: 40px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    pointer-events: none;
  }
`;

function App() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth);
    }
  }, []);

  return (
    <div>
      <GlobalStyle />

      <Carousel ref={carouselRef} whileTap={{ cursor: 'grabbing' }}>
        <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
          {images.map((image) => (
            <Item key={image} className="item">
              <img src={image} alt="" />
            </Item>
          ))}
        </InnerCarousel>
      </Carousel>
    </div>
  );
}

export default App;
