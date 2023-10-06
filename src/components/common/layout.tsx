import { cn } from "src/core/function/cn";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};
const Layout = ({ children, className }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={cn("min-h-full", className)}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
