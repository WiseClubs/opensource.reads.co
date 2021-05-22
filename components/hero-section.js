export default function HeroSection({ children, home }) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="m-auto md:mt-36 mt-28 md:mb-36 mb-20" style={{maxWidth: "1180px"}}>
        <div className="">
          <div className="flex flex-col items-center align-center">
            <h1 className="text-center md:text-6xl text-3xl px-3 font-bold">
              Enrich your learning experience
            </h1>
            <h2 className="md:text-xl text-x text-center max-w-2xl md:mt-4 mt-2 mx-2">
              Build better, together
            </h2>
            <a href="https://reads.co/download" className="flex hover:no-underline text-xl mt-4 md:p-6 p-3 md:px-10 px-4 font-semibold bg-blue-600 text-white rounded-xl shodow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Try beta!
            </a>
            <div className="text-xs mt-md text-gray-500 mt-2">
              Join us for FREE • No credit card required
            </div>
            <div className="text-sm mt-8 md:p-0 px-3 text-center text-gray-800">
              <strong>ReadsCo</strong> is a place for collaborative <strong>book discussions</strong>.
              <br />
              We're a community of <strong>IndieHackers</strong> who see reading as an active, participatory dialogue.
            </div>
            <div className="flex flex-row items-center mt-10 w-full max-w-lg flex-wrap md:justify-between justify-around px-4 hidden" style={{maxWidth: "740px"}}>
              <span className="font-semibold text-gray-400 border-l-8 border-l-gray-500 pl-6">
                Warren Buffett was once asked about the key to success, he pointed to a stack of nearby books and said, "Read 500 pages like this every day. That's how knowledge works. It builds up, like compound interest. All of you can do it, but I guarantee not many of you will do it."
              </span>
            </div>
            <div className="flex flex-row items-center mt-16 w-full max-w-lg flex-wrap md:justify-between justify-around px-4" style={{maxWidth: "740px"}}>
              <span className="font-semibold text-gray-500 text-sm border-l-8 border-gray-300 pl-6" style={{color: "#6D6157", borderColor: "#ceb6a3"}}>
                In Just 3 Words, Elon Musk Explained How You Can Become Expert at Anything (Even Rocket Science)...
                Whenever anyone asks him how he learned to build space-traveling rockets, this is his three-word answer: "I read books."
                <a className="text-gray-700 text-sm ml-2 underline" href="https://www.inc.com/minda-zetlin/elon-musk-spacex-rockets-expert-expertise-books-reading-jim-cantrell.html" nofollow="true">read more...</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="circle"></div>
    </section>
  )
}