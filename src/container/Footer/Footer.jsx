import React, { useState } from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {AiFillGithub } from 'react-icons/ai';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';


import './Footer.scss';

const Footer = () => {

    const [formData, setFormData] = useState({name: '', email:'', message:'' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } =formData;

    const handleChangeInput = (e) => {
      const { name, value} = e.target;

      setFormData({...formData, [name]: value});
    }

    const handleSubmit = () => {
      
        setLoading(true);

        const contact = {
          _type: 'contact',
          name: name,
          email: email,
          message: message,
        }

        client.create(contact)
          .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
          })
    }



  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="emil" />
          <a href="mailto:nazmul.hasan1.61803@gmail.com" className="p-text">nazmul.hasan1.61803@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +8801826610145" className="p-text">+8801826610145</a>
        </div>
      </div>

        <div className="app__social-footer">
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

      {!isFormSubmitted ? 
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name='name' value={name} onChange={handleChangeInput } />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name='email' value={email} onChange={handleChangeInput } />
        </div>


          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className="p-text" onClick={handleSubmit}>{loading ? 'sending' :'Send message'}</button>
      </div>
      : <div>
         <h3 className="head-text">Thank you for getting in touch!</h3>
      </div> 
      }
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);