'use client';

import { useState, useMemo } from 'react';
import styles from './page.module.css';

export default function GlossarySearch({ terms }) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const createCategoryId = (category) =>
    category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  // All unique categories from the full dataset
  const allCategories = useMemo(() => {
    return [...new Set(terms.map((t) => t.category))].sort();
  }, [terms]);

  // Terms matching the text query only (ignoring category filter)
  // Used to compute accurate per-category counts
  const queryFiltered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return terms;
    return terms.filter(
      (item) =>
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q)
    );
  }, [query, terms]);

  // Per-category counts based on the text query
  const categoryCounts = useMemo(() => {
    const counts = {};
    allCategories.forEach((cat) => (counts[cat] = 0));
    queryFiltered.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [queryFiltered, allCategories]);

  // Final filtered list: text query + category filter
  const filtered = useMemo(() => {
    if (!activeCategory) return queryFiltered;
    return queryFiltered.filter((item) => item.category === activeCategory);
  }, [queryFiltered, activeCategory]);

  // Group filtered terms by category for rendering
  const groupedCategories = useMemo(() => {
    const grouped = {};
    filtered.forEach((item) => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });
    Object.values(grouped).forEach((arr) =>
      arr.sort((a, b) => a.term.localeCompare(b.term))
    );
    return grouped;
  }, [filtered]);

  // Reset category filter if it has no matches after a search
  const effectiveCategory = activeCategory && categoryCounts[activeCategory] === 0
    ? null
    : activeCategory;

  if (effectiveCategory !== activeCategory) {
    // Will be picked up on next render
    setTimeout(() => setActiveCategory(effectiveCategory), 0);
  }

  return (
    <>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search terms or definitions…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search glossary terms"
        />
        {query && (
          <button
            className={styles.clearButton}
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
        {(query || activeCategory) && (
          <span className={styles.resultCount}>
            {filtered.length} {filtered.length === 1 ? 'term' : 'terms'}
          </span>
        )}
      </div>

      <div className={styles.directory}>
        <h2 className={styles.directoryTitle}>Categories</h2>
        <div className={styles.directoryGrid}>
          <button
            className={`${styles.directoryLink} ${!activeCategory ? styles.directoryLinkActive : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            All ({queryFiltered.length})
          </button>
          {allCategories.map((category) => {
            const count = categoryCounts[category];
            const isActive = activeCategory === category;
            const isEmpty = count === 0;
            return (
              <button
                key={category}
                className={`${styles.directoryLink} ${isActive ? styles.directoryLinkActive : ''} ${isEmpty ? styles.directoryLinkEmpty : ''}`}
                onClick={() =>
                  !isEmpty && setActiveCategory(isActive ? null : category)
                }
                disabled={isEmpty}
                aria-pressed={isActive}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 && (
        <p className={styles.noResults}>
          No terms match &ldquo;{query}&rdquo;
          {activeCategory && ` in ${activeCategory}`}. Try a different search.
        </p>
      )}

      {Object.entries(groupedCategories)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([category, catTerms]) => (
          <div
            key={category}
            id={createCategoryId(category)}
            className={styles.categorySection}
          >
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.termsList}>
              {catTerms.map((item, index) => (
                <div key={index} className={styles.termCard}>
                  <h3 className={styles.termName}>{item.term}</h3>
                  <p className={styles.termDefinition}>{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
}
