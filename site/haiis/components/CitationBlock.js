'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './CitationBlock.module.css';

const FORMATS = ['APA', 'Chicago', 'BibTeX'];

export default function CitationBlock({ version, month, year }) {
    const pathname = usePathname();
    const url = `https://haiis.org${pathname === '/' ? '' : pathname}`;
    const citations = {
        APA: (
            <p className={styles.citationText}>
                HAIIS. ({year}). <em>Healthcare AI Implementation Standards (HAIIS)</em> (Version {version}).{' '}
                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            </p>
        ),
        Chicago: (
            <p className={styles.citationText}>
                HAIIS. <em>Healthcare AI Implementation Standards (HAIIS)</em>. Version {version}. {month} {year}.{' '}
                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>.
            </p>
        ),
        BibTeX: (
            <pre className={styles.bibtex}>{`@misc{haiis${year},
  author       = {{HAIIS}},
  title        = {{Healthcare AI Implementation Standards (HAIIS)}},
  year         = {${year}},
  version      = {${version}},
  howpublished = {\\url{${url}}}
}`}</pre>
        ),
    };

    const [active, setActive] = useState('APA');
    const [copied, setCopied] = useState(false);

    const plainText = {
        APA: `HAIIS. (${year}). Healthcare AI Implementation Standards (HAIIS) (Version ${version}). ${url}`,
        Chicago: `HAIIS. Healthcare AI Implementation Standards (HAIIS). Version ${version}. ${month} ${year}. ${url}.`,
        BibTeX: `@misc{haiis${year},\n  author       = {{HAIIS}},\n  title        = {{Healthcare AI Implementation Standards (HAIIS)}},\n  year         = {${year}},\n  version      = {${version}},\n  howpublished = {\\url{${url}}},\n  note         = {Open source under MIT License. Accessed ${month} ${year}.}\n}`,
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(plainText[active]).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.label}>Cite HAIIS</span>
                <div className={styles.tabs}>
                    {FORMATS.map((fmt) => (
                        <button
                            key={fmt}
                            className={`${styles.tab} ${active === fmt ? styles.activeTab : ''}`}
                            onClick={() => setActive(fmt)}
                        >
                            {fmt}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.citationBox}>
                {citations[active]}
                <button className={styles.copyBtn} onClick={handleCopy} aria-label="Copy citation">
                    {copied ? '✓ Copied' : 'Copy'}
                </button>
            </div>
        </div>
    );
}
