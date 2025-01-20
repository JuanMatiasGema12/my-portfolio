import { FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-darkBrown py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/matias-gema-766964303/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-lightBrown p-4 rounded-full transition-all duration-300 group-hover:bg-cyan">
              <CiLinkedin className="w-8 h-8 text-white" />
            </div>
            <span className="mt-2 text-lightGrey group-hover:text-cyan transition-colors duration-300">
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/JuanMatiasGema12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-lightBrown p-4 rounded-full transition-all duration-300 group-hover:bg-orange">
              <FaGithub className="w-8 h-8 text-white" />
            </div>
            <span className="mt-2 text-lightGrey group-hover:text-orange transition-colors duration-300">
              GitHub
            </span>
          </a>
          <a
            href="https://juan-matias-gema12.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-lightBrown p-4 rounded-full transition-all duration-300 group-hover:bg-lightOrange">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <span className="mt-2 text-lightGrey group-hover:text-lightOrange transition-colors duration-300">
              CV
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
