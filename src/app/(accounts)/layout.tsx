import Footer from "@/components/layout/footer";
import { ReactNode } from "react";

const AccountsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="relative min-h-[calc(100dvh)]">
        <img
          src="/images/bg.svg"
          className="pointer-events-none absolute bottom-0 hidden w-full select-none md:block"
        />
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default AccountsLayout;
