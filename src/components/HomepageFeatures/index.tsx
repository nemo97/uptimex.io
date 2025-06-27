import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cost-Effective Monitoring',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We provide affordable monitoring solutions tailored for small and medium-sized businesses. 
        Our services are designed to help you keep track of your applications and servers without breaking the bank. 
        We believe that effective monitoring should be accessible to all businesses, regardless of their size or budget.
      </>
    ),
  }, 
  {
    title: 'Customized Development',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We understand that every business has unique needs. Our team is dedicated to working closely 
        with you to develop customized solutions that meet your specific requirements. We believe in 
        tailoring our services to fit your business, ensuring that you get the most out of our monitoring 
        solutions.
      </>
    ),
  },
  {
    title: 'Open Source Tools',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We leverage the power of open source tools to provide you with robust and reliable monitoring solutions. 
        By utilizing these tools, we can offer you high-quality services without the hefty price tag associated 
        with proprietary software. Our commitment to open source ensures transparency, flexibility, and cost savings 
        for your business.
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
            In 2025, many small and medium-sized businesses still face challenges in accessing reliable monitoring services due to the high costs associated with providers like Datadog and New Relic. As a small business based in Phoenix, Arizona, we are dedicated to helping organizations monitor their applications and servers affordably by leveraging open source tools.
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
