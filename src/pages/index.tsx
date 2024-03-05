import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return <main className={inter.className}></main>;
};

export default HomePage;
