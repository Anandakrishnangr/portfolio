import Link from "next/link";

const ConnectMe = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row">
      <div className="flex-1 flex justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
          Connect with me!
        </h1>
      </div>

      <div className="flex-1 flex justify-center items-center text-center p-4">
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-2xl border-1 text-blue-600 hover:underline"
        >
          LinkedIn
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-2xl border-1 text-blue-600 hover:underline"
        >
          Instagram
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-2xl border-1 text-blue-600 hover:underline"
        >
          Gmail
        </Link>
      </div>
    </div>
  );
};

export default ConnectMe;
