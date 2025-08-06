import { Inter, Inria_Serif } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inria_serif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Super Coffee",
  description: "Seja bem-vindo ao Super Coffee.",
  openGraph: {
    title: "Super Coffee",
    description: "Seja bem-vindo ao Super Coffee.",
    images: "/images/pictures/about.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${inria_serif.className}`}>
        {children}
      </body>
    </html>
  );
}
