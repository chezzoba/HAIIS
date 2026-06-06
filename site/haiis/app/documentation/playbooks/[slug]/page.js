import { notFound } from 'next/navigation';
import ArticlePage from '@/components/ArticlePage';
import { articles } from './content/index';

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

export default async function Page({ params }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const { meta, Content } = article;

  return (
    <ArticlePage 
      meta={meta} 
      Content={Content} 
      backLink={{ href: '/documentation/playbooks', text: 'Implementation Playbooks' }}
    />
  );
}
