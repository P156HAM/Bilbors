import React from "react";
import logo from "../../assets/icons/Logo_1_white.svg";
import LogoWhite from "../icons/logoWhite";

type FooterLinkCategory = {
  title: string;
  links: string[];
};

const footerLinks: FooterLinkCategory[] = [
  { title: "Handla", links: ["Tryggt köp", "Betalning", "Leverans"] },
  {
    title: "Kundservice",
    links: [
      "Kontakta oss",
      "Vanliga frågor",
      "Allmänna villkor",
      "Betalningsvillkor",
    ],
  },
  {
    title: "Marketplace",
    links: ["Sälj på Outlish", "Våra partners", "Vanliga frågor"],
  },
  {
    title: "Om Outlish",
    links: ["Vår vision", "Om oss"],
  },
];

const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    iconPath: "path-to-facebook-icon",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    iconPath: "path-to-twitter-icon",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    iconPath: "path-to-instagram-icon",
  },
];

function Footer() {
  return (
    <footer className="bg-primary3 text-primary1">
      <div className="px-1 py-8 w-full flex">
        <div className="flex items-start">
          <LogoWhite
            color={"#acdeed"}
            hoverColor={"#FFFFFF"}
            tailwindClass={"pb-16 px-6 mb-28 w-96 h-40"}
          />
        </div>

        <div className="flex justify-between w-1/2">
          <div>
            {/* Logo */}
            {/* Social Media Links */}
          </div>
          {footerLinks.map((category, index) => (
            <div key={index}>
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
            <img src={social.iconPath} alt={social.name} className="h-6 w-6" />
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
