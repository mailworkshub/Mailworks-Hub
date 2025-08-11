export const metadata = { title: "Mailworks Hub", description: "Virtual mailbox & white-label operator suite." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen bg-white text-neutral-900"><link rel="icon" href="/favicon.ico" />{children}</body></html>);
}
