import React from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HeroSection from '../components/hero-section'
import ProductSection from '../components/product-section'
import ContentSection from '../components/content-section'
import Footer from '../components/footer'
import Avatar from "../components/avatar"
import Support from "../components/support"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeroSection />
      <ProductSection />
      <ContentSection />
      <Footer />
      <Avatar/>
      <Support/>
    </Layout>
  )
}