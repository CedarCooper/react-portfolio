import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-full
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-sky before:z-[-1]"
          >
            <img
              alt="cedar standing  near a lighthouse"
              className="z-10 w-full max-w-[400px] md:max-w-[450px] drop-shadow-lg"
              src="assets/round-lighthouse.png"
            />
          </div>
        ) : (
          <img
            alt="cedar standing near a lighthouse"
            className="z-10 w-full max-w-[400px] md:max-w-[450px] drop-shadow-lg"
            src="assets/round-lighthouse.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-soon z-10 text-center md:text-start drop-shadow-md">
            Cedar {""}
            <span
              className="xs:relative xs:text-orange xs:font-semibold drop-shadow-md"
            >
              Cooper &#x1F427;
            </span>
          </p>

          <p className="mt-10 mb-7 text-md text-center md:text-start drop-shadow-md">
            Hi! My name is Cedar (like the tree) and it's great to meet you! I'm a Software Engineer and Data Analyst with 5+ years in the field with experience
            in health, e-commerce, and agriculture. I'd love to chat and have the opportunity to help your company <i>grow</i>!
          </p>
          <p>Check out my Plum <b><a href="https://secure.plum.io/p/8QWCgAJSAzWCeMPBTdW8cg" target="_blank" rel="noreferrer noopener" className="text-grass hover:bg-orange hover:text-sky drop-shadow-md underline">profile</a></b> to get to know me a bit more!</p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-grass rounded-md text-white py-3 px-7 font-soon
              hover:bg-sky transition duration-500 drop-shadow-md"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;