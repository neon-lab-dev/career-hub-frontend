import "../globals.css";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function EmployeeRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
    <Sidebar/>
      <div className="w-full h-full">
      <Header/>
      {children}
      </div>
    </div>
  );
}
