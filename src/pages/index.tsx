import { useRef, memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

type Props = {
  className: string;
};

function Home({ className }: Props) {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <main className={classnames(styles.Home, className)} ref={containerRef}>
      <Head />
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to Ale Playground!</h1>
        <h2 className={styles.description}>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </h2>
        <ul className={styles.row}>
          <li>
            <a
              href="https://github.com/Jam3?q=&type=source"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Visit out GitHub</h3>
              <p>See our contributions to Open Source community</p>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default memo(Home);
