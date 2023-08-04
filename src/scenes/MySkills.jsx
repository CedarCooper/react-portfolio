import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const Skill = (name) => {
    return ( 
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
        <img src={`/assets/icons/${name}.png`} className="inline-block w-12 h-12 m-4" alt="" />
        <p className="font-soon opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-end">{name}</p> 
      </div>
    )
  };

  const skillIcons = ['Python', 'SQL', 'R', 'BigQuery', 'Excel', 'Tableau', 'Sheets', 'JIRA', 'Agile', 'Salesforce'];
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
          <p className="font-soon font-semibold text-4xl mb-5">
          &#x1F4CA; MY <span className="text-green">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            As a certified tech nerd, I am always exploring new tools and technologies. Here is a little peak at the hard and soft skills
            that got me where I am today!</p><br /><br />
            <p className="text-green">P.S. Hit me up if you want to chat about how cool R's variable declarations are!</p>
          
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="yellow background with laptop showing a dashboard"
                className="z-10 h-80"
                src="assets/spread.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="/assets/spread.jpg" />
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-center place-items-center p-5 mt-5">
        {allSkills}
</div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-5 gap-32">
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-soon font-semibold text-5xl">01</p>
              <p className="font-soon font-semibold text-3xl mt-3">
                Empathy
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Fostering open communication with agile methods and being understanding of individual 
            needs and circumstances allows me to meet KPIs and keep a team-focused mindset.
          </p>
        </motion.div>

        {/* CURIOUSITY */}
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-soon font-semibold text-5xl">02</p>
              <p className="font-soon font-semibold text-3xl mt-3">
                Curiousity
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-green absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-soon font-semibold text-5xl">03</p>
              <p className="font-soon font-semibold text-3xl mt-3">
                Adaptability
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Change is an inevitable step towards progress. Being receptive to new goals and alterations to current projects allows for a smooth
            transition. 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;