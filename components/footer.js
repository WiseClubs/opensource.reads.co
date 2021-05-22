export default function Footer() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="mx-2 md:mx-12 mx-3 mt-12 mb-14">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col flex-start">
              <span className="flex items-center justify-center p-2 rounded-full text-4xl" style={{background: "#dbe4ff", width: '64px', height: '64px'}}>
                <svg className="hero-logo text-blue-700 h-10 w-10 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </span>
              <a href="mailto:hello@reads.co" className="text-sm underline font-semibold text-blue-700">hello@reads.co</a>
              <div className="flex md:justify-between mt-4">
                <a href="https://twitter.com/intent/user?screen_name=reads_co" target="_blank" className="md:mr-0 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 feather feather-twitter icon" src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" alt=""><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="http://instagram.com/reads.co" target="_blank" className="md:mx-2 mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 feather feather-instagram icon" src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" alt=""><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>  
                </a>
                <a href="https://www.facebook.com/ReadsCo/" target="_blank" className="md:ml-0 ml-2">
                  <svg className="text-blue-400 feather feather-facebook icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col flex-start text-gray-700 md:mt-0 mt-6">
              <h6 className="max-w-lg mb-4 uppercase text-gray-700 text-xs font-bold">Resources</h6>
              <div className="text-sm">
                Colors by <a href="https://yeun.github.io/open-color/" target="_blank" className="text-blue-800 font-semibold">Open Color</a>
              </div>
              <div className="text-sm mt-2">
                Icons by <a href="https://feathericons.com" target="_blank" className="text-blue-800 font-semibold">Feather Icons</a>
              </div>
              <div className="text-sm mt-2">
                Illustrations by <a href="https://icons8.com/ouch" target="_blank" className="text-blue-800 font-semibold">Ouch</a>
              </div>
              <div className="text-sm mt-2">
                Built on <a href="https://nextjs.org/" target="_blank" className="text-blue-800 font-semibold">NEXT.js</a>
              </div>
            </div>
            <div className="column align-left md:mt-0 mt-6">
              <h6 className="max-w-lg mb-4 uppercase text-gray-700 text-xs font-bold">Learn more</h6>
              <div className="text-sm mt-2">
                Check Julian Shapiro’s
                <a href="https://www.julian.com/guide/growth/landing-pages" target="_blank" className="ml-1 text-blue-800 font-semibold">guide</a>
              </div>
              <div className="text-sm mt-2">
                Check out Harry’s
                <a href="https://marketingexamples.com/copywriting/tips" target="_blank" className="ml-1 text-blue-800 font-semibold">tips</a
                >
              </div>
              <div className="text-sm mt-2">
                Check out my blog
                <a href="https://thatjs.dev" target="_blank" className="ml-1 text-blue-800 font-semibold">Blog</a
                >
              </div>
            </div>
            <div className="column align-left md:mt-0 mt-6">
              <h6 className="max-w-lg mb-4 uppercase text-gray-700 text-xs font-bold">Use Lander for free</h6>
              <div className="text-sm">
                <a href="https://github.com/WiseClubs/opensource.reads.co" className="ml-1 text-blue-800 font-semibold">Clone on Github</a>
              </div>
              <div className="text-sm mt-2">
                <a href="https://github.com/nishantmendiratta" target="_blank" className="ml-1 text-blue-800 font-semibold">Follow me on Github</a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8">
            <div className="flex md:flex-row flex-col mt-8 justify-between">
              <div className="flex flex-col flex-start">
                <div className="text-gray-500 text-xs">
                  © No copyright as such. DM me on <a target="_blank" className="underline" href="https://twitter.com/thatjsdev">twitter/ThatJsDev</a> if you want boilerplate template.
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <div className="text-gray-500 text-sm mr-4">Quick links:</div>
                  <div><a href="https://reads.co/privacy" className="text-sm text-blue-800 font-semibold">Privacy Policy</a></div>
                  <div><a href="https://reads.co/terms" className="text-sm text-blue-800 font-semibold ml-3">Terms & Conditions</a></div>
                  <div><a href="https://reads.co/sitemap.xml" className="text-sm text-blue-800 font-semibold ml-3">Sitemap</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>
    </>
  )
  }