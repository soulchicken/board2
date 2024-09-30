import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav>
            <Link href="/">Post List</Link>
            <br />
            <Link href="/create">Create Post</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
