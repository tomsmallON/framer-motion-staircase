'use client';

import styles from './TextSteps.module.scss';

export const WithoutMotion = () => {
  const content = ['Without', 'Motion', 'Framer', 'Animation'];

  return (
    <div className={styles.steps} id="withoutMotion">
      {content.map((_, stepIndex: number) => (
        <div
          key={`step-${stepIndex}`}
          className={styles.step}
          style={
            {
              '--step': stepIndex,
            } as React.CSSProperties
          }
        >
          <div className={styles.content}>
            {content.concat(content).map((item: string, itemIndex: number) => (
              <span key={`content-${itemIndex}`}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
