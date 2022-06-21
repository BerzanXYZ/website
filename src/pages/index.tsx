import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, FooterTitleBox, FooterTitlePrimary, FooterTitleSecondary, FooterWrapper } from '../components/Footer'
import { H1 } from '../components/Headings'
import { MainDiv } from '../components/Main'
import { Page } from '../components/Page'
import { SectionCards, SectionMe } from '../components/Sections'
import { ShapeBox } from '../components/ShapeBox'
import { CircleCyan, CircleSky, CircleTeal } from '../components/shapes/Circle'
import { Brand, TopBar } from '../components/TopBar'
import useMode from 'usemode'
import { ModeButton } from '../components/Button'
import { CardHor, CardVer } from '../components/Cards'

const Home: NextPage = () => {
    const mode = useMode()
    return (
        <Page>
            <Head>
                <title>Berzan</title>
                <meta name="description" content="Berzan, builds amazing websites and apps." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ShapeBox>
                <CircleTeal/>
                <CircleSky/>
                <CircleCyan/>
                <CircleSky/>
                <CircleTeal/>
                <CircleCyan/>
                <CircleTeal/>
            </ShapeBox>
            
            <TopBar>
                <Brand>Berzan</Brand>
                <ModeButton onClick={mode.toggle} isDark={mode.isDark}/>
            </TopBar>
            <MainDiv>
                <SectionMe>
                    <H1>Welcome to <br/>my world</H1>
                </SectionMe>
                <SectionCards>
                    <CardHor>The dev you need to </CardHor>
                    <CardVer>Amazing design</CardVer>
                    <CardVer>Blazingly fast</CardVer>
                    <CardHor>What would you want more</CardHor>
                </SectionCards>
            </MainDiv>
            <FooterWrapper>
                <Footer>
                    <FooterTitleBox>
                        <FooterTitlePrimary>© Berzan</FooterTitlePrimary>
                        <FooterTitleSecondary>Berzan, the developer.</FooterTitleSecondary>
                    </FooterTitleBox>
                </Footer>
            </FooterWrapper>
        </Page>
    )
}

export default Home
