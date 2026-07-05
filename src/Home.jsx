import { ArrowBigRight, ArrowRight, Award, Clock, Globe, Phone, Users2Icon } from "lucide-react";
import React from "react";
import ConsultantBtn from "./components/ConsultantBtn";
import FirstBtnPage from "./components/FirstBtnPage";
import Courses from "./components/Courses";
import Values from "./components/Values";
import Metrics from "./components/Metrics";
import Testinomial from "./components/Testinomial";
import { FaCloud, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Facebook, MessageSquare } from "react-feather";

const Home = () => {
  return (
    <div className="lg:flex dark:bg-gray-900 bg-white flex-col items-center justify-between gap-4 px-4 lg:px-8 ">
      {/* left side  */}
      <div className="lg:flex flex-col justify-center gap-4 items-center">
        <div className=" max-w-xl min-h-screen  flex flex-col items-center lg:items-baseline justify-center gap-3">
          <FirstBtnPage text1={`<>`} text2={`Full-Service IT Solutions`} />

          <div className="flex flex-col pt-3  items-baseline justify-center gap-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl dark:text-white font-bold text-center lg:text-left">
              Transforming Ideas into
            </h1>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 text-center lg:text-left">
              Digital Reality
            </p>
          </div>

          <p className="text-lg leading-8 text-gray-500 text-left mt-2">
            Junky Tech delivers cutting-edge technology solutions that drive
            innovation and business growth. From web development to AI/ML, we're
            your trusted partner in digital transformation.
          </p>

          <div className="flex px-4 flex-col lg:flex-row items-center justify-between gap-6 ">
            <div className="flex px-4   flex-col items-center justify-center mt-4">
              <span className="text-2xl font-bold text-blue-500">150+</span>
              <p className="text-md text-center font-semibold text-gray-400">
                Project Delivered
              </p>
            </div>
            <div className="flex px-4  flex-col items-center justify-center mt-4">
              <span className="text-2xl font-bold text-blue-500">98%</span>
              <p className="text-md font-semibold text-gray-400">
                Client Satisfaction
              </p>
            </div>
            <div className="flex px-4  flex-col items-center justify-center mt-4">
              <span className="text-2xl font-bold text-blue-500">24/7</span>
              <p className="text-md font-semibold text-gray-400">
                Support Available
              </p>
            </div>
          </div>

          <ConsultantBtn />
        </div>

        <div className="w-full">{/* Right Side  */}

          <section className="relative flex items-center justify-center py-16 sm:py-24 overflow-hidden w-full">

            {/* Background Pattern */}
            <div className="absolute  inset-0 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:48px_48px] opacity-20" />

            {/* Floating Shapes */}
            <div className="absolute top-20 left-10 w-16 h-16 rounded-2xl bg-blue-300/20 blur-sm" />
            <div className="absolute bottom-16 left-24 w-14 h-14 rounded-2xl bg-cyan-300/30 blur-md" />
            <div className="absolute top-1/2 right-10 w-16 h-16 rounded-2xl bg-blue-200/30 blur-md" />

            {/* Left Button */}
            <button className="absolute left-2 sm:left-10 z-20 h-12 w-12 sm:h-16 sm:w-16 rounded-2xl dark:bg-sky-950 dark:text-gray-700 bg-blue-100/50 backdrop-blur-md shadow-lg">
              ❮
            </button>

            {/* Right Button */}
            <button className="absolute right-2 sm:right-10 z-20 h-12 w-12 sm:h-16 sm:w-16 rounded-2xl dark:bg-sky-950 dark:text-gray-700 bg-blue-100/50 backdrop-blur-md shadow-lg">
              ❯
            </button>

            {/* Card */}
            <div className="relative w-full max-w-[600px] mx-4 sm:mx-6 rounded-2xl 
  transition-all duration-300
  hover:scale-105 hover:shadow-sm hover:shadow-blue-950
  border dark:border-gray-900 border-white/50 
  dark:bg-transparent bg-white/60 backdrop-blur-xl 
  shadow-[0_25px_60px_rgba(59,130,246,.18)] 
  px-6 sm:px-12 py-8 sm:py-10">
              {/* Dots */}
              <div className="flex gap-4 mb-10 sm:mb-16">
                <span className="w-3 h-3 rounded-full bg-sky-500"></span>
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-blue-700 opacity-70"></span>
              </div>

              {/* Progress */}
              <div className="w-full max-w-sm h-3 rounded-full dark:bg-transparent bg-sky-100 mb-8">
                <div className="w-3/4 h-full rounded-full dark:bg-sky-950 bg-sky-300"></div>
              </div>

              {/* Text */}
              <h3 className="text-center text-xl font-semibold  text-slate-700">
                Innovation in Motion
              </h3>
            </div>
          </section>
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-4 items-baseline justify-center mb-8 mt-20">
        <div className="flex flex-col gap-4 justify-center items-center max-w-4xl px-2 mb-8 lg:px-4">
          <FirstBtnPage text1={``} text2={`Our Services`} />

          <h1 className="text-4xl sm:text-5xl dark:text-white text-black font-bold text-center ">
            Comprehensive IT Solutions for
          </h1>
          <p className="text-4xl sm:text-5xl  text-blue-500  font-bold text-center ">
            Modern Business
          </p>
          <p className="text-lg sm:text-xl max-w-4xl leading-8 text-gray-500 text-center">
            From concept to deployment, we provide end-to-end technology
            services that drive innovation and accelerate your business growth.
          </p>
        </div>
        {/* <Courses /> */}
      </div>

      <div className="flex flex-col gap-4 justify-center items-center mt-20 px-2 mb-8 lg:px-4 w-full">
        <FirstBtnPage text1={``} text2={`About Junky Tech`} />
        <h1 className="text-4xl sm:text-5xl dark:text-white text-black font-bold text-center ">
          Building the Future with
        </h1>
        <p className="text-4xl sm:text-5xl  text-blue-500  font-bold text-center ">
          Technology & Innovation
        </p>

        <div className="flex flex-col lg:flex-row w-full gap-8 mt-16">
          <div className="flex w-full lg:w-1/2 justify-center items-center mb-8">
            <img
              src="/public/tech2.jpg"
              alt="AI"
              className="object-cover rounded-3xl w-full h-auto lg:h-125"
            />
          </div>
          <div className="flex w-full lg:w-1/2 flex-col gap-4 py-4 px-4 lg:px-8">
            <h1 className="text-2xl sm:text-3xl dark:text-white text-black font-bold text-left">
              Your Trusted Technology Partner
            </h1>
            <p className="text-gray-400 text-base leading-7 mt-2">
              At Junky Tech, we believe technology should be a catalyst for
              growth, not a barrier. Founded with a vision to democratize access
              to cutting-edge IT solutions, we've been helping businesses of all
              sizes transform their operations through innovative technology.
            </p>
            <p className="text-gray-400 text-base leading-7 mt-2">
              {" "}
              Our team of expert developers, designers, and strategists brings
              together decades of combined experience in delivering solutions
              that not only meet today's needs but anticipate tomorrow's
              challenges.
            </p>
            <p className="text-gray-400 text-base leading-7 mt-2">
              {" "}
              From startups to enterprises, we've partnered with organizations
              across the globe to build scalable, secure, and sustainable
              technology solutions that drive real business outcomes.
            </p>

            <ConsultantBtn />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 justify-center items-center mt-10 px-2 mb-8 lg:px-4 w-full">
        <h1 className="text-2xl sm:text-3xl dark:text-white text-black font-bold text-center">
          Our Core Values
        </h1>
        <p className="text-gray-500 text-center">
          The principles that guide our work and define our commitment to
          excellence.
        </p>
        <Values />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-7 mt-15 justify-between rounded-xl w-full items-center px-6 sm:px-14 py-6 border-2 dark:border-gray-950 border-gray-50">
          <Metrics
            icon={<Users2Icon className="text-blue-500 w-8 h-8" />}
            title={"50+"}
            desc={"Expert Developer"}
          />
          <Metrics
            icon={<Globe className="text-blue-500 w-8 h-8" />}
            title={"15+"}
            desc={"Countries Served"}
          />
          <Metrics

            icon={<Award className="text-blue-500 w-8 h-8" />}
            title={"150+"}
            desc={"Projects Completed"}
          />
          <Metrics
            icon={<Clock className="text-blue-500 w-8 h-8" />}
            title={"50+"}
            desc={"Years Experience"}
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 justify-center items-center mt-10 px-2 mb-8 lg:px-4">
        <div className="flex flex-col gap-4 justify-center items-center max-w-4xl px-2 mb-8 lg:px-4">
          <FirstBtnPage text1={``} text2={`Client Success Stories`} />
          <h1 className="text-4xl sm:text-5xl dark:text-white font-bold text-center lg:text-left">
            Trusted by Industry Leaders
          </h1>
          <p className="text-4xl sm:text-5xl font-bold text-blue-500 text-center">
            Worldwide
          </p>

          <p className="text-gray-500 text-center max-w-2xl">
            Don't just take our word for it. Here's what our clients say about
            working with Junky Tech and the results we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
          <Testinomial
            desc={
              "As the CMO of Biomotion Medical Technology, I want to personally extend my appreciation for the exceptional tech solutions and support provided by your team. Junkytech delivered outstanding tech solutions for our modular OT project: their expert team handled everything from systems integration to deployment with precision, enhancing infection control, scalability, and reliability in line with NABH/ASHRAE standards. Their responsiveness, technical excellence, and clear communication exceeded expectations. Thanks to their support."
            }
            name={"Albert Reo"}
            role={"founder E-bay"}
          />
          <Testinomial
            desc={"Junkytech delivered top‑tier tech solutions and flawlessly executed our Publytics integration—migrating GA data, configuring cookieless tracking, optimizing real‑time dashboards and network views—while ensuring full GDPR compliance and minimal impact on performance. Their technical finesse, prompt support, and clear communication exceeded our expectations. Thanks to their precision and reliability, Publytics now operates seamlessly, empowering us to grow with confidence and insight"}
            name={"Lorenzo Diaco"}
            role={"CEO, Publytics"}
          />
          <Testinomial
            desc={"At RodBez, we deeply appreciate the outstanding support from JunkyTech. Their team demonstrated true professionalism and technical expertise throughout our project—delivering robust mobility-platform solutions on time and within scope. Their innovative approach and proactive communication empowered us to enhance real‑time ride matching, live tracking, and fare‑estimation features seamlessly. JunkyTech's responsiveness, dedication, and quality of work made a noticeable difference in user experience and backend efficiency."}
            name={"Dilkush Kumar "}
            role={"founder Roadbez"}
          />
          <Testinomial
            desc={"Working with Junkytech was a game-changer. Their team modernized our tech infrastructure with flawless execution, boosting speed, scalability, and system reliability. From planning to delivery, every step was handled with deep expertise and clarity. They truly elevated our platform's performance—we highly recommend them to anyone seeking serious tech results."}
            name={"Sreeraj PV"}
            role={"CEO, Automoto"}
          />
          <Testinomial
            desc={"Junkytech delivered expert technical solutions to seamlessly integrate our fiat‑crypto exchange platform. Their team ensured robust API connectivity, smooth KYC/AML onboarding, and secure infrastructure deployment in full regulatory compliance with EU norms. "}
            name={"Ilya Bere"}
            role={"CEO, Fincpey"}
          />
        </div>
        <div className="flex flex-wrap justify-between items-center gap-6 rounded-2xl mt-8 mb-10  w-full p-6 sm:p-10 border-2 dark:border-gray-950 border-gray-50">
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className='text-2xl font-bold text-blue-500'>98%</span>
            <p className='text-md text-center font-semibold text-gray-400'>Client Satisfaction</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">

            <span className='text-2xl font-bold text-blue-500'>150+</span>
            <p className='text-md text-center font-semibold text-gray-400'>Project Delievered</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">

            <span className='text-2xl font-bold text-blue-500'>100+</span>
            <p className='text-md text-center font-semibold text-gray-400'>Happy Clients</p>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">

            <span className='text-2xl font-bold text-blue-500'>24/7</span>
            <p className='text-md text-center font-semibold text-gray-400'>Support Available</p>
          </div>
        </div>

        <div className="mt-10 mb-16 w-full">
          <div className='flex flex-col gap-4 justify-center items-center max-w-4xl px-2 mb-8 lg:px-4 mx-auto'>

            <h1 className='text-3xl sm:text-5xl text-black dark:text-white font-bold text-center'>Ready to Transform Your</h1>
            <h1 className='text-3xl sm:text-5xl text-blue-500  font-bold text-center mb-2'>Business with Technology?
            </h1>
            <p className='text-lg sm:text-xl max-w-4xl leading-8 text-gray-500 text-center mt-2'>Join hundreds of businesses that trust Junky Tech for their digital transformation. Let's discuss how we can help you achieve your goals with innovative technology solutions.</p>

            <div className='flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto'>

              <div className='px-8 py-2 gap-4 items-center justify-center flex text-md cursor-pointer bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300'>
                <p className='text-sm'>
                  Start Your Project
                </p>
                <ArrowRight className='w-4 h-4' />
              </div>

              <div className='px-8 py-2 text-sm gap-4 items-center justify-center flex text-md cursor-pointer hover:dark:bg-blue-950 dark:text-white dark:bg-black bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 border border-blue-200'>
                <Phone className="h-4 w-4" />
                <p >
                  Schedule Free Consultation
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div className="flex gap-2 text-sm hover:text-blue-300 cursor-pointer text-blue-400 items-center"><MessageSquare className="w-4 h-4 " />Free consultation</div>
              <div className="flex gap-2 text-sm hover:text-blue-300 cursor-pointer text-blue-400 items-center"><ArrowRight className="w-4 h-4 " />Quick Response</div>
              <div className="flex gap-2 text-sm hover:text-blue-300 cursor-pointer text-blue-400 items-center"><Phone className="w-4 h-4 " />Expert Advice</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;