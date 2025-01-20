import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
} from "react-icons/si";
import { SingleSkill } from "./SingleSkill";
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

export const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("down", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
