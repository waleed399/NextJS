import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold text-lg">CloudHost</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link className="text-blue-600 hover:underline" href="/">Home</Link>
            <Link className="text-blue-600 hover:underline" href="/performance">Performance</Link>
            <Link className="text-blue-600 hover:underline" href="/reliability">Reliability</Link>
            <Link className="text-blue-600 hover:underline" href="/scale">Scale</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}