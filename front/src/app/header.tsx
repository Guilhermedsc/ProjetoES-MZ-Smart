import Link from "next/link";

export default function Header() {
  const linkStyles = "hover:bg-green-dark focus:bg-green-dark p-1 rounded"

  return (
    <header className="w-full h-16 bg-gray-dark">
      <nav className="w-full h-full flex justify-center items-center gap-4 text-white text-2xl font-bold">
        <Link href="/" className={linkStyles}>Início</Link>
        <Link href="/customers" className={linkStyles}>Clientes</Link>
      </nav>
    </header>
  )
}