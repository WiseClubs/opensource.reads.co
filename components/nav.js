import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="relative w-full" style={{maxWidth: "1180px"}}>
      <div className="flex md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col">
          <a
            href="https://reads.co"
            aria-current="page"
            className="text-gray-900"
          >
            <div className="flex items-center">
              <span className="px-2 py-2 rounded-full">
                  <svg className="hero-logo text-blue-700 h-10 w-10 rounded" xmlns="http://www.w3.org/2000/svg"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">

                    </path>
                  </svg>
                </span>
              <span className="font-semibold">ReadsCo</span>
            </div>
          </a>
        </div>
        <div className="flex flex-row md:hidden">
            <Link
              scroll={true}
              as="https://reads.co/faq"
              href="https://reads.co/faq"
            >
              <a className="text-blue-600 text-sm no-underline hover:no-underline font-semibold mr-2">FAQs</a>
            </Link>
            <Link
              scroll={true}
              as="https://reads.co/discover"
              href="https://reads.co/discover"
            >
              <a className="text-blue-700 px-2 text-sm font-semibold">
                Discover
              </a>
            </Link>
        </div>
        
        <div className="flex flex-col hidden md:block">
          <div className="flex items-center">
            <Link
              scroll={true}
              as="https://reads.co/faq"
              href="https://reads.co/faq"
            >
              <a className="text-blue-600 text-sm no-underline font-semibold mr-4">FAQs</a>
            </Link>
            <Link
              scroll={true}
              as="https://reads.co/discover"
              href="https://reads.co/discover"
            >
              <a className="border-2 border-blue-600 text-blue-700 rounded shadow-1 px-4 text-sm py-1 font-semibold shadow-xl no-underline hover:no-underline">
                Discover
                <span data-feather="arrow-right" className="ml-2">
                    &rarr;
                  </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}