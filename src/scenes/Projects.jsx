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
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Checkout my <a className="text-green hover:bg-green hover:text-yellow" href={`https://github.com/CedarCooper/${title.split(" ").join("")}` } target="_blank" rel="noreferrer noopener">Github</a> to learn more about my {title}!
        </p>
      </div>
      <img src={`assets/${projectTitle}.jpg`} alt={projectTitle} className="h-48 w-80" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="mt-40 pt-48 pb-20">
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
          <p className="font-soon font-semibold text-4xl">&#x2B50;
            <span className="text-green"> PRO</span>JECTS &#x2B50;
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Below is a list of some of the projects I've been working on. I believe always learning, following your passions, 
          and supporting the open source community is essential to a healthy relationship with data.
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
          <Project title="Crunchy Case Study" />
          <Project title="data2" />
          <Project title="data2" />

          {/* ROW 2 */}
          <Project title="data3" />
          <Project title="data" />
          <Project title="data2" />
         
        </motion.div>
        </div>  
    </section>
  );
};

export default Projects;