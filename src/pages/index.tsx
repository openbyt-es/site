import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import config from '@generated/docusaurus.config';
import { lookup } from '@site/src/utils/lookup';
import { Content } from '@theme/BlogPostPage';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';

const logo = lookup(config, 'logo');

type RecentPosts = { content: Content }[];
interface HomeProps {
  recentPosts: RecentPosts;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <span>
          <img src={logo} height="128" />
          <h1 className="hero__title inline">{siteConfig.title}</h1>
        </span>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <HomepageCTA />
      </div>
    </header>
  );
}

export default function Home(props: HomeProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.tagline}.`}>
      <HomepageHeader />
      <main className="padding-horiz--md"></main>
    </Layout>
  );
}

function HomepageCTA() {
  return (
    <div className={styles.width}>
      <Link
        className="button button--primary button--lg margin-top--lg"
        to="/projects"
      >
        See all the Projects
      </Link>
    </div>
  );
}
