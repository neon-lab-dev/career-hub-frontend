import { Toaster } from "sonner";
import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { ReactQueryClientProvider } from "@/providers/QueryClientProvider";
import TopLoader from "@/components/TopLoader";

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
    <ReactQueryClientProvider>
      <AuthProvider>
        <html lang="en" className="bg-white text-black">
          <body>
            {children}
            <Toaster position="top-right" richColors />
            <TopLoader />
          </body>
        </html>
      </AuthProvider>
    </ReactQueryClientProvider>
  );
}
