import Link from "next/link";
import { InstagramIcon, GithubIcon, FacebookIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-semibold text-white/90 mb-7">
          Contact
        </span>
        <p className="text-sm text-white/60 max-w-xl">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. or have a project
          in mind? Let's connect.
        </p>
        <div className="mt-6 text-white/80">
          <Link
            href="mailto:vy.dinh.2929@gmail.com"
            className="hover:text-[#a855f7]"
          >
            vy.dinh.2929@gmail.com
          </Link>
        </div>

        <div className="mt-6 flex items-center gap-4 text-white/80">
          <Link
            href="https://www.instagram.com/vy.dinhhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a855f7]"
          >
            <InstagramIcon size={24} />
          </Link>
          <Link
            href="https://github.com/VyD1nk1902"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a855f7]"
          >
            <GithubIcon size={24} />
          </Link>
          <Link
            href="https://www.facebook.com/vydinhhhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a855f7]"
          >
            <FacebookIcon size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
