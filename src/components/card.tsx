import { Link } from "react-router-dom";

const card = () => {
  return (
    <div className="max-w-[25%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
        <img
          className="rounded-t-lg w-full object-cover"
          src="https://www.hubspot.com/hs-fs/hubfs/PodcastCovers23-4.png?height=240&name=PodcastCovers23-4.png"
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link
          to="/"
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-gray-500 dark:text-white"
        >
          Noteworthy technology acquisitions 2021
        </Link>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default card;
