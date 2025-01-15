import { Footer } from '@/components/footer';
import { Header } from '@/components/mbcl/header';



//======================================
export default function FormBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-col-center w-full min-h-screen">
      <Header />
      <div className="h-full grow w-full px-2 md:px-4 py-3">
        
        {children}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

