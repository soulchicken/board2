import { ReactNode } from 'react';

export const metadata = {
  title: 'My Board',
  description: 'Next.js와 Supabase를 사용한 게시판',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header>
          <h1>My Board</h1>
          <nav>
            <a href="/">홈</a>
            <a href="/create">게시글 작성</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}