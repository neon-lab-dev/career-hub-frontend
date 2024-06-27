import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Career Hub",
  description: "Explore job/internships opportunities at the Career Hub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-black">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
