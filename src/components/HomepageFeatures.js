import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'About',
    description: (
      <>
        Node.js module that allows you to interact with the Clash of Clans API very easily.
      </>
    ),
  },
  {
    title: 'Key Features',
    description: [
      'Object-oriented and Promise-based.',
      'Feature-rich and Flexible.',
      '100% coverage of the API.'
    ],
  },
  {
    title: '...',
    description: (
      <>
        Custom events allow creators absolute freedom in their creativity.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <div style={{ paddingBottom: '1rem' }}>
          {Array.isArray(description) ? (description.map((prop, idx) => <li key={idx}>{prop}</li>)) : (<p>{description}</p>)}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
