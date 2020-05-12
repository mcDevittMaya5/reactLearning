import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello My Name is Maya, i am an appliaction developer in worday. I am currently learning how to develop web pages using
            next.js!!!</p>
        <p>

        <a target        </p>
      </section>
    </Layout>
  )
}

