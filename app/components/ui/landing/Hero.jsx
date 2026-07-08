import Link from "next/link";
import Button from "@/app/components/ui/Button";

export default function Hero() {
  return (
    <section>
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row ">
      {/* Left Side */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-5xl font-bold">
          Manage your team's work,
          <strong className="text-blue-500">with easy</strong>
        </h1>

        <p className="mt-4 text-gray-600">
          One dashboard for tasks, analytics, and your whole team.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <Link href="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Open Dashboard
            </Button>
          </Link>

          <Link href="/about">
            <Button className="bg-gray-700 hover:bg-gray-800">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <img
          src="https://img.appmaster.io/p/yUpUhDj7JgI/rs:fit:640:0/q:70/f:webp/plain/019b86d6-bd35-7e11-8dbc-335896b200fc/blog/019be238-f710-7710-b221-ed4ca844df3b/019be238f9.webp"
          alt="Dashboard Preview"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
    </div>
    </section>
  );
}
