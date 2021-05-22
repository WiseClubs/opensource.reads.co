export default function ContentSection() {
  return (
    <>
    <section className="relative w-full overflow-hidden">
      <div className="mt-12 mb-14">
        <div className="">
          <div className="flex flex-col items-center">
            <h2 className="max-w-2xl text-center text-3xl font-bold">
              What can I do on ReadsCo?
            </h2>
            <div className="mt-6 px-2 text-sm text-center max-w-lg text-gray-600">
            In short: read better, together, and find what to read next
            &middot; Speak with authors and readers live (in video town halls) or asynchronously (on book hubs)
            &middot; Follow other people to see what they’re reading and which ideas they’re pondering
            &middot; Create a personal library of your insights & annotations
            &middot; Find what to read next!
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative w-full overflow-hidden">
      <div className="w-full m-auto" style={{maxWidth: "1180px"}}>
        <div className="flex items-center flex-col xl:flex-row">
          <div className="flex flex-col flex-start text-center md:text-left px-4 md:p-10 md:w-8/12">
            <h2 className="max-w-lg mt-4 mb-2 text-3xl font-bold">
              Transform how you learn
            </h2>
            <div className="mt-4 text-sm text-gray-700">
              Whenever you’re reading, use the ReadsCo application to capture the most interesting passages, pen down thoughts on them and share them within the community.
            </div>
          </div>
          <div className="column align-center p-6">
            <div className="mx-auto">
              <div className="max-w-3xl mb-4">
                <img
                  className="md:flex-shrink-0 shadow-xl border-2 border-blue-300 rounded-md"
                  src="images/home/section-2-2-original.png"
                />
              </div>
              <div className="max-w-3xl">
                <img
                  className="md:flex-shrink-0 shadow-xl border-2 border-blue-300 rounded-md"
                  src="images/home/section-2-1-original.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse md:flex-row-reverse items-center justify-center md:items-start">
          <div className="flex flex-col flex-start p-4 text-center md:text-left md:p-10 md:w-8/12 mt-6 md:mt-0">
            <h2 className="max-w-lg mt-0 mb-2 text-3xl font-bold">
              Here's how ReadsCo works:
            </h2>
            <div className="flex flex-start mt-4">
              <span className="hidden md:block">&rarr;</span>
              <div className="ml-2 text-gray-700">
                <span className="text-x font-semibold">Add a book</span>
                <div className="text-xs">Add a book title so you could organise and easily track all of your notes.</div>
              </div>
            </div>
            <div className="flex flex-start mt-4">
              <span className="hidden md:block">&rarr;</span>
              <div className="ml-2 text-x text-gray-700">
                <span className="text-x font-semibold">Capture</span>
                <div className="text-xs">Snap a picture of the page of the text you’re reading whether it’s a physical book, digital book, or even an ebook.</div>
              </div>
            </div>
            <div className="flex flex-start mt-4">
              <span className="hidden md:block">&rarr;</span>
              <div className="ml-2 text-x text-gray-700">
                <span className="text-x font-semibold">Add your thoughts & Share</span>
                <div className="text-xs">Write your views and ideas within with the notes. And, share your note within the community to connect with like-minded people.</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 md:p-12">
            <img
              src="images/home/section-3.png"
              className="shadow-xl border-2 border-blue-300 rounded-md w-12/12"
            />
          </div>
        </div>

        <div className="flex items-center flex-col xl:flex-row mt-6 md:mt-0">
          <div className="flex flex-col flex-start px-4 text-center md:text-left md:p-10 w-full md:w-8/12">
            <h2 className="max-w-lg mt-4 mb-2 text-3xl font-bold">
              Remember more of what you read
            </h2>
            <div className="mt-4 text-sm text-gray-700">
              Engage in active reading. The more you write about and discuss the ideas you read, the more likely you are to remember them
            </div>
          </div>
          <div className="column align-center p-6">
            <img
              src="images/home/section-2-1.png"
              alt=""
              className="shadow-xl border-2 border-blue-300 rounded-md w-9/12 m-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="relative w-full overflow-hidden md:mt-12 mt-6 bg-blue-700">
      <div className="m-auto md:mt-12 mt-12 md:mb-12 mb-6" style={{maxWidth: "1180px"}}>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="max-w-lg md:text-6xl text-3xl md:px-0 px-4 md:m-auto mx-2 text-center text-white font-bold" style={{maxWidth: "740px"}}>
              Explore what we're reading
            </h1>
            <a href="https://t.me/joinchat/UCTJGj30lkT_2thC" className="text-xl mt-6 md:p-6 p-4 md:px-8 px-6 bg-white text-blue-600 rounded-xl shodow-2xl font-bold">
              Join community!
            </a>
            <div className="text-xs mt-md text-gray-400 mt-2">
              Join Telegram group and find like minded IndieHackers
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}