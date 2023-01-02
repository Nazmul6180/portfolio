import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {AiFillGithub } from 'react-icons/ai';
// eslint-disable-next-line

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://github.com/Nazmul6180" target="_blank" rel="noreferrer">
            <AiFillGithub/>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/8Nazmul" target="_blank" rel="noreferrer">
            <BsTwitter/>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/identical.nazmul" target="_blank" rel="noreferrer">
            <FaFacebookF/>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/identicalnazmul/" target="_blank" rel="noreferrer">
            <BsInstagram/>
          </a>
        </div>
        
    </div>
  )
};

export default SocialMedia;