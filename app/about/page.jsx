import Link from "next/link";

export const metadata = {
  title: "About Dashboard",
  description:"Learn about the Dashboard App built using Next.js and Tailwind CSS.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white border-b px-4 sm:px-6 md:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <Link href="/" className="font-bold text-xl text-gray-800">
          Dashboard App
        </Link>

        <Link
          href="/dashboard"
          className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Dashboard
        </Link>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <Link
          href="/"
          className="inline-block text-sm bg-amber-400 px-5 py-2 rounded text-blue-600 hover:bg-white mb-6 transition"
        >
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            About Dashboard
          </h1>

          <p className="text-gray-700 mb-4 leading-7">
            This dashboard is built using <strong>Next.js</strong> and{" "}
            <strong>Tailwind CSS</strong>.
          </p>

          <h2 className="text-xl font-semibold text-black mb-3">Features</h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Responsive Sidebar</li>
            <li>Reusable Navbar</li>
            <li>Reusable UI Components</li>
            <li>Cards, Buttons, Badges</li>
            <li>Modal Component</li>
            <li>Search Input</li>
          </ul>

          <div className="mt-6">
            <p className="text-gray-600">
              Version: <strong>1.0.0</strong>
            </p>
          </div>
        </div>
        <Link
          href="/dashboard"
          className="inline-block mt-8 bg-blue-600 text-white  px-6 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          Open Dashboard
        </Link>
      </div>
    </div>
  );
}
