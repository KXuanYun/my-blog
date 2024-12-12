import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <nav className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          归档
        </Link>
        <div className="flex gap-4">
          <Link href="/blog">文章</Link>
          <Link href="/about">关于</Link>
          <a href="https://github.com/qxuanyun" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
} 