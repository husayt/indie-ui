import { AnalyticsProv } from '@/analytics-prov';
import { generateSEOTags } from '@/lib/seo';
import { Scripts } from '@/scripts';
import { RootProvider } from 'fumadocs-ui/provider';
import { Poppins } from 'next/font/google';
import type { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './global.css';

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});
export const metadata = generateSEOTags({
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth antialiased ${font.className}`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <Scripts />
      </head>
      <body className="selection:bg-zinc-800 selection:text-zinc-100 relative">
        {/* <Banner /> */}
        <RootProvider>
          <AnalyticsProv>{children}</AnalyticsProv>
        </RootProvider>
      </body>
    </html>
  );
}
