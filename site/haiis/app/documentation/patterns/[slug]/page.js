import { notFound } from 'next/navigation';
import Link from 'next/link';
import Main from '@/components/Main';
import { articles } from './content/index';
import styles from './page.module.css';

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.meta.title} | HAIIS`,
    description: article.meta.subtitle,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const { meta, Content } = article;

  return (
    <Main>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/documentation/patterns" className={styles.backLink}>
            ← Architecture Patterns
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
              Originally published on {meta.source} ↗
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
            Read original on {meta.source} ↗
          </a>
        </footer>
      </article>
    </Main>
  );
}
