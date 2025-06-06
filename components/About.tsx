export default function About() {
  const data = [
    {
      title: "Who Am I",
      content:
        "I'm Mudasir Ahmad. Front-End web developer with a proven understanding of the entire web app development process, including design, testing and deployment.Background in UI/UX design on mobile and wearable platforms.",
      key: "",
    },
    {
      title: "Skills & Tools",
      content: "Devops: Chef, Docker, Aws, CI/CD",
      key: "Development: JavaScript, React, Next.js, HTML, CSS/SCSS, TailwindCSS, Node js, SQL",
    },
  ];
  return (
    <div id="about" className="container px-[1rem] sm:px-[4rem] sm:mx-auto">
      <div className="flex flex-row items-center   ">
        <div style={{ transform: "none", transformOrigin: "0% 50% 0px" }}>
          <div className="section-line bg-[#FC4370] w-16 h-1 mr-6"></div>
        </div>
        <div>
          <p className="section-category text-grey text-base font-medium">
            About
          </p>
        </div>
      </div>
      <h2 className="about-h2 lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white">
        Get a closer look at who I am.
      </h2>
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm md:flex-row-reverse">
        <div className="flex items-center justify-center ">
          <img src="/mobile_guy.svg" alt="" className="p-8 w-[20rem]" />
        </div>
        <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
          {data.map((n: any) => {
            return (
              <>
                <div className="flex flex-row items-center ">
                  <div
                    style={{ transform: "none", transformOrigin: "0% 50% 0px" }}
                  >
                    <div className="section-line bg-[#FC4370] w-10 h-1 mr-6"></div>
                  </div>
                  <div>
                    <p className="section-category text-grey text-2xl font-semibold ">
                      {n.title}
                    </p>
                  </div>
                </div>
                <div className="mt-[1rem]">
                  <p className="my-6 dark:text-gray-400 text-xl font-semibold">
                    {n.content}{" "}
                  </p>
                  <p className=" dark:text-gray-400 text-xl font-semibold">
                    {n.key}{" "}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
