import React from 'react'
import { FaFacebookSquare,FaLinkedinIn } from 'react-icons/fa';

import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; Persie Van-Persie</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="https://www.facebook.com/losangel.mphahlele/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/in/percy-mphahlele/">
                                <FaLinkedinIn className="connect text-dark" /></a>
                            <a href="">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="https://github.com/PersieVan-Persie">
                                <AiFillGithub className="connect text-dark" /></a>
                                
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer