'use client';

import { useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { Nav } from './Nav';
import { WithoutMotion } from './WithoutMotion';
import { WithMotion } from './WithMotion';

type ExampleType = 'with' | 'without';

export const TextSteps = () => {
  const parentRef = useRef<HTMLElement>(null);
  const [example, setExample] = useState<ExampleType>('without');

  const animation = {
    initial: { y: -40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40, opacity: 0 },
    transition: { duration: 0.5, ease: [0.165, 0.84, 0.44, 1.0] },
  };

  return (
    <>
      <Nav example={example} setExample={setExample} />

      <section ref={parentRef}>
        <AnimatePresence mode="wait">
          {example === 'without' && (
            <motion.div key={example} {...animation}>
              <WithoutMotion />
            </motion.div>
          )}

          {example === 'with' && (
            <motion.div key={example} {...animation}>
              <WithMotion parentRef={parentRef} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};
