// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tribute to Mum",
  description: "A memorial tribute site built with Next.js, TypeScript, and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 font-sans">
        {/* Global Header */}
        <header className="bg-white shadow-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">In Loving Memory</h1>
            <nav className="space-x-4">
              <a href="/tribute" className="text-gray-700 hover:text-gray-900">
                Tribute
              </a>
              <a href="/gallery" className="text-gray-700 hover:text-gray-900">
                Photos
              </a>
              <a href="/messages" className="text-gray-700 hover:text-gray-900">
                Messages
              </a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="max-w-5xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
            © 2025 Tribute to Mum. Built with ❤️ by family & friends.
          </div>
        </footer>
      </body>
    </html>
  );
}