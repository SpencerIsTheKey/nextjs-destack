import Head from 'next/head'
import Layout, { siteTitle } from '../components/utils/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import TileGrid from '../components/home/tilegrid'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Test site for the Bongarde components</p>
        <p>
          (This is based off the sample website that was built using{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <div className={utilStyles.flex_row}>
          <TileGrid
            gridDimensions='1x2'
            images={[
              "https://hrinsider.s3.amazonaws.com/wp-content/uploads/2020/05/30154408/Canada_court_cases1-300x204.jpg",
              "https://hrinsider.s3.amazonaws.com/wp-content/uploads/2021/08/30131805/meeting-273857_1920.jpg"
            ]}
            links={[
              '/static/test',
              '/static/test2'
            ]}
            labels={[
              'Builder Page 1',
              'Builder Page 2'
            ]}
            tileHeight={200}
            tileWidth={500}
            gridMargins={20}
          />
          <TileGrid 
            gridDimensions='3x2'
            images={[
              'https://hrinsider.s3.amazonaws.com/wp-content/uploads/2021/08/16115702/man-5723449_1920-300x210.jpeg',
              'https://hrinsider.s3.amazonaws.com/wp-content/uploads/2021/08/16115844/hammer-620011_1920-300x225.jpeg',
              'https://hrinsider.s3.amazonaws.com/wp-content/uploads/2022/04/28152418/online-gfb9f28126_1920-300x178.jpg',
              'https://ilt-2021.s3.amazonaws.com/wp-content/uploads/2021/06/29231158/Writing-a-checklist-in-notebook-1024x681.jpg',
              'https://hrinsider.s3.amazonaws.com/wp-content/uploads/2021/10/26101723/right-g55213e9f5_1920-300x200.jpg',
              'https://hrinsider.s3.amazonaws.com/wp-content/uploads/2021/08/16121201/legal-1302034_1920-300x169.jpeg'
            ]}
            links={[
              "https://hrinsider.ca/category/quizzes/",
              "https://hrinsider.ca/category/tools/laws-legislation/",
              "https://hrinsider.ca/category/tools/recorded/",
              "https://hrinsider.ca/category/type-checklist/",
              "https://hrinsider.ca/category/cases-compliance-alerts/",
              "https://hrinsider.ca/category/special-reports/"
            ]}
            labels={[
              'Quizzes',
              'Laws & Legislation',
              'Webinars On Demand',
              'Checklists',
              'Cases & Compliance Alerts',
              'Special Reports'
            ]}
            tileHeight={200}
            tileWidth={300}
            gridMargins={20}
          />
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
