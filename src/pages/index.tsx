import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, FooterTitleBox, FooterTitlePrimary, FooterTitleSecondary, FooterWrapper } from '../components/Footer'
import { H1 } from '../components/Headings'
import { MainDiv } from '../components/Main'
import { Page } from '../components/Page'
import { SectionCards, SectionMe, SectionSocialMedia, SectionWork } from '../components/Sections'
import { ShapeBox } from '../components/ShapeBox'
import { CircleCyan, CircleCyan2, CircleSky, CircleSky2, CircleTeal, CircleTeal2 } from '../components/shapes/Circle'
import { Brand, TopBar } from '../components/TopBar'
import useMode from 'usemode'
import { ModeButton } from '../components/Button'
import { CardHor, CardSocialMedia, CardVer, CardWork, CardWorkH, CardWorkP } from '../components/Cards'
import openInNewTab from '../utils/openwindow'

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
                <CircleSky2/>
                <CircleTeal2/>
                <CircleCyan2/>
                <CircleTeal2/>
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
                    <CardHor>The dev you need</CardHor>
                    <CardVer>Amazing designs</CardVer>
                    <CardVer>Blazingly fast</CardVer>
                    <CardHor>Modernish</CardHor>
                </SectionCards>
                <SectionWork>
                    <CardWork>
                        <CardWorkH>Frontend</CardWorkH>
                        <CardWorkP>I am very good at it!</CardWorkP>
                    </CardWork>
                    <CardWork>
                        <CardWorkH>Design</CardWorkH>
                        <CardWorkP>Guess how skilled I am at it ;)</CardWorkP>
                    </CardWork>
                    <CardWork>
                        <CardWorkH>Backend</CardWorkH>
                        <CardWorkP>Who cares about backend?</CardWorkP>
                    </CardWork>
                    <CardWork>
                        <CardWorkH>Web3</CardWorkH>
                        <CardWorkP>The future of Internet I live in.</CardWorkP>
                    </CardWork>
                    <CardWork>
                        <CardWorkH>Sports</CardWorkH>
                        <CardWorkP>Sports is definitely everything.</CardWorkP>
                    </CardWork>
                    <CardWork>
                        <CardWorkH>Smart Contracts</CardWorkH>
                        <CardWorkP>My goal is to build good dapps.</CardWorkP>
                    </CardWork>
                </SectionWork>
                <SectionSocialMedia>
                    <CardSocialMedia onClick={()=>openInNewTab("https://twitter.com/BerzanXYZ")}> Twitter </CardSocialMedia>
                    <CardSocialMedia onClick={()=>openInNewTab("https://discord.com/users/879386840719827014")}> Discord </CardSocialMedia>
                    <CardSocialMedia onClick={()=>openInNewTab("https://github.com/BerzanXYZ")}> GitHub </CardSocialMedia>
                    <CardSocialMedia onClick={()=>openInNewTab("mailto:berzan@tutanota.com")}> Email </CardSocialMedia>
                </SectionSocialMedia>
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
