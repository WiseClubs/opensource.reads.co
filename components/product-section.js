export default function ProductSection() {
  return (
    <section className="relative w-full text-center">
      <img
        src="/images/home/books-for-founders-and-entrepreneurs.jpeg"
        srcSet="
        /images/home/books-for-founders-and-entrepreneurs.jpeg   500w,
        /images/home/books-for-founders-and-entrepreneurs.jpeg   800w,
        /images/home/books-for-founders-and-entrepreneurs.jpeg   1080w,
        /images/home/books-for-founders-and-entrepreneurs.jpeg   1521w
        "
        sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, 720px"
        data-w-id="a4177896-a5e5-6c6a-0980-01ce8ea2054a"
        style={{width: "50%", opacity: "1", maxWidth: "720px", transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}
        alt=""
        className="shadow-xl m-auto -mt-16 rounded-md border-8 border-white book-collage"
      />
    </section>
  )
  }