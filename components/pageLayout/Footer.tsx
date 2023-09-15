import React from "react";
import PhoneIcon from "@/lib/icons/phoneIcon";
import MailIcon from "@/lib/icons/mailIcon";
import LocationIcon from "@/lib/icons/locationIcon";
import Link from "next/link";
import LogoIcon from "@/lib/icons/logoIcon";
import styles from "./Footer.module.css";

const Footer = () => {

  return (
    <footer>
      <div className={styles.container}>
        <div className={"flex justify-center items-center pt-20 pb-12 w-full"}>
          <Link href={"/"}>
            <LogoIcon
              className={"cursor-pointer hover:scale-105 transition hover:duration-300"}
              fill={"white"}
              width={"w-[181px]"}
              height={"h-[44px]"}
            />
          </Link>
        </div>
        <div className={"w-full"}>
          <hr className={"bg-white"}/>
          <div className={styles.main}>
            <div className={`${styles.section} md:px-0 md:pr-2`}>
                <span className={styles.sectionDescription}>
                  Reach us
                </span>
              <div className={styles.sectionLink}>
                <Link href={"tel:+1012 3456 789"} target={"_blank"}>
                  <div className={styles.sectionIcon}>
                    <div>
                      <PhoneIcon/>
                    </div>
                    <span className={styles.link}>
                      +1012 3456 789
                    </span>
                  </div>
                </Link>
                <Link href={"mailto:demo@gmail.com"} target={"_blank"}>
                  <div className={styles.sectionIcon}>
                    <div>
                      <MailIcon/>
                    </div>
                    <span className={styles.link}>
                      demo@gmail.com
                    </span>
                  </div>
                </Link>
                <Link
                  href={"https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@42.3467604,-71.0786931,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r?entry=ttu"}
                  target={"_blank"}>
                  <div className={styles.sectionIcon}>
                    <div>
                      <LocationIcon/>
                    </div>
                    <span className={styles.link}>
                      132 Dartmouth Street Boston, Massachusetts 02156 United States
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.section}>
              <span className={styles.sectionDescription}>
                Company
              </span>
              <div className={styles.sectionLink}>
                <Link
                  href={'/about'}
                  target={"_blank"}
                  className={styles.link}
                >
                  About
                </Link>
                <Link
                  href={'/contact'}
                  target={"_blank"}
                  className={styles.link}
                >
                  Contact
                </Link>
                <Link
                  href={'/blog'}
                  target={"_blank"}
                  className={styles.link}
                >
                  Blogs
                </Link>
              </div>
            </div>
            <div className={styles.section}>
              <span className={styles.sectionDescription}>
                Legal
              </span>
              <div className={styles.sectionLink}>
                <Link
                  href={'/privacy-policy'}
                  target={"_blank"}
                  className={styles.link}
                >
                  Privacy Policy
                </Link>
                <Link
                  href={'/terms-services'}
                  target={"_blank"}
                  className={styles.link}
                >
                  Terms & Services
                </Link>
                <Link
                  href={'/terms-use'}
                  target={"_blank"}
                  className={styles.link}
                >
                  Terms of Use
                </Link>
                <Link
                  href={'/refund-policy'}
                  target={"_blank"}
                  className={styles.link}
                >
                  Refund Policy
                </Link>
              </div>
            </div>
            <div className={styles.section}>
              <span className={styles.sectionDescription}>
                Quick Links
              </span>
              <div className={styles.sectionLink}>
                <Link
                  href={'/techlabz-keybox'}
                  target={"_blank"}
                  className={styles.link}
                >
                  Techlabz Keybox
                </Link>
                <Link
                  href={'/downloads'}
                  target={"_blank"}
                  className={styles.link}
                >
                  Downloads
                </Link>
                <Link
                  href={'/forum'}
                  target={"_blank"}
                  className={styles.link}
                >
                  Forum
                </Link>
              </div>
            </div>
            <div className={"flex justify-center md:justify-end pt-10 md:pt-0 w-full col-span-1 sm:col-span-2 md:col-span-1"}>
              <div className={"pt-4 md:pt-3.5 pb-3.5 md:pb-5 px-3.5 max-w-[320px] max-h-[175px] md:max-w-1/4 md:max-h-[184px] bg-[#131313] rounded-[5px] md:rounded-[10px]"}>
                <div className={`${styles.sectionLink} md:space-y-7`}>
                  <div>
                    <span className={styles.sectionDescription}>
                      Join Our Newsletter
                    </span>
                  </div>
                  <div className={styles.cardSection}>
                    <div className={"flex items-center"}>
                      <input
                        className={"pl-2.5 w-full h-10 bg-[#1E1E1E] rounded-l-[4px] focus:outline-none"}
                        placeholder={"Your email address"}
                        type={"email"}
                        aria-label={"email"}
                        id={"footer-input"}
                      />
                      <button
                        className={"py-2.5 px-6 bg-black rounded-r-[4px] h-10 font-['Poppins'] font-[500] text-12 hover:underline"}
                        onClick={() => alert('You subscribed, thanks : )')}
                      >
                        Subscribe
                      </button>
                    </div>
                    <div>
                      <span className={"font-['Manrope'] font-[500] text-13"}>
                        * Will send you weekly updates for your better tool management.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
