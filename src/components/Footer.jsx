// import React from "react";
// import imagePaths from "../data/imagesPath.json";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8 w-full">
//       <div className="container mx-auto relative">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="mb-4 md:mb-0">
//             <div className="foot_info">
//               <a className="navbar-brand" href="https://cybergen.com">
//                 <img
//                   src="https://cybergen.com/uploads/images/footer_logo.png?v=1719999801"
//                   alt="Logo"
//                   className="w-48 mb-4"
//                 />
//               </a>
//               <ul className="space-y-4 text-sm">
//                 <li className="flex items-center">
//                   <i className="bi bi-house mr-3"></i>
//                   <a
//                     href="https://www.google.com/maps/dir//2875+S+Ocean+Blvd+%23200+Palm+Beach,+FL+33480+USA/@26.6163634,-80.038212,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d8d9c696155555:0x1c62d8017f4ff797"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     <span>
//                       Florida Office
//                       <br />
//                       2875 S Ocean Blvd, Ste. 200
//                       <br />
//                       Palm Beach, FL 33480
//                     </span>
//                   </a>
//                 </li>
//                 <li className="flex items-center">
//                   <i className="bi bi-envelope mr-3"></i>
//                   <a
//                     href="mailto:info@cybergen.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     <span>info@cybergen.com</span>
//                   </a>
//                 </li>
//                 <li className="flex items-center">
//                   <i className="bi bi-phone mr-3"></i>
//                   <a
//                     href="tel:+1-800-561-2713"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     <span>+1-800-561-2713</span>
//                   </a>
//                 </li>
//               </ul>
//               <div className="social_icons flex space-x-4 mt-4">
//                 <a
//                   href="https://twitter.com/TheCyberGen"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a
//                   href="https://www.facebook.com/thecybergen/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/company/the-cyber-generation/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/cybergen1team/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a
//                   href="https://www.youtube.com/channel/UCnlC6DWQ_dXpSebcZ1YLnzg"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-youtube"></i>
//                 </a>
//               </div>
//               <div className="terms mt-4">
//                 <span className="mr-3">
//                   <i className="fal fa-file-contract"></i>
//                 </span>
//                 <a href="terms-and-conditions" className="hover:underline">
//                   Terms and Conditions
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <div className="links">
//               <div className="cont">
//                 <h6 className="link_title font-bold">Services</h6>
//                 <ul className="space-y-3 text-sm">
//                   <li>
//                     <a
//                       href="https://cybergen.com/cyber-security-solutions"
//                       className="hover:underline"
//                     >
//                       Cyber Security Solutions
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/software-development"
//                       className="hover:underline"
//                     >
//                       Software Development
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/digital-branding-services"
//                       className="hover:underline"
//                     >
//                       Digital Branding
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/managed-services"
//                       className="hover:underline"
//                     >
//                       Managed Services
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/professional-services"
//                       className="hover:underline"
//                     >
//                       Professional Services
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/strategic-staffing"
//                       className="hover:underline"
//                     >
//                       Strategic Staffing
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/cybergen-academy"
//                       className="hover:underline"
//                     >
//                       Technical Training
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/ai"
//                       className="hover:underline"
//                     >
//                       Artificial Intelligence
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/procurement-services"
//                       className="hover:underline"
//                     >
//                       Procurement Services
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <div className="links">
//               <div className="cont">
//                 <h6 className="link_title font-bold">Information</h6>
//                 <ul className="space-y-3 text-sm">
//                   <li>
//                     <a
//                       href="https://cybergen.com/about-us"
//                       className="hover:underline"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/blog"
//                       className="hover:underline"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/pressrelease"
//                       className="hover:underline"
//                     >
//                       Press Release
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/careers"
//                       className="hover:underline"
//                     >
//                       Careers
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/contact-us"
//                       className="hover:underline"
//                     >
//                       Contact Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://cybergen.com/partner-with-us"
//                       className="hover:underline"
//                     >
//                       Partner With Us
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <div className="foot_subscribe">
//               <h6 className="link_title font-bold">Newsletter</h6>
//               <p className="text-sm">
//                 Register now to get the latest updates on promotions.
//               </p>
//               <form id="Newsletter" noValidate>
//                 <div className="input-group my-4 flex">
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control bg-gray-800 text-white border border-gray-700 p-2 rounded-l"
//                     placeholder="Enter your email"
//                     aria-label="Enter your email"
//                     aria-describedby="button-addon2"
//                     control-id="ControlID-8"
//                   />
//                   <button
//                     className="btn butn-gard border-0 text-white px-3 bg-gray-700 hover:bg-gray-600 rounded-l"
//                     type="submit"
//                     id="button-addon2"
//                     control-id="ControlID-9"
//                   >
//                     <span>Subscribe</span>
//                   </button>
//                 </div>
//                 <div
//                   className="col-lg-12 mt-2 alert-class alert-danger text-center error-msg"
//                   id="error-msg"
//                 ></div>
//                 <div
//                   className="col-lg-12 text-center msg"
//                   id="footer-msg"
//                 ></div>
//               </form>
//               <p className="fst-italic text-xs">
//                 By subscribing, I have accepted the{" "}
//                 <a
//                   href="https://cybergen.com/privacy-policy"
//                   className="text-decoration-underline"
//                 >
//                   Policy
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 text-center">
//           <div className="foot">
//             <p className="text-sm">
//               © 2024 Copyrights by <b className="text-white">CyberGen.</b> All
//               Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import imagePaths from "../data/imagesPath.json";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full px-[8rem]">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3 mb-4 md:mb-0">
            <div className="foot_info">
              <a className="navbar-brand" href="https://cybergen.com">
                <img
                  src="https://cybergen.com/uploads/images/footer_logo.png?v=1719999801"
                  alt="Logo"
                  className="w-48 mt-[3.94rem] mb-[1.8rem]"
                />
              </a>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center">
                  <img
                    src={imagePaths.Footer.house}
                    alt="house"
                    className="w-6 h-6 mr-3"
                  />
                  <a
                    href="https://www.google.com/maps/dir//2875+S+Ocean+Blvd+%23200+Palm+Beach,+FL+33480+USA/@26.6163634,-80.038212,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d8d9c696155555:0x1c62d8017f4ff797"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-white font-poppinsRegular text-[0.7rem] font-normal hover:text-customBlue">
                      Florida Office 2875 S Ocean Blvd, Ste.
                      <br />
                      200 Palm Beach, FL 33480
                    </span>
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    src={imagePaths.Footer.envelope}
                    alt="envelope"
                    className="w-6 h-6 mr-3"
                  />
                  <a
                    href="mailto:info@cybergen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-white font-poppinsRegular text-xs font-normal hover:text-customBlue">
                      info@cybergen.com
                    </span>
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    src={imagePaths.Footer.phone}
                    alt="phone"
                    className="w-6 h-6 mr-3"
                  />
                  <a
                    href="tel:+1-800-561-2713"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-white font-poppinsRegular text-xs font-normal hover:text-customBlue">
                      +1-800-561-2713
                    </span>
                  </a>
                </li>
              </ul>
              <div className="social_icons flex space-x-4 mt-4">
                <a
                  href="https://twitter.com/TheCyberGen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-customBlue"
                >
                  <div className="w-[1.75rem] h-[1.75rem] rounded-full bg-[#454545] flex items-center justify-center hover:bg-customBlue">
                    <img
                      src={imagePaths.Footer.twitter}
                      alt="twitter"
                      className="w-3 h-3"
                    />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/thecybergen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-customBlue"
                >
                  <div className="w-[1.75rem] h-[1.75rem] rounded-full bg-[#454545] flex items-center justify-center hover:bg-customBlue">
                    <img
                      src={imagePaths.Footer.facebook}
                      alt="facebook"
                      className="w-3 h-3"
                    />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-cyber-generation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-customBlue"
                >
                  <div className="w-[1.75rem] h-[1.75rem] rounded-full bg-[#454545] flex items-center justify-center hover:bg-customBlue">
                    <img
                      src={imagePaths.Footer.linkedin}
                      alt="linkedin"
                      className="w-3 h-3"
                    />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/cybergen1team/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-customBlue"
                >
                  <div className="w-[1.75rem] h-[1.75rem] rounded-full bg-[#454545] flex items-center justify-center hover:bg-customBlue">
                    <img
                      src={imagePaths.Footer.instagram}
                      alt="instagram"
                      className="w-3 h-3"
                    />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCnlC6DWQ_dXpSebcZ1YLnzg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-customBlue"
                >
                  <div className="w-[1.75rem] h-[1.75rem] rounded-full bg-[#454545] flex items-center justify-center hover:bg-customBlue">
                    <img
                      src={imagePaths.Footer.youtube}
                      alt="youtube"
                      className="w-3 h-3"
                    />
                  </div>
                </a>
              </div>
              <div className="terms mt-4 flex items-center">
                <img
                  src={imagePaths.Footer.fileContract}
                  alt="file contract"
                  className="w-6 h-6 mr-3"
                />
                <a
                  href="terms-and-conditions"
                  className="hover:text-customBlue text-white font-poppinsRegular text-xs font-normal"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 mb-4 ml-12 md:mb-0 ">
            <div className="links">
              <div className="cont">
                <h6 className="link_title font-bold text-white font-poppinsRegular text-lg font-bold mt-[6.75rem] mb-[1.8rem]">
                  Services
                </h6>
                <ul className="space-y-4 text-[0.7rem]">
                  <li>
                    <a
                      href="https://cybergen.com/cyber-security-solutions"
                      className="hover:text-customBlue text-white"
                    >
                      Cyber Security Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/software-development"
                      className="hover:text-customBlue text-white"
                    >
                      Software Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/digital-branding-services"
                      className="hover:text-customBlue text-white"
                    >
                      Digital Branding
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/managed-services"
                      className="hover:text-customBlue text-white"
                    >
                      Managed Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/professional-services"
                      className="hover:text-customBlue text-white"
                    >
                      Professional Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/strategic-staffing"
                      className="hover:text-customBlue text-white"
                    >
                      Strategic Staffing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/cybergen-academy"
                      className="hover:text-customBlue text-white"
                    >
                      Technical Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/ai"
                      className="hover:text-customBlue text-white"
                    >
                      Artificial Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/procurement-services"
                      className="hover:text-customBlue text-white"
                    >
                      Procurement Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 mb-4 ml-12 md:mb-0">
            <div className="links">
              <div className="cont">
                <h6 className="link_title font-bold text-white font-poppinsRegular text-lg font-bold mt-[6.75rem] mb-[1.8rem]">
                  Information
                </h6>
                <ul className="space-y-4 text-[0.7rem]">
                  <li>
                    <a
                      href="https://cybergen.com/about-us"
                      className="hover:text-customBlue text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/blog"
                      className="hover:text-customBlue text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/pressrelease"
                      className="hover:text-customBlue text-white"
                    >
                      Press Release
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/careers"
                      className="hover:text-customBlue text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/contact-us"
                      className="hover:text-customBlue text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/partner-with-us"
                      className="hover:text-customBlue text-white"
                    >
                      Partner With Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-3  ">
            <div className="foot_subscribe">
              <h6 className="link_title font-bold text-white font-poppinsRegular text-lg font-bold mt-[6.75rem] mb-[1.8rem]">
                Newsletter
              </h6>
              <p className="text-white font-poppinsRegular text-xs font-normal">
                Register now to get the latest updates on promotions.
              </p>
              <form id="Newsletter" noValidate>
                <div className="input-group my-4 flex relative">
                  <input
                    type="email"
                    name="email"
                    className="bg-[#333333] text-white border border-gray-700 p-2 rounded-l w-[18.7465rem] h-[2.39188rem] font-poppinsRegular text-xs font-normal placeholder-white focus:border-[#959595]"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    aria-describedby="button-addon2"
                    control-id="ControlID-8"
                  />
                  <button
                    className="absolute right-0 top-0 h-[2.39188rem] w-[6.7955rem] flex-shrink-0 rounded-[0.625rem] bg-gradient-to-b from-[#959595] to-[#474747] text-white px-3"
                    type="submit"
                    id="button-addon2"
                    control-id="ControlID-9"
                  >
                    <span>Subscribe</span>
                  </button>
                </div>
                <div
                  className="col-lg-12 mt-2 alert-class alert-danger text-center error-msg"
                  id="error-msg"
                ></div>
                <div
                  className="col-lg-12 text-center msg"
                  id="footer-msg"
                ></div>
              </form>
              <p className="italic text-xs">
                By subscribing, I have accepted the{" "}
                <a
                  href="https://cybergen.com/privacy-policy"
                  className="hover:text-customBlue underline"
                >
                  Policy
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 mt-8" />
        <div className="mt-8 mb-8 text-center">
          <div className="foot">
            <p className="text-white font-montserrat text-xs font-normal">
              © 2024 Copyrights by CyberGen. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
