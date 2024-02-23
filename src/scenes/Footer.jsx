import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-25 bg-sunny bg-opacity-80 pt-0.5">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
          <p className="flex justify-center text-center font-soon text-md text-sky">
            © 2024 Cedar Cooper. All Rights Reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;