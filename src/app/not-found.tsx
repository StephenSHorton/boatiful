import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1">
      <h2 className="font-semibold">{`Oops! Looks like this page doesn't exist`}</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}
