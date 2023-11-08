import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

// fonts
export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--inter',
});
export const bahijHelvetica = localFont({
  src: [
    {
      path: '../../public/fonts/bahij_helvetica_light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/bahij_helvetica.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/bahij_helvetica_bold.woff2',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--bahij-helvetica',
});
