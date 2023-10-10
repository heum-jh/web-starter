import { cn } from "src/core/function/cn";
import Header from "./header";
import Footer from "./footer";
import { createContext, useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};
export const SearchContext = createContext<{
  isOpen: boolean;
  handleChangeOpen: () => void;
} | null>(null);

const Layout = ({ children, className }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChangeOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <SearchContext.Provider
      value={{
        isOpen,
        handleChangeOpen,
      }}
    >
      <Header />
      <main className={cn("container", className, isOpen ? "!hidden" : "")}>{children}</main>
      <Footer className={cn(className, isOpen ? "!hidden" : "")} />
    </SearchContext.Provider>
  );
};

export default Layout;
