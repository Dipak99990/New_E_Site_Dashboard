import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">
          Oops! The page you are looking for could not be found.
        </p>
        <Link href="/" legacyBehavior>
          <a className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded transition-colors duration-300">
            Go back to homepage
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
