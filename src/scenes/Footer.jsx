import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-50 bg-green pt-5 pb-7">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="flex justify-center text-center">
          <p className="font-soon text-md text-white">
            © 2023 Cedar Cooper. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;