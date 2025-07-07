// app/layout.js
import { MyProvider } from "./ContextApi/CreateContext";
import Gradient from "./Home/Gradient";


export const metadata = {
  title: "Assignment Ai",
  description: "An AI-powered app that generates assignments in human-like handwriting format, saving time and enhancing presentation.",
  icons: {
    icon: "/favicon.png", // Ensure this is in the /public folder
  },
};
export const dynamic = 'force-dynamic'; // This ensures the layout is always re-rendered

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="AI, Assignment, Handwriting, Generation, Education, Technology" />
        <meta name="author" content="Assignment Ai" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
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
