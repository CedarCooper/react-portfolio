import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-25 bg-grey bg-opacity-50 pt-0.5">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
          <p className="flex justify-center text-center font-soon text-md text-white">
            © 2023 Cedar Cooper. All Rights Reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;