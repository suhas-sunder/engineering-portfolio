import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import NavBtnData from "../../data/NavBtnData";
import SideNav from "./SideNav";
import ResumeLink from "./ResumeLink";

export default function NavBar() {
  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-50 w-full border-b border-slate-300 bg-[#f7f6f2]/95 text-slate-900 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur"
      >
        <div className="mx-auto hidden min-h-[4.5rem] w-full max-w-[88rem] items-center gap-6 px-6 xl:flex xl:px-10">
          <a
            href="/"
            aria-label="Suhas Sunder engineering portfolio home"
            className="flex min-w-fit items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
          >
            <span className="flex h-10 w-10 items-center justify-center bg-slate-900 text-sm font-bold tracking-wider text-white">
              SS
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-slate-950">
                Suhas Sunder
              </span>
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal-700">
                Engineer-in-Training (EGBC)
              </span>
            </span>
          </a>

          <ul className="ml-auto flex items-center">
            {NavBtnData.map((data) => (
              <li key={data.id}>
                <NavLinks
                  id={data.id}
                  url={data.url}
                  type={data.type}
                  text={data.text}
                  isHashLink={data.hashLink}
                />
              </li>
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
