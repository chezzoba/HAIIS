import Link from 'next/link';
import Main from '@/components/Main';
import styles from './ArticlePage.module.css';

export default function ArticlePage({ meta, Content, backLink }) {
  return (
    <Main>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href={backLink.href} className={styles.backLink}>
            ← {backLink.text}
          </Link>
          <div className={styles.cloudTags}>
            {meta.clouds.map((cloud) => (
              <span key={cloud} className={`${styles.tag} ${styles['tag' + cloud]}`}>
                {cloud}
              </span>
            ))}
          </div>
          <h1 className={styles.title}>{meta.title}</h1>
          <p className={styles.subtitle}>{meta.subtitle}</p>
          <div className={styles.byline}>
            <span>{meta.author}</span>
            <span className={styles.dot}>·</span>
            <span>{meta.published}</span>
            <span className={styles.dot}>·</span>
            <a href={meta.sourceUrl} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
              View source code ↗
            </a>
          </div>
        </header>

        {meta.previewImage && (
          <div className={styles.heroImage}>
            <img src={meta.previewImage} alt={meta.title} />
          </div>
        )}

        <div className={styles.body}>
          <Content />
        </div>

        <footer className={styles.footer}>
          <a href={meta.sourceUrl} target="_blank" rel="noopener noreferrer" className={styles.originalLink}>
            View source code ↗
          </a>
        </footer>
      </article>
    </Main>
  );
}
