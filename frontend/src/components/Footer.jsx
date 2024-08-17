
const Footer = () => {
  return (
    <section className="bg-[#F5F4FF]  lg:h-[400px] max-lg:h-[300px]  lg:px-16 lg:p-[70px] ">
      <div className=" lg:flex lg:justify-between max-lg:text-center">
        <div>
          <h4 className="font-robotoserif font-semibold lg:text-6xl max-lg:text-16xl ">Bright</h4>
          <p className="text-base text-blackish font-montserrat lg:text-start w-[348px] h-[87px] mt-2  max-lg:mx-auto ">
            BRIGHT, an e-learning platform revolutionizes learning with
            interactive education and gamification, making it easier and more
            entertaining.
          </p>
        </div>
        <div className="text-xl flex justify-between  lg:w-2/5 md:w-3/5 sm:w-[70%] max-sm:w-[100%] max-lg:mx-auto max-lg:p-6">
          <div>
            <h5 className="text-blackish font-montserrat font-semibold">
              Site map
            </h5>
            <div className="opacity-[.800000011920929]">
              <p>Home</p>
              <p>Courses</p>
              <p>Sign up</p>
              <p>Sign in</p>
              <p>Profile</p>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <h5 className="text-blackish font-montserrat font-semibold ">
              Social media
            </h5>
            <div className="opacity-[.800000011920929]">
              <p>Facebool</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
          </div>

          <div className="max-sm:hidden">
            <h5 className="text-blackish font-montserrat font-semibold ">
              Product
            </h5>
            <div className="opacity-[.800000011920929]">
              <p>Pricing</p>
              <p>Partnership</p>
              <p>Sponsors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-blackish font-montserrat font-medium text-base flex justify-between mt-20 max-sm:hidden">
        <p >
          Copyright 2023 “Bright” All rights reserved
        </p>
        <p>Powered by Dark Matter</p>
        <p >
        Terms and conditions
        </p>
        <p >
        Privacy policy
        </p>
      </div>
    </section>
  );
};

export default Footer;