import clsx from 'clsx';

import styles from './Nav.module.scss';

export const Nav = ({ example, setExample }) => {
  const buttons = [
    {
      label: 'Without Motion',
      value: 'without',
    },
    {
      label: 'With Motion',
      value: 'with',
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {buttons.map(({ label, value }) => (
          <li key={value}>
            <button
              className={clsx(
                styles.toggle,
                example === value && styles.toggle__active
              )}
              onClick={() => setExample(value)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
