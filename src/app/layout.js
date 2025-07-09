// app/layout.js
import { MyProvider } from "./ContextApi/CreateContext";
import Gradient from "./Home/Gradient";


export const metadata = {
  title: "Assignment Ai",
  description: "An AI-powered app that generates assignments in human-like handwriting format, saving time and enhancing presentation.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  keywords: "AI, Assignment, Handwriting, Generation, Education, Technology",
  authors: [{ name: "Assignment Ai", url: "https://assignmentai.help" }],
  creator: "Assignment Ai",
  openGraph: {
    title: "Assignment Ai",
    description: "An AI-powered app that generates assignments in human-like handwriting format, saving time and enhancing presentation.",
    url: "https://assignmentai.help",
    site_name: "Assignment Ai",
  },
};
export const dynamic = 'force-dynamic'; // This ensures the layout is always re-rendered

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="AI, Assignment, Handwriting, Generation, Education, Technology" />
        <meta name="author" content="Assignment Ai" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1785797053350370"
     crossorigin="anonymous"></script>
      </head>
      <body className="w-full flex justify-center relative overflow-x-hidden" suppressHydrationWarning={true} >
        <MyProvider>
          {children}
          <Gradient/>
        </MyProvider>
      </body>
    </html>
  );
}
