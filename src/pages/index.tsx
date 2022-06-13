import type { NextPage } from 'next'
import Head from 'next/head'
import { Page } from '../components/Page'

const Home: NextPage = () => {
    return (
        <Page>
            <Head>
                <title>Berzan</title>
                <meta name="description" content="Berzan, builds amazing websites and apps." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </Page>
    )
}

export default Home
