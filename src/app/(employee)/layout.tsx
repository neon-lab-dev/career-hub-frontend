import Footer from '@/components/Footer';
import '../globals.css';
import Navbar from '@/components/Navbar';


export default function EmployeeRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <Navbar/>
    {children}
    <Footer/>
    </div>;
}
