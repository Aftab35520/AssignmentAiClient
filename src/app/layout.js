// app/layout.js
import { MyProvider } from "./ContextApi/CreateContext";
import Gradient from "./Home/Gradient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Assignment Ai</title>
      <link rel="icon" href="/favicon.png" />

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
