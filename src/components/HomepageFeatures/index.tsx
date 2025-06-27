import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Self Study',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The ultimate goal of education is to empower students to learn independently. 
        Given the vast amount of knowledge available, no institution can teach everything. 
        Our mission is to guide you in developing the skills necessary to learn autonomously. 
        While we cannot teach you everything, we aim to help you master the art of self-learning.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In life, it is essential to prioritize what truly matters. Not all skills are equally valuable; 
        some are more critical than others. From our perspective, the most important skills are those 
        that enable you to secure and sustain employment. Our objective is to assist you in acquiring 
        these essential skills.
      </>
    ),
  },
  {
    title: 'Practice and Repeat',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The most effective way to learn is through consistent practice. The more you practice, the 
        better you become. Practice enhances your understanding, retention, and ability to apply 
        what you have learned. Our goal is to support you in practicing and reinforcing your knowledge 
        to achieve mastery.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <Heading as="h2" className="text--center">
            Our Mission
          </Heading>
          <p className="text--center">
            We are committed to building a community that supports one another in becoming self-sufficient learners. Our focus is on developing the most essential skills and providing meaningful opportunities for growth.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
