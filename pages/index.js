export default function Home() {
  return (
    <div className="group flex justify-center">
      <a
        href="https://github.com/hyhong-code/tailwind-nextjs-starter"
        target="_blank"
        rel="noopener noreferrer"
        className="group-hover:bg-teal-100 btn m-4 inline-block bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transform hover:scale-110 transition ease-out duration-300"
      >
        Tailwind with Nextjs
        {/* Icon from https://heroicons.com/ */}
        <svg
          className="w-4 inline-block align-middle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      </a>
    </div>
  );
}
