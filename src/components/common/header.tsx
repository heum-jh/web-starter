import Link from "next/link";

const Header = () => {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center gap-20 p-5 md:flex-row">
        <Link href="" className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Wavle</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center space-x-10 text-base md:ml-auto">
          <Link href="" className="mr-5 text-indigo-500 hover:text-indigo-300 hover:underline">
            First Link
          </Link>
          <Link href="" className="mr-5 text-indigo-500 hover:text-indigo-300 hover:underline">
            Second Link
          </Link>
          <Link href="" className="mr-5 text-indigo-500 hover:text-indigo-300 hover:underline">
            Third Link
          </Link>
          <Link href="" className="mr-5 text-indigo-500 hover:text-indigo-300 hover:underline">
            Fourth Link
          </Link>
        </nav>
        <button className="mt-4 inline-flex items-center justify-center rounded border-0 bg-gray-100 px-12 py-6 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="ml-10 h-24 w-24"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
