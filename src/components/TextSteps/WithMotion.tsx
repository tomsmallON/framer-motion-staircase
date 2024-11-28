'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import styles from './TextSteps.module.scss';

export const WithMotion = ({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLElement>;
}) => {
  const content = ['With', 'Motion', 'Framer', 'Animation'];

  const { scrollYProgress } = useScroll({
    target: parentRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <div className={styles.steps} id="withMotion">
      {content.map((_, stepIndex: number) => (
        <div
          key={`step-${stepIndex}`}
          className={styles.step}
          style={{ '--step': stepIndex } as React.CSSProperties}
        >
          <motion.div className={styles.content} style={{ y: y }}>
            {content.concat(content).map((item: string, itemIndex: number) => (
              <span key={`content-${itemIndex}`}>{item}</span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
