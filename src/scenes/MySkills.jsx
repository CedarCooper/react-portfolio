import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const Skill = (name) => {
    return ( 
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
        <img src={`/assets/icons2/${name}.png`} className="inline-block w-12 h-12 m-4" alt="" />
        <p className="font-soon opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-end drop-shadow-md text-light-grey"><b>{name}</b></p> 
      </div>
    )
  };
  // icons by Flaticon
  const skillIcons = ['Python', 'SQL', 'R', 'JavaScript', 'Excel', 'Tableau', 'React', 'Node', 'TypeScript', 'Salesforce', 'Ruby'];
  const allSkills = [];
  for (let i = 0; i < skillIcons.length; i++){
    allSkills.push(Skill(skillIcons[i]));
  };


  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-soon font-semibold text-4xl mb-5 drop-shadow-md">
          &#x1F4CA; MY <span className="text-blue">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 drop-shadow-md">
            As a certified tech enthusiast, I am always exploring new tools and technologies. Here is a little peak at the hard and soft skills
            that got me where I am today!</p><br /><br />
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-green before:z-[-1]"
            >
              <img
                alt="programming books"
                className="z-10 h-80 brightness-90"
                src="assets/books.jpg"
              />
            </div>
          ) : (
            <img alt="programming books" className="z-10" src="/assets/books.jpg" />
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-center place-items-center p-5 mt-5 drop-shadow-md">
        {allSkills}
</div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between md:items-center md:h-full py-10 mt-5 gap-32">
        {/* EMPATHY */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 drop-shadow-md">
            <div className="z-10">
              <p className="font-soon font-semibold text-5xl drop-shadow-md">01</p>
              <p className="font-soon font-semibold text-3xl mt-3 drop-shadow-md">
                Empathy
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-green absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 drop-shadow-md">
            Fostering open communication with agile methods and being understanding of individual 
            needs and circumstances allows me to meet KPIs and keep a team-focused mindset.
          </p>
        </motion.div>

        {/* CURIOSITY */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 drop-shadow-md">
            <div className="z-10">
              <p className="font-soon font-semibold text-5xl drop-shadow-md">02</p>
              <p className="font-soon font-semibold text-3xl mt-3 drop-shadow-md">
              Curiosity
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 drop-shadow-md">
            There is always more than one way to reach your goals. I try to keep that in mind when working on a project, to keep me curious of
            new tools and possibilities.
          </p>
        </motion.div>
        {/* ADAPTABILITY */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 drop-shadow-md">
            <div className="z-10">
              <p className="font-soon font-semibold text-5xl drop-shadow-md">03</p>
              <p className="font-soon font-semibold text-3xl mt-3 drop-shadow-md">
                Adaptability
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-light-grey absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 drop-shadow-md">
            Change is an inevitable step towards progress. Being receptive to new goals and alterations to current projects allows for a smooth
            transition. 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;