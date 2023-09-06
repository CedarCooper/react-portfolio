const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/cedar-cooper/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" className="h-10 w-10"/>
        </a>

        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/CedarCooper"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/icons2/github.svg" className="h-10 w-10" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;