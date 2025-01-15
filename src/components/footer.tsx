import { LogoLink } from '@/components/logo';

//======================================
export const Footer = () => {
  return (
    <footer className="h-16">
      <div className="border-t max-w-container w-full mx-auto flex-row-end pt-4 px-2 gap-3">
        <LogoLink />
        
        <div className="flex flex-1 flex-row items-center gap-2 md:gap-3 justify-end">
         
        </div>
      </div>
    </footer>
  );
};
