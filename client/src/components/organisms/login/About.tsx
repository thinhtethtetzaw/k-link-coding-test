import { Fragment } from "react";
import LogoWhite from "@/assets/logo/LogoWhite";
import Avatar from "@/assets/img/Avatar";
import { Mail, Star } from "@/assets/icons";

const About = () => {
  return (
    <div className="flex w-full flex-col justify-between bg-blue-750 p-8 text-white lg:w-1/2">
      <div className="w-36">
        <LogoWhite />
      </div>
      <div className="mx-auto mt-10 flex flex-col items-center gap-5 px-16 lg:mt-0">
        <div className="flex gap-2">
          {[...Array(5)].map((value, index) => (
            <Fragment key={index}>
              <Star />
            </Fragment>
          ))}
        </div>
        <h5 className="text-center text-xl lg:text-3xl">
          KLink has saved us thousands of hours of work. We’re able to spin up
          projects and features much faster.
        </h5>
        <div className="flex flex-col items-center gap-2">
          <Avatar />
          <div className="text-center">
            <p>Lori Bryson</p>
            <p className="text-blue-550">Product Designer, Sisyphus</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between text-blue-550 md:flex-row">
        <p>&copy; klinkenterprise.com</p>
        <div className="flex items-center gap-2">
          <Mail />
          <p>help@klinkenterprise.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
