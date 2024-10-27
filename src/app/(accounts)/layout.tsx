import Footer from "@/components/layout/footer";
import { ReactNode } from "react";

const AccountsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="relative h-[calc(100dvh)]">
        <img
          src="/images/bg.svg"
          className="pointer-events-none absolute bottom-0 w-full select-none"
        />
        {children}
      </div>
      <Footer/>
    </main>
  );
};

export default AccountsLayout;
