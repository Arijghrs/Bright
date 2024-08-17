import Button from "./Button";

const TopCathegories = () => {
  const buttons = [
    { name: "Web Dev", color: "yellow", colorr: "yelloww" },
    { name: "History", color: "yellow", colorr: "yelloww" },
    { name: "Arts", color: "yellow", colorr: "yelloww" },
    { name: "Soft skills", color: "yellow", colorr: "yelloww" },
    { name: "Design", color: "yellow", colorr: "yelloww" },
    { name: "Psychology", color: "yellow", colorr: "yelloww" },
    { name: "Science", color: "yellow", colorr: "yelloww" },
    { name: "Politics", color: "yellow", colorr: "yelloww" },
  ];

  const browseButtonProps = {
    name: "Browse courses",
    color: "yellow",
    colorr: "yelloww",
    width: "w-75",
    height: "h-15",
  };

  return (
    <section className="lg:h-[500px] max-lg:h-[800px] w-full bg-greey lg:pl-20 max-lg:p-4 lg:flex lg:gap-10 xl:gap-32 py-12">
      <div className="lg:text-start text-center">
        <h1 className="text-black text-5xl md:text-2xl lg:text-5xl font-montserrat mt-6 lg:mt-22 lg:mr-15">
          <span className="font-caprasimo">Top categories</span>
        </h1>
        <div className="w-96 mx-auto lg:mx-0">
          <p className="text-black text-base sm:text-lg md:text-xl lg:text-[20px] font-montserrat mt-6 my-4 lg:mt-14 lg:mb-16">
            With Bright, the limit is the sky as we put our best to provide you
            with all possible learning categories from dev to design to history
            and art, psychology and soft skills, and many other categories in
            order to keep everything in the reach of your click. Get started
            now!
          </p>
        </div>
        <div className="hidden lg:flex justify-start mt-8 lg:mt-0">
          <Button {...browseButtonProps} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 h-[310px] lg:w-[600px] max-lg:max-w-[600px] max-lg:mx-auto lg:mt-10 ml-24">
        {buttons.map((button, index) => (
          <Button key={index} name={button.name} color={button.color} colorr={button.colorr} width="w-50" />
        ))}
      </div>
      {/* Always displayed and centered on small screens */}
      <div className="flex justify-center mt-6 lg:hidden">
        <Button {...browseButtonProps} />
      </div>
    </section>
  );
};

export default TopCathegories;
