import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import Header from './Components/Header';
import ThemeWrapper from './Theme';
import ReactQueryPvorider from './StateManagement/Provider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Zoom } from 'react-toastify';
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'WebWizard',
  description:
    "Powered by Next.js, WebWizard's programming courses are designed to deliver comprehensive learning experiences. From beginners to advanced coders, our platform offers a practical approach to mastering new and essential programming concepts. With a focus on hands-on training and active exercises, our courses aim to equip you with the skills necessary for developing sophisticated and responsive software applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.className}  bg-gray-100 text-black  
        dark:bg-black dark:text-white capitalize`}
      >
        <ReactQueryPvorider>
          <ThemeWrapper>
            <Header />
            <main className="mt-[4.52rem]">{children}</main>
            <ToastContainer
              draggablePercent={60}
              transition={Zoom}
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ThemeWrapper>
        </ReactQueryPvorider>
      </body>
    </html>
  );
}
