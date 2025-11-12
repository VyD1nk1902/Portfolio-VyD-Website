"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Sigma } from "lucide-react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const navData = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
  {
    id: 3,
    title: "Lab",
    link: "#lab",
  },
  {
    id: 5,
    title: "Project",
    link: "#project",
  },
  {
    id: 6,
    title: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Hàm xử lý click anchor – dùng GSAP ScrollSmoother
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    // Chặn hành vi mặc định của Next Link
    // console.log("clicked:", href);
    e.preventDefault();

    const smoother = ScrollSmoother.get();
    const target = document.querySelector(href) as HTMLElement | null;
    // console.log("target:", target);

    if (smoother && target) {
      // Lấy chiều cao header để trừ offset chính xác
      const header = document.querySelector("header") as HTMLElement | null;
      const offset = header?.offsetHeight ?? 80;

      // Dùng API offset() chính chủ của ScrollSmoother
      const y = smoother.offset(target, "top", true) - offset;
      // console.log("smoother:", smoother);
      smoother.scrollTo(y, true, "power3.out");
    } else if (target) {
      // fallback nếu smoother chưa load
      const offset =
        (document.querySelector("header") as HTMLElement)?.offsetHeight ?? 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#0b0415]/70 backdrop-blur-md shadow-[0_0_40px_rgba(113,39,186,0.2)]"
          : "backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl px-6 mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="font-extrabold">
          <Sigma size={40} color="#7e22ce" strokeWidth={3} />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex space-x-10 font-medium text-white">
          {navData.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              scroll={false}
              prefetch={false}
              onClick={(e) => handleAnchorClick(e, item.link)}
              className="hover:text-[#a855f7] transition duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          {navData.map((item) => (
            <div className="flex flex-col gap-3" key={item.id}>
              <Link
                href={item.link}
                scroll={false}
                prefetch={false}
                onClick={(e) => handleAnchorClick(e, item.link)}
                className="hover:text-[#a855f7] transition duration-300"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
