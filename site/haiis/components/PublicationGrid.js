import Link from 'next/link';
import styles from './PublicationGrid.module.css';

export default function PublicationGrid({ publications, basePath }) {
  return (
    <div className={styles.grid}>
      {publications.map((pub, index) => {
        const href = pub.slug && basePath
          ? `${basePath}/${pub.slug}`
          : pub.link;
        const isExternal = !(pub.slug && basePath);

        return (
          <Link
            key={index}
            href={href}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={styles.card}
          >
            {pub.previewImage && (
              <img src={pub.previewImage} alt={pub.title} className={styles.previewImage} />
            )}
            <div className={styles.cardBody}>
              <h3>{pub.title}</h3>
              <p>{pub.subtitle}</p>
            </div>
            {pub.clouds && pub.clouds.length > 0 && (
              <div className={styles.cloudTags}>
                {pub.clouds.map((cloud) => (
                  <span key={cloud} className={`${styles.tag} ${styles['tag' + cloud]}`}>{cloud}</span>
                ))}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
