import { useRouter } from 'next/router'
import Head from 'next/head'
import Nav from './nav'

export const siteTitle = 'ReadsCo'

export default function Layout({ children }) {
  const canonicalURL = `https://reads.co${useRouter().pathname}`;
  return (
    <div>
      <Head>
        <link rel="icon" href="https://reads.co/favicon.ico" />
        <meta
          name="description"
          content="Whenever you’re reading, use ReadsCo to note down the most interesting passages to save for later and to share with the community"
        />
        <meta
          name="og:url"
          content={`https://reads.co`}
        />
        <meta
          name="og:type"
          content={`website`}
        />
        <meta
          name="og:description"
          content={`Whenever you’re reading, use ReadsCo to note down the most interesting passages to save for later and to share with the community`}
        />
        <meta
          name="og:image"
          content={`https://reads.co/images/bg.jpeg`}
        />
        <meta name="og:title" content={`${siteTitle} | Enrich your learning experience | Build better, together`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalURL} />
      </Head>
      <header className="fixed w-full flex px-2 py-4 items-center justify-center" style={{zIndex: 1, backgroundImage:"-webkit-gradient(linear,left top,left bottom,from(#fff),to(hsla(0,0%,100%,0)))"}}>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  )
}