import { ReactElement } from "react";
import LogoWhite from "../icons/outlishLogo/logoWhite";
import FacebookLogo from "../icons/socialMedia/facebookLogo";
import InstagramLogo from "../icons/socialMedia/instagramLogo";
import TiktokLogo from "../icons/socialMedia/tiktokLogo";

type FooterLinkCategory = {
  title: string;
  links: string[];
};

type SocialMediaLinks = {
  name: string;
  url: string;
  icon: ReactElement;
};
const footerLinks: FooterLinkCategory[] = [
  { title: "Om Outlish", links: ["Vår vision", "Om oss"] },
  { title: "Handla", links: ["Tryggt köp", "Betalning", "Leverans"] },
  {
    title: "Marketplace",
    links: ["Sälj på Outlish", "Våra partners", "Vanliga frågor"],
  },
  {
    title: "Kundservice",
    links: [
      "Kontakta oss",
      "Vanliga frågor",
      "Allmänna villkor",
      "Betalningsvillkor",
    ],
  },
];

const socialMediaLinks: SocialMediaLinks[] = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <FacebookLogo
        color={"#FFFFFF"}
        hoverColor={"#fd7e54"}
        tailwindClass={"w-10 h-10"}
      />
    ),
  },
  {
    name: "Tiktok",
    url: "https://tiktok.com",
    icon: (
      <TiktokLogo
        color={"#FFFFFF"}
        hoverColor={"#fd7e54"}
        tailwindClass={"w-10 h-10"}
      />
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <InstagramLogo
        color={"#FFFFFF"}
        hoverColor={"#fd7e54"}
        tailwindClass={"w-10 h-10"}
      />
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-primary3 text-primary1">
      <div className="px-4 py-8 max-w-screen-xl mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-4">
        <div className="flex items-start">
          <LogoWhite
            color={"#acdeed"}
            hoverColor={"#FFFFFF"}
            tailwindClass={"pb-16 px-6 mb-2 w-96 h-40 2xl:ml-36"}
          />
        </div>

        <div className="flex flex-start w-full text-left flex-wrap">
          {footerLinks.map((category, index) => (
            <div key={index} className="sd:w-36 sm:w-36 w-auto px-7 mb-2">
              <h5 className="text-base font-bold font-headline mb-4">
                {category.title}
              </h5>
              <ul>
                {category.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="font-subHeadline text-secondary4 mb-2"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 justify-center">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary1 hover:text-secondary2"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="text-center font-body text-secondary4 mt-8 pb-4">
        <p>&copy; {new Date().getFullYear()} Outlish. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
