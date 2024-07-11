import { Toaster } from "sonner";
import "./globals.css";
import { ReactQueryClientProvider } from "@/providers/QueryClientProvider";
import TopLoader from "@/components/TopLoader";
import StoreProvider from "@/providers/StoreProvider";
import AuthProvider from "@/providers/AuthProvider";

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
      <StoreProvider>
        <html lang="en" className="bg-white text-black">
          <body>
            <AuthProvider>
              {children}
              <Toaster position="top-right" richColors />
              <TopLoader />
            </AuthProvider>
          </body>
        </html>
      </StoreProvider>
    </ReactQueryClientProvider>
  );
}
