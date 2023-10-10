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
  type: "location" | "search" | null;
  handleChangeOpen: (type?: "location" | "search") => void;
} | null>(null);

const Layout = ({ children, className }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<"location" | "search" | null>(null);
  const handleChangeOpen = (type?: "location" | "search") => {
    switch (type) {
      case "location":
        setType("location");
        break;
      case "search":
        setType("search");
        break;
      default:
        setType(null);
        break;
    }
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
        type,
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
