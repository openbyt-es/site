import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GithubCard, {
  GithubCardProps,
} from '@site/src/components/github_card/github_card';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.tagline}.`}>
      <main className="padding-horiz--md">
        <ProjectsView />
      </main>
    </Layout>
  );
}

const repos: Array<GithubCardProps> = [
  {
    profile: 'openbyt.es',
    repo: 'glitchy',
    logo: 'img/glitchy-logo.svg',
  },
  {
    profile: 'openbyt.es',
    repo: 'site',
    logo: 'img/icon.svg',
  },
];

function ProjectsView(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h1>Open Source Projects</h1>
        </div>
        <div className="row">
          {repos.map((repo) => (
            <div className={clsx('col col--4 padding-vert--sm')}>
              <GithubCard {...repo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
