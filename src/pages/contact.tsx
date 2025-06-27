import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">      
      <main className={clsx('container', styles.mainContainer, styles.centerContent)}>
        <div className={styles.contactText}>          
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold', textAlign: 'center', marginTop: '10rem' }}>
            For any inquiries, support, or feedback, please reach out to us.<br />
            <strong>
              Email us at <Link href="mailto:info@uptimex.io">info@uptimex.io</Link>
            </strong>
          </p>
        </div>
      </main>
    </Layout>
  );
}
