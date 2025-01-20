import { Link } from "react-scroll";
import { GoArrowDownRight } from "react-icons/go";

export const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
      <Link
        to="contact"
        smooth={true}
        spy={true}
        duration={600}
        offset={-130}
        className="flex items-center gap-1"
      >
        Hire Me
        <div className="sm:hidden md:block">
          <GoArrowDownRight />
        </div>
      </Link>
    </button>
  );
};
