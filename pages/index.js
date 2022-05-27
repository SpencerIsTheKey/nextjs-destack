import Head from 'next/head'
import Layout, { siteTitle } from '../components/utils/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/utils/date'
import Tile from '../components/home/tile'
import TileGrid from '../components/home/tilegrid'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
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
          gridMargins={10}
        />
        <Tile 
          image='https://hrinsider.s3.amazonaws.com/wp-content/uploads/2021/08/16113918/writing-1149962_1920-300x200.jpg'
          label='Builder Page'
          link='/static/test'
          tileHeight={200}
          tileWidth={300}
        />
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
