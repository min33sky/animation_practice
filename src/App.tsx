import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <motion.div
        layout
        transition={{ layout: { duration: 0.6, type: 'spring' } }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="card"
        style={{ borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}
      >
        <motion.h2 layout="position">Framer Motion ✨</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="expand"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est consequatur
              tempora consectetur cumque aspernatur sit. Inventore consequatur fuga eveniet.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, blanditiis.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
