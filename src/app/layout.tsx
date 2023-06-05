import { AppLayout } from "~/components/AppLayout";
import { Metadata } from "next";

import "tailwindcss/tailwind.css";
import "~/styles/global.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

const description =
   "Personal dashboard for my services running in my home network.";

export const metadata: Metadata = {
   title: "Dashboard",
   description,
   openGraph: {
      title: "Personal Dashboard",
      description,
      type: "website",
      siteName: "Personal Dashboard",
      // images: [{ url: "", alt: "Profile Picture" }],
   },
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" style={{ background: "black" }}>
         <body>
            <AppLayout>{children}</AppLayout>
         </body>
      </html>
   );
}
