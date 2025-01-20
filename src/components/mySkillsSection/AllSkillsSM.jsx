import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "NestJs",
    icon: SiNestjs,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "webSocket",
    icon: SiSocketdotio,
  },
  {
    skill: "Node",
    icon: FaNodeJs,
  },
  {
    skill: "Express",
    icon: SiExpress,
  },
  {
    skill: "PostgreSQL",
    icon: BiLogoPostgresql,
  },
  {
    skill: "NextJs",
    icon: RiNextjsFill,
  },
  {
    skill: "React",
    icon: FaReact,
  },
];

export const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            key={{ index }}
            className="flex flex-col items-center"
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <item.icon className="text-7xl text-darkOrange"></item.icon>
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};
