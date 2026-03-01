import NavBar from "@/src/components/main/NavBar";
import "../globals.css";
import Footer from "@/src/components/main/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <NavBar/>
   <main className="min-h-screen">
   {children}
   </main>
   <Footer/>
   </>
      
  );
}
