import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-60 hover:bg-white transition duration-500
    z-30 flex flex-col justify-center items-center text-center p-16 text-deep-sky rounded-lg`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-xl font-playfair">{title}</p>
        <p className="mt-7">
          Checkout my <a className="text-sky bg-orange hover:text-orange hover:bg-sky" href={`https://github.com/CedarCooper/${title.split(" ").join("-")}` } target="_blank" rel="noreferrer noopener">Github</a> to learn more about {title}
        </p>
      </div>
      <img src={`assets/${projectTitle}.jpg`} alt={projectTitle} className="h-48 w-80 opacity-100 shadow-lg rounded-lg" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-60 pb-20 mt-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-soon font-semibold text-4xl drop-shadow-md">&#x1F5C2;
            <span className="text-orange"> PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 drop-shadow-md">
          Below is a list of some of the projects I've been working on. I believe always learning, following your passions, 
          and supporting the open source community is essential to a healthy relationship with technology.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="md:grid md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* ROW 1 */}
          <Project title="Docketeer" />
          <Project title="Crunchy Case Study" />
          <Project title="Study on LGBT Anxiety and Depression" /> 
          <Project title="Study on Pacific Island Landbirds" />

          {/* ROW 2 }
          <Project title="data3" />
          <Project title="data" />
          <Project title="data2" /> */}
         
        </motion.div>
        </div>  
    </section>
  );
};

export default Projects;