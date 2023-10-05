import { cn } from "src/core/function/cn";
import Header from "./header";
import NavigationFooter from "./navigation-footer";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};
const Layout = ({ children, className }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={cn("min-h-full", className)}>{children}</main>
      <NavigationFooter />
    </>
  );
};

export default Layout;
