import React from "react";
import Link from "next/link";
import Image from "next/image";
import PhoneIcon from "@/lib/icons/phoneIcon";
import MailIcon from "@/lib/icons/mailIcon";
import LocationIcon from "@/lib/icons/locationIcon";
import TwitterIcon from "@/lib/icons/twitterIcon";
import InstagramIcon from "@/lib/icons/instagramIcon";
import DiscordIcon from "@/lib/icons/discordIcon";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from ".//index.module.css";
import Checkbox from "@/components/Checkbox";

const Contact = () => {

  return (
    <main>
      <div className={styles.container}>
        {/*Contact Us message*/}
        <div className={"text-center"}>
          <span className={"block font-['Poppins'] font-[700] text-24 md:text-40"}>
            Contact Us
          </span>
          <span className={"block font-['Poppins'] font-[500] text-14 md:text-18 text-[#717171]"}>
            Any question or remarks? Just write us a message!
          </span>
        </div>
        <div className={styles.main}>
          {/*Left side*/}
          <div className={"relative overflow-hidden"}>
            <div className={styles.leftSide}>
              <div className={"text-center md:text-left"}>
                <span className={"block font-['Poppins'] font-[600] text-20 md:text-28 text-white"}>
                  Contact Information
                </span>
                <span className={"block font-['Poppins'] font-[400] text-11 md:text-18 text-[#C9C9C9]"}>
                  Say something to start a live chat!
                </span>
              </div>
              <div className={"flex flex-col space-y-14 md:space-y-40 items-center md:items-start"}>
                <div className={"flex flex-col space-y-3.5 md:space-y-12 text-white"}>
                  <Link href={"tel:+1012 3456 789"} target={"_blank"}>
                    <div className={styles.iconLink}>
                      <div>
                        <PhoneIcon className={styles.icon}/>
                      </div>
                      <span className={styles.iconDescription}>
                        +1012 3456 789
                      </span>
                    </div>
                  </Link>
                  <Link href={"mailto:demo@gmail.com"} target={"_blank"}>
                    <div className={styles.iconLink}>
                      <div>
                        <MailIcon className={styles.icon}/>
                      </div>
                      <span className={styles.iconDescription}>
                        demo@gmail.com
                      </span>
                    </div>
                  </Link>
                  <Link
                    href={"https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@42.3467604,-71.0786931,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r?entry=ttu"}
                    target={"_blank"}>
                    <div className={styles.iconLink}>
                      <div>
                        <LocationIcon className={styles.icon}/>
                      </div>
                      <span className={`${styles.iconDescription} text-center md:text-left`}>
                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                      </span>
                    </div>
                  </Link>
                </div>
                <div className={"flex space-x-6"}>
                  <Link href={'https://twitter.com/'} target={"_blank"}>
                    <TwitterIcon className={styles.icon}/>
                  </Link>
                  <Link href={'https://www.instagram.com/'} target={"_blank"}>
                    <InstagramIcon className={styles.icon}/>
                  </Link>
                  <Link href={'https://discord.com/'} target={"_blank"}>
                    <DiscordIcon className={styles.icon}/>
                  </Link>
                </div>
              </div>
            </div>
            <div className={"absolute bottom-12 md:bottom-20 right-9 max-w-[54px] max-h-[54px] md:max-w-[138px] md:max-h-[138px] z-50"}>
              <svg width="w-full" height="h-full" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="69" cy="69" r="69" fill="#484848" fillOpacity={0.5}/>
              </svg>
            </div>
            <div
              className={"absolute -bottom-12 md:bottom-3.5 -right-14 w-[138px] h-[168px] md:w-[198px] md:h-[198px] z-10"}>
              <svg width="w-full" height="h-full" viewBox="0 0 180 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="134.5" cy="134.5" r="134.5" fill="#1A1A1A"/>
              </svg>
            </div>
          </div>
          {/*Right side*/}
          <div className={styles.rightSide}>
            <div className={"flex flex-col space-y-5 md:space-y-11"}>
              <div className={styles.input}>
                <Input
                  labelText={"First Name"}
                  type={"text"}
                />
                <Input
                  labelText={"Last Name"}
                  type={"text"}
                />
              </div>
              <div className={styles.input}>
                <Input
                  labelText={"Email"}
                  type={"email"}
                />
                <Input
                  labelText={"Phone Number"}
                  type={"number"}
                />
              </div>
            </div>
            <div className={"flex flex-col space-y-2.5 md:space-y-3.5"}>
              <span className={"font-['Poppins'] font-[600] text-14 leading-20.2"}>
                Select Subject?
              </span>
              <div className={"flex flex-row space-x-5"}>
                <div className={styles.checkbox}>
                  <Checkbox label={"General Inquir2"}/>
                  <Checkbox label={"General Inquir2"}/>
                </div>
                <div className={styles.checkbox}>
                  <Checkbox label={"General Inquir2"}/>
                  <Checkbox label={"General Inquir2"}/>
                </div>
              </div>
            </div>
            <div className={"w-full"}>
              <Input
                labelText={"Message"}
                type={"text"}
                placeholder={"Write your message.."}
              />
            </div>
            <div className={"grid justify-items-end  w-full"}>
              <div className={"w-full md:max-w-[215px] z-50"}>
                <Button
                  className={styles.button}
                  buttonType={"submit"}
                  label={"Send Message"}
                  labelColor={"white"}
                  bgColor={"black"}
                  onClick={() => alert('Message sent, thanks : )')}
                />
              </div>
              <div className={"flex justify-end -mt-5 pr-[40%] md:pr-28 z-10"}>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/letterSend.png"
                  alt="Letter Send Logo"
                  width={240}
                  height={112}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact;
