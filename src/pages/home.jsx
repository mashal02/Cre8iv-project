import React from "react";
import Login from "./login"
import { BrandFacebook1 } from "../resources/icons/BrandFacebook1";
import { BrandInstagram1 } from "../resources/icons/BrandInstagram1";
import { BrandLinkedin1 } from "../resources/icons/BrandLinkedin1";
import { BrandMessenger1 } from "../resources/icons/BrandMessenger1";
import { BrandTwitter1 } from "../resources/icons/BrandTwitter1";
import { BrandYoutube1 } from "../resources/icons/BrandYoutube1";
import { IconlyLightSend } from "../resources/icons/IconlyLightSend";
import "../css/home.css";

export const Home = () => {
  return (
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
                          <div className="link">
                            <div className="text-wrapper">Generate your First Post!</div>
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
                        <span className="span">Revolutionize Your Social Media with</span>
                        <span className="text-wrapper-2">&nbsp;</span>
                        <span className="text-wrapper-3">Cre8iv</span>
                      </p>
                    </div>
                  </div>
                  <p className="heading-AI">Where Social Meets Potential, Beats Become Success</p>
                </div>
              </div>
            </div>
            <div className="div-w-fit-2">
              <div className="div-wrapper">
                <div className="text-wrapper">Generate your First Post!</div>
              </div>
              <div className="div-3" />
            </div>
            <div className="overlap-group">
              <div className="div-container-fluid">
                <div className="div-navbar-translate">
                  <div className="link-2" />
                </div>
                <div className="div-navigation">
                  <div className="list-margin">
                    <div className="list">
                      <div className="item">
                        <div className="link-3">
                          <div className="text-wrapper-4">Use Cases</div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="link-3">
                          <div className="text-wrapper-4">Solutions</div>
                        </div>
                      </div>
                      <div className="link-features-wrapper">
                        <div className="text-wrapper-4">Features</div>
                      </div>
                      <div className="link-free-AI-tools-wrapper">
                        <div className="text-wrapper-4">Free Tools</div>
                      </div>
                      <div className="link-pricing-wrapper">
                        <div className="text-wrapper-4">Pricing</div>
                      </div>
                    </div>
                  </div>
                  <div className="list-wrapper">
                    <div className="list-2">
                      <div className="item-margin">
                        <div className="link-wrapper">
                          <div className="login-wrapper">
                            <div className="login" ><a href= '/login'>Login </a> </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-2">
                        <div className="link-4">
                          <div className="text-wrapper-5">Get Started Now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="light-background"
                alt="Light background"
                src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be35262f238b9ee1d020c3/img/light-background-2-2@2x.png"
              />
            </div>
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
                        Stay organized, save time, and easily manage your Instagram with the features of{" "}
                      </span>
                      <span className="text-wrapper-8">cre8iv</span>
                    </p>
                    <div className="group-5">
                      <div className="brand-linkedin-wrapper">
                        <BrandLinkedin1 className="icon-instance-node-2" />
                      </div>
                    </div>
                    <div className="overlap-6">
                      <p className="p">Discover trends and insights about your brand—and your competitors.</p>
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
                        <IconlyLightSend className="iconly-light-send" color="#F5F5F5" />
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
                  <p className="type">Copyright © 2019-2021 Wedding Planning Assistant LLC, All rights reserved.</p>
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
                    <p className="heading-manage">Manage Social Media In One Place</p>
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
                            <div className="text-wrapper-14">Elevate Your Content</div>
                            <img
                              className="SVG"
                              alt="Svg"
                              src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/svg.svg"
                            />
                          </button>
                          <div className="p-wrapper">
                            <div className="analyzes-your-wrapper">
                              <p className="analyzes-your">
                                Analyzes your visuals and generates captivating, on-brand captions that engage your
                                audience, saving you time and boosting your content&#39;s impact.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="button-wrapper">
                          <button className="button-3">
                            <div className="text-wrapper-15">Unleash Your Imagination</div>
                            <img
                              className="SVG"
                              alt="Svg"
                              src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/svg-1.svg"
                            />
                          </button>
                        </div>
                        <div className="div-sc-4">
                          <button className="button-4">
                            <div className="text-wrapper-16">Effortless Scheduling</div>
                            <img
                              className="SVG"
                              alt="Svg"
                              src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/svg-1.svg"
                            />
                          </button>
                        </div>
                        <div className="div-sc-5">
                          <button className="button-5">
                            <div className="text-wrapper-17">One-Click Sharing</div>
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
                        <div className="text-wrapper-18">Explore All Features</div>
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
            <div className="footer-footer">
              <div className="nav-footer-menu">
                <img
                  className="div-sc-ed"
                  alt="Div sc"
                  src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/div-sc-e71245d8-0-margin@2x.png"
                />
                <div className="div-sc-dac">
                  <div className="div-sc-fbe">
                    <div className="div-sc-7">
                      <div className="text-wrapper-19">About</div>
                      <div className="list-3">
                        <div className="item-link">
                          <div className="text-wrapper-20">Why Hootsuite</div>
                        </div>
                        <div className="item-link-2">
                          <div className="text-wrapper-20">About us</div>
                        </div>
                        <div className="item-link-3">
                          <div className="text-wrapper-20">Pricing</div>
                        </div>
                        <div className="item-link-4">
                          <div className="text-wrapper-20">Leadership</div>
                        </div>
                        <div className="diversity-equity-wrapper">
                          <div className="text-wrapper-21">
                            Diversity, equity, &amp;
                            <br />
                            inclusion
                          </div>
                        </div>
                        <div className="item-link-5">
                          <div className="text-wrapper-20">Social Impact</div>
                        </div>
                        <div className="item-link-6">
                          <div className="text-wrapper-20">Newsroom</div>
                        </div>
                        <div className="item-link-7">
                          <div className="text-wrapper-20">Careers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-sc-fbe">
                    <div className="div-sc-8">
                      <div className="text-wrapper-19">Product</div>
                      <div className="list-4">
                        <div className="item-link-8">
                          <div className="text-wrapper-20">Publish and schedule</div>
                        </div>
                        <div className="item-link-9">
                          <div className="text-wrapper-20">Engage customers</div>
                        </div>
                        <div className="item-link-10">
                          <div className="text-wrapper-20">Monitor activity</div>
                        </div>
                        <div className="item-link-11">
                          <div className="text-wrapper-20">Advertise content</div>
                        </div>
                        <div className="item-link-12">
                          <div className="text-wrapper-20">Analyze results</div>
                        </div>
                        <div className="item-link-13">
                          <div className="text-wrapper-20">Integrations</div>
                        </div>
                        <div className="item-link-14">
                          <div className="text-wrapper-20">OwlyWriter AI</div>
                        </div>
                        <div className="item-link-learn-more">
                          <div className="text-wrapper-20">Free tools</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-sc-fbe">
                    <div className="div-sc-9">
                      <div className="text-wrapper-19">Solutions</div>
                      <div className="list-5">
                        <div className="item-link-15">
                          <div className="text-wrapper-20">Social commerce</div>
                        </div>
                        <div className="item-link-16">
                          <div className="text-wrapper-20">Customer care</div>
                        </div>
                        <div className="item-link-17">
                          <div className="text-wrapper-20">Social selling</div>
                        </div>
                        <div className="item-link-18">
                          <div className="text-wrapper-20">Employee advocacy</div>
                        </div>
                        <div className="social-media-wrapper">
                          <div className="text-wrapper-21">
                            Social media
                            <br />
                            marketing
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-sc-fbe">
                    <div className="div-sc-10">
                      <div className="text-wrapper-19">Industries</div>
                      <div className="list-4">
                        <div className="item-link-19">
                          <div className="text-wrapper-20">Government</div>
                        </div>
                        <div className="item-link-20">
                          <div className="text-wrapper-20">Health care</div>
                        </div>
                        <div className="item-link-21">
                          <div className="text-wrapper-20">Financial services</div>
                        </div>
                        <div className="item-link-22">
                          <div className="text-wrapper-20">Education</div>
                        </div>
                        <div className="item-link-23">
                          <div className="text-wrapper-20">Real estate</div>
                        </div>
                        <div className="item-link-24">
                          <div className="text-wrapper-20">Legal</div>
                        </div>
                        <div className="item-link-25">
                          <div className="text-wrapper-20">Professional Services</div>
                        </div>
                        <div className="item-link-26">
                          <div className="text-wrapper-20">Agencies</div>
                        </div>
                        <div className="item-link-27">
                          <div className="text-wrapper-20">Nonprofits</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-sc-fbe">
                    <div className="div-sc-10">
                      <div className="text-wrapper-19">Resources</div>
                      <div className="list-4">
                        <div className="item-link-28">
                          <div className="text-wrapper-20">Case studies</div>
                        </div>
                        <div className="item-link-29">
                          <div className="text-wrapper-20">Academy</div>
                        </div>
                        <div className="item-link-link-to">
                          <div className="text-wrapper-20">Blog</div>
                        </div>
                        <div className="item-link-30">
                          <div className="text-wrapper-20">Resource library</div>
                        </div>
                        <div className="item-link-29">
                          <div className="text-wrapper-20">Webinars</div>
                        </div>
                        <div className="item-link-31">
                          <div className="text-wrapper-20">App directory</div>
                        </div>
                        <div className="item-link-frequently">
                          <div className="text-wrapper-20">FAQ</div>
                        </div>
                        <div className="item-link-32">
                          <div className="text-wrapper-20">Events</div>
                        </div>
                        <div className="item-link-33">
                          <div className="text-wrapper-20">Become a Partner</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-sc-fbe">
                    <div className="div-sc-11">
                      <div className="text-wrapper-19">Support</div>
                      <div className="list-4">
                        <div className="item-link-34">
                          <div className="text-wrapper-20">Need help?</div>
                        </div>
                        <div className="item-link-35">
                          <div className="text-wrapper-20">Help center</div>
                        </div>
                        <div className="item-link-36">
                          <div className="text-wrapper-20">Product updates</div>
                        </div>
                        <div className="item-link-37">
                          <div className="text-wrapper-20">Contact sales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-sc-cfe">
                <div className="div-sc-12">
                  <div className="div-sc-13">
                    <div className="p-sc">
                      <p className="text-wrapper-22">©  2023 Hootsuite Inc. All Rights Reserved.</p>
                    </div>
                    <div className="div-4">
                      <div className="button-6">
                        <img
                          className="img"
                          alt="Svg"
                          src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/div-sc-e71245d8-0-margin@2x.png"
                        />
                        <div className="text-wrapper-23">English</div>
                        <img
                          className="SVG-2"
                          alt="Svg"
                          src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/div-sc-e71245d8-0-margin@2x.png"
                        />
                      </div>
                    </div>
                    <div className="list-6">
                      <div className="item-3">
                        <div className="text-wrapper-22">Legal Center</div>
                        <div className="pseudo-3">
                          <div className="text-wrapper-24">|</div>
                        </div>
                      </div>
                      <div className="item-4">
                        <div className="text-wrapper-22">Trust Center</div>
                        <div className="pseudo-4">
                          <div className="text-wrapper-24">|</div>
                        </div>
                      </div>
                      <div className="item-5">
                        <div className="text-wrapper-22">Privacy</div>
                        <div className="pseudo-5">
                          <div className="text-wrapper-24">|</div>
                        </div>
                      </div>
                      <div className="item-6">|</div>
                      <div className="item-link-38">Accessibility</div>
                    </div>
                  </div>
                  <img
                    className="div-sc-14"
                    alt="Div sc"
                    src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/div-sc-e71245d8-0-margin@2x.png"
                  />
                  <img
                    className="div-sc-15"
                    alt="Div sc"
                    src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/div-sc-e71245d8-0-margin@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-footer-2">
            <div className="nav-footer-menu">
              <img
                className="div-sc-16"
                alt="Div sc"
                src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/div-sc-e71245d8-0-margin-1.svg"
              />
              <div className="div-sc-17">
                <div className="div-sc-fbe">
                  <div className="div-sc-18">
                    <div className="text-wrapper-25">About</div>
                    <div className="list-3">
                      <div className="item-link-39">
                        <div className="text-wrapper-26">Why cre8iv</div>
                      </div>
                      <div className="item-link-2">
                        <div className="text-wrapper-26">About us</div>
                      </div>
                      <div className="item-link-40">
                        <div className="text-wrapper-26">Pricing</div>
                      </div>
                      <div className="item-link-41">
                        <div className="text-wrapper-26">Leadership</div>
                      </div>
                      <div className="diversity-equity-wrapper">
                        <div className="diversity-equity">
                          Diversity, equity, &amp;
                          <br />
                          inclusion
                        </div>
                      </div>
                      <div className="item-link-5">
                        <div className="text-wrapper-26">Social Impact</div>
                      </div>
                      <div className="item-link-6">
                        <div className="text-wrapper-26">Newsroom</div>
                      </div>
                      <div className="item-link-7">
                        <div className="text-wrapper-20">Careers</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-sc-fbe">
                  <div className="div-sc-19">
                    <div className="text-wrapper-25">Product</div>
                    <div className="list-4">
                      <div className="item-link-8">
                        <div className="text-wrapper-20">Publish and schedule</div>
                      </div>
                      <div className="item-link-9">
                        <div className="text-wrapper-20">Engage customers</div>
                      </div>
                      <div className="item-link-10">
                        <div className="text-wrapper-20">Monitor activity</div>
                      </div>
                      <div className="item-link-11">
                        <div className="text-wrapper-20">Advertise content</div>
                      </div>
                      <div className="item-link-12">
                        <div className="text-wrapper-20">Analyze results</div>
                      </div>
                      <div className="item-link-13">
                        <div className="text-wrapper-20">Integrations</div>
                      </div>
                      <div className="item-link-14">
                        <div className="text-wrapper-20">OwlyWriter AI</div>
                      </div>
                      <div className="item-link-learn-more">
                        <div className="text-wrapper-20">Free tools</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-sc-fbe">
                  <div className="div-sc-20">
                    <div className="text-wrapper-25">Resources</div>
                    <div className="list-4">
                      <div className="item-link-29">
                        <div className="text-wrapper-20">Academy</div>
                      </div>
                      <div className="item-link-link-to">
                        <div className="text-wrapper-20">Blog</div>
                      </div>
                      <div className="item-link-30">
                        <div className="text-wrapper-20">Resource library</div>
                      </div>
                      <div className="item-link-29">
                        <div className="text-wrapper-20">Webinars</div>
                      </div>
                      <div className="item-link-31">
                        <div className="text-wrapper-20">App directory</div>
                      </div>
                      <div className="item-link-frequently">
                        <div className="text-wrapper-20">FAQ</div>
                      </div>
                      <div className="item-link-32">
                        <div className="text-wrapper-20">Events</div>
                      </div>
                      <div className="item-link-33">
                        <div className="text-wrapper-20">Become a Partner</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-sc-fbe">
                  <div className="div-sc-21">
                    <div className="text-wrapper-25">Support</div>
                    <div className="list-4">
                      <div className="item-link-34">
                        <div className="text-wrapper-20">Need help?</div>
                      </div>
                      <div className="item-link-35">
                        <div className="text-wrapper-20">Help center</div>
                      </div>
                      <div className="item-link-36">
                        <div className="text-wrapper-20">Product updates</div>
                      </div>
                      <div className="item-link-37">
                        <div className="text-wrapper-20">Contact sales</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-sc-22">
              <div className="div-sc-23">
                <div className="div-sc-13">
                  <div className="div-4">
                    <div className="button-6">
                      <img
                        className="SVG-3"
                        alt="Svg"
                        src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/svg-6.svg"
                      />
                      <div className="text-wrapper-23">English</div>
                      <img
                        className="SVG-4"
                        alt="Svg"
                        src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/svg-7.svg"
                      />
                    </div>
                  </div>
                  <div className="list-6">
                    <div className="item-3">
                      <div className="text-wrapper-22">Legal Center</div>
                      <div className="pseudo-3">
                        <div className="text-wrapper-24">|</div>
                      </div>
                    </div>
                    <div className="item-4">
                      <div className="text-wrapper-22">Trust Center</div>
                      <div className="pseudo-4">
                        <div className="text-wrapper-24">|</div>
                      </div>
                    </div>
                    <div className="item-5">
                      <div className="text-wrapper-22">Privacy</div>
                      <div className="pseudo-5">
                        <div className="text-wrapper-24">|</div>
                      </div>
                    </div>
                    <div className="item-6">|</div>
                    <div className="item-link-38">Accessibility</div>
                  </div>
                </div>
                <img
                  className="div-sc-24"
                  alt="Div sc"
                  src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/div-sc-52c562fe-5-1.svg"
                />
                <img
                  className="div-sc-24"
                  alt="Div sc"
                  src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be3453df5bb63ac891bcee/img/div-sc-52c562fe-6-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;