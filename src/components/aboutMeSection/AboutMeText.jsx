import { Link } from "react-scroll";

export const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
      <h2 className="text-6xl text-cyan mb-10 ">About Me</h2>
      <p className="text-white">
        I am a full-stack developer, deeply attracted to continuous learning and
        the constant challenge of problem-solving, as that is what makes one
        stronger. I possess strong skills in JavaScript, React, Next.js, and
        Nest.js, with experience in creating web applications from front to
        back. Additionally, my soft skills in problem-solving, teamwork, and
        adaptability, thanks to my 5 years of experience as customer service
        staff in a restaurant, allow me to collaborate effectively across
        workplace environments. What drives me is the opportunity to contribute
        to high-impact projects, as that would create positive effects on me as
        a person. My goal is to continue growing professionally while making
        meaningful contributions to the tech industry and the community I serve.
      </p>
      <button className="border border-darkOrange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-darkOrange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan ">
        <Link
          to="projects"
          smooth={true}
          spy={true}
          duration={500}
          offset={-130} // Ajuste de desplazamiento para no quedar debajo del navbar
          className="text-lg font-bold  text-white hover:text-orange cursor-pointer"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};
