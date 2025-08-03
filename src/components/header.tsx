import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-col gap-2">
            <Link className="text-blue-500" href="/performance">Performance </Link>
            <Link className="text-blue-500" href="/reliability">Reliability</Link>
            <Link className="text-blue-500" href="/scale">Scale</Link>
            <Link className="text-blue-500" href="/">Home</Link>
        </div>
    )
}