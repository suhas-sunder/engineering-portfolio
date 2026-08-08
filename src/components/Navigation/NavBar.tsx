import { useCallback, useState } from "react";
import MobileNav from "./MobileNav";
import NavBtnData from "../../data/NavBtnData";
import SideNav from "./SideNav";
import ResumeLink from "./ResumeLink";
import DesktopNavItem from "./DesktopNavItem";

export default function NavBar() {
  const [openDesktopItem, setOpenDesktopItem] = useState<string | null>(null);
  const handleDesktopOpenChange = useCallback((itemId: string | null) => {
    setOpenDesktopItem(itemId);
  }, []);

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-50 w-full border-b border-slate-300 bg-[#f7f6f2] text-slate-900 shadow-[0_1px_0_rgba(15,23,42,0.03)] lg:bg-[#f7f6f2]/95 lg:backdrop-blur"
      >
        <div className="mx-auto hidden min-h-[4.5rem] w-full max-w-[100rem] items-center gap-3 px-6 lg:flex xl:gap-5 xl:px-8">
          <a
            href="/"
            aria-label="Suhas Sunder home"
            className="flex min-w-fit items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
          >
            <span className="flex h-10 w-10 items-center justify-center bg-slate-900 text-sm font-bold tracking-wider text-white">
              SS
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-slate-950">
                Suhas Sunder
              </span>
              <span className="block text-[0.8rem] font-bold uppercase tracking-[0.1em] text-teal-700">
                Engineer-in-Training (EGBC)
              </span>
            </span>
          </a>

          <ul className="ml-auto flex items-center">
            {NavBtnData.map((item) => (
              <DesktopNavItem
                key={item.id}
                item={item}
                isOpen={openDesktopItem === item.id}
                onOpenChange={handleDesktopOpenChange}
              />
            ))}
          </ul>

          <ResumeLink />
        </div>

        <MobileNav />
      </nav>

      <SideNav />
    </>
  );
}
