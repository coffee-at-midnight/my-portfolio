"use client";

import React from "react";
import { FaXTwitter, FaGithub, FaInstagram, FaRss, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-90"><Icon /></a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right">      
      <SocialLink href={socialLinks.github} icon={FaGithub} />      
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />     
      <a href="/rss.xml" target="_self"><FaRss /></a>
    </div>
  );
}

// <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
// <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
// <SocialLink href={socialLinks.email} icon={TbMailFilled} />

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}{metaData.title}
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
