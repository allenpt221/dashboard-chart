import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <p className="mb-4 text-lg text-gray-700 max-w-lg">
        Welcome! Access your dashboard to monitor key metrics, manage data, and gain valuable insights in real time.
      </p>
      <Link
        href="/dashboard"
        className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-black/60 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
