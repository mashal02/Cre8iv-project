import React, { useState } from "react";
import { useEffect } from "react";
import { BrandFacebook1 } from "../resources/icons/BrandFacebook1";
import { BrandInstagram1 } from "../resources/icons/BrandInstagram1";
import { BrandLinkedin1 } from "../resources/icons/BrandLinkedin1";
import { BrandMessenger1 } from "../resources/icons/BrandMessenger1";
import { BrandTwitter1 } from "../resources/icons/BrandTwitter1";
import { BrandYoutube1 } from "../resources/icons/BrandYoutube1";
import { IconlyLightSend } from "../resources/icons/IconlyLightSend";
import { processFbLogin} from "../components/fblogin";
import { useLocation , useHistory} from "react-router-dom";
//import {Landpage} from "../components/landpage"

import { Link } from 'react-router-dom';
import Navbar from "./navbar"
import Footer from "./footer"
import "../css/home.css";

export const Home = () => {
  const [hasRedirected, setHasRedirected] = useState(false);

//   const search = useLocation().search;
//   let code = null;

// // Check if 'code' has not been extracted yet
// if (!code) {
//   code = new URLSearchParams(search).get("code");
// }

  useEffect(() => {
     if(!hasRedirected){
  //     console.log('this is my useEffect==========');
  //     console.log('this is my state==========', hasRedirected);
  //     console.log("Code: ", code);
       setHasRedirected(true);
    processFbLogin();
   }
  }, []);
    
 

  return (
    <main>
    
    <div className="index">
      <div className="div">
        <div className="overlap">
          <div className="desktop">
            <div className="section">
              <div className="div-2">
                <div className="div-row">
                  <div className="div-primary-circle" />
                  <div className="div-secondary-circle" />
                  <div className="div-col">
                    <div className="image" />
                  </div>
                  <div className="div-d-flex-wrapper">
                    <div className="div-d-flex">
                      <div className="div-text-center">
                        <div className="heading">
                          <p className="the-complete-social">
                            The Complete Social
                            <br />
                            Media Tool is HERE!
                          </p>
                        </div>
                      </div>
                      <div className="div-w-fit-margin">
                        <div className="div-w-fit">               
                          <div>
                            <div className="text-wrapper">
                            Generate your First Post!
                            </div>
                          </div>
                          <div className="div-3" />
                        </div>
                      </div>
                      <div className="div-d-flex-margin" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="div-container">
              <div className="div-col-lg-wrapper">
                <div className="div-col-lg">
                  <div className="div-m-auto">
                    <div className="revolutionize-your-wrapper">
                      <p className="revolutionize-your">
                        <span className="span">
                          Revolutionize Your Social Media with
                        </span>
                        <span className="text-wrapper-2">&nbsp;</span>
                        <span className="text-wrapper-3">Cre8iv</span>
                      </p>
                    </div>
                  </div>
                  <p className="heading-AI">
                    Where Social Meets Potential, Beats Become Success
                  </p>
                </div>
              </div>
            </div>
           
            <div className="div-w-fit-2">            
              <div className="div-wrapper">
              <Link style={{textDecoration: 'none'}} to = "/features" > 
                <div className="text-wrapper">Generate your First Post!</div>
              </Link>                
              </div>
              <div className="div-3" />
            </div>
            <Navbar></Navbar>
           
          </div>
          <div className="frame-wrapper">
            <div className="hero-section-wrapper">
              <div className="hero-section">
                <div className="overlap-2">
                  <div className="overlap-3">
                    <div className="overlap-4">
                      <div className="image-2" />
                      <img
                        className="highlight"
                        alt="Highlight"
                        src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/highlight-10.svg"
                      />
                      <div className="group">
                        <div className="brand-facebook-wrapper">
                          <BrandFacebook1 className="icon-instance-node" />
                        </div>
                      </div>
                      <div className="overlap-wrapper">
                        <div className="brand-instagram-wrapper">
                          <BrandInstagram1 className="icon-instance-node-2" />
                        </div>
                      </div>
                      <div className="overlap-group-wrapper">
                        <div className="brand-messenger-wrapper">
                          <BrandMessenger1 className="brand-messenger" />
                        </div>
                      </div>
                      <div className="group-2">
                        <div className="brand-youtube-wrapper">
                          <BrandYoutube1 className="icon-instance-node" />
                        </div>
                      </div>
                      <p className="take-control-of-your">
                        Take Control <br />
                        of Your Social Media
                      </p>
                    </div>
                    <div className="group-3">
                      <div className="brand-twitter-wrapper">
                        <BrandTwitter1 className="brand-twitter" />
                      </div>
                    </div>
                    <div className="group-4">
                      <div className="overlap-5">
                        <div className="rectangle" />
                        <button className="button">
                          <div className="text-wrapper-6">Try For Free</div>
                        </button>
                      </div>
                    </div>
                    <p className="stay-organized-save">
                      <span className="text-wrapper-7">
                        Stay organized, save time, and easily manage your
                        Instagram with the features of{" "}
                      </span>
                      <span className="text-wrapper-8">cre8iv</span>
                    </p>
                    <div className="group-5">
                      <div className="brand-linkedin-wrapper">
                        <BrandLinkedin1 className="icon-instance-node-2" />
                      </div>
                    </div>
                    <div className="overlap-6">
                      <p className="p">
                        Discover trends and insights about your brand—and your
                        competitors.
                      </p>
                      <div className="text-wrapper-9">Social Listening</div>
                      <img
                        className="dashboard"
                        alt="Dashboard"
                        src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/dashboard-perspective-matte.png"
                      />
                    </div>
                    <button className="button-text-icon">
                      <div className="text-wrapper-10">Learn More</div>
                      <img
                        className="vector"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/vector-9.svg"
                      />
                    </button>
                  </div>
                  <div className="group-6">
                    <div className="overlap-7">
                      <div className="text-wrapper-11">150k</div>
                      <div className="text-wrapper-12">Visitor</div>
                      <div className="text-wrapper-13">+13.03%</div>
                      <div className="placeholder">
                        <IconlyLightSend
                          className="iconly-light-send"
                          color="#F5F5F5"
                        />
                      </div>
                      <img
                        className="trending-up-outline"
                        alt="Trending up outline"
                        src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/trending-up-outline-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="copyright">
                  <p className="type">
                    Copyright © 2019-2021 Wedding Planning Assistant LLC, All
                    rights reserved.
                  </p>
                </div>
                <div className="point-right">
                  <img
                    className="hand"
                    alt="Hand"
                    src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/hand@2x.png"
                  />
                  <img
                    className="sleeve"
                    alt="Sleeve"
                    src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/div-sc-e71245d8-0-margin@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-8">
          <div className="frame-2">
            <div className="overlap-9">
              <div className="div-sc">
                <div className="div-2">
                  <div className="div-sc-efabb">
                    <p className="heading-manage">
                      Manage Social Media In One Place
                    </p>
                  </div>
                </div>
              </div>
              <div className="div-sc-wrapper">
                <div className="div-sc-2">
                  <div className="div-sc-3">
                    <div className="div-sc-aeaae-wrapper">
                      <div className="div-sc-aeaae">
                        <div className="div-sc-ce">
                          <button className="button-2">
                            <div className="text-wrapper-14">
                              Elevate Your Content
                            </div>
                            <img
                              className="SVG"
                              alt="Svg"
                              src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/svg.svg"
                            />
                          </button>
                          <div className="p-wrapper">
                            <div className="analyzes-your-wrapper">
                              <p className="analyzes-your">
                                Analyzes your visuals and generates captivating,
                                on-brand captions that engage your audience,
                                saving you time and boosting your content&#39;s
                                impact.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="button-wrapper">
                          <button className="button-3">
                            <div className="text-wrapper-15">
                              Unleash Your Imagination
                            </div>
                            <img
                              className="SVG"
                              alt="Svg"
                              src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/svg-1.svg"
                            />
                          </button>
                        </div>
                        <div className="div-sc-4">
                          <button className="button-4">
                            <div className="text-wrapper-16">
                              Effortless Scheduling
                            </div>
                            <img
                              className="SVG"
                              alt="Svg"
                              src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/svg-1.svg"
                            />
                          </button>
                        </div>
                        <div className="div-sc-5">
                          <button className="button-5">
                            <div className="text-wrapper-17">
                              One-Click Sharing
                            </div>
                            <img
                              className="SVG"
                              alt="Svg"
                              src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/svg-1.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="span-sc">
                      <div className="link-5">
                        <div className="text-wrapper-18">
                          Explore All Features
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-sc-6">
                    <div className="div-sc-bcffe" />
                    <div className="accordion" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-3">
            <div className="div-sc-daebc-wrapper">
              <div className="div-sc-daebc">
                <div className="section-2">
                  <div className="div-sc-bb">
                    <div className="pseudo" />
                    <div className="span-sc-f">
                      <img
                        className="rectangle-png"
                        alt="Rectangle png"
                        src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/rectangle-118--3--png.png"
                      />
                    </div>
                  </div>
                  <div className="div-sc-bb">
                    <div className="pseudo-2" />
                    <div className="div-sc-ade-wrapper">
                      <div className="div-sc-ade">
                        <div className="put-social-media-to-wrapper">
                          <p className="put-social-media-to">
                            Put social media to work for
                            <br />
                            your business
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
           
          </div>
        
 
          
        </div>
      
      </div>
     
    
    </div>
    <Footer></Footer>
    </main>

      
   );
};

export default Home;
