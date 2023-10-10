import Link from "next/link";

export default function Home() {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-indigo-500">ROOF PARTY POLAROID</h2>
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom prism food truck ugh
            squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">Shooting Stars</h2>
            <p className="mb-4 text-base leading-relaxed">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
            </p>
            <Link href="" className="inline-flex items-center text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">The Catalyzer</h2>
            <p className="mb-4 text-base leading-relaxed">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
            </p>
            <Link href="" className="inline-flex items-center text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">Neptune</h2>
            <p className="mb-4 text-base leading-relaxed">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
            </p>
            <Link href="" className="inline-flex items-center text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">Melanchole</h2>
            <p className="mb-4 text-base leading-relaxed">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
            </p>
            <Link href="" className="inline-flex items-center text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        <button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 px-16 py-4 text-lg text-white hover:bg-indigo-600 focus:outline-none">
          Button
        </button>
      </div>
    </section>
  );
}
