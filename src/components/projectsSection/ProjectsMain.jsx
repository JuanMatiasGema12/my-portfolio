import { ProjectsText } from "./ProjectsText";
import { SingleProject } from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Snappy Friends",
    year: "Dec2024",
    align: "right",
    image: "/images/snappyIMG.png",
    link: "https://snappyfriends.vercel.app/",
  },
  {
    name: "Ecommerce API",
    year: "Oct2024",
    align: "left",
    image: "/images/ecommerceAPI.png",
    link: "https://pm-4.onrender.com/api",
  },
];

export const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};
