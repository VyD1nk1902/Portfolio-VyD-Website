"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MenuSquareIcon, Sigma } from "lucide-react";

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
    // Nếu vị trí cuộn (scrollY) > 8px => xem như user đã cuộn xuống
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    // ⚡️ 3️⃣ Gọi hàm 1 lần ngay khi component vừa render
    // để cập nhật trạng thái đúng (phòng trường hợp user load giữa trang)
    onScroll();
    // lắng nghe cuộn, {passive} tối ưu hiệu năng
    // Mỗi khi user cuộn trang, handleScroll() sẽ chạy → cập nhật isScrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    //🧹 Cleanup:
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
          {navData.map((item) => {
            return (
              <Link
                href={item.link}
                className="hover:text-[#a855f7] transition duration-300"
                key={item.id}
              >
                {item.title}
              </Link>
            );
          })}
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
          {navData.map((item) => {
            return (
              <div className="flex flex-col gap-3" key={item.id}>
                <Link
                  href={item.link}
                  className="hover:text-[#a855f7] transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
