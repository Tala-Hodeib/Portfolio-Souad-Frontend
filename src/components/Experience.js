import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./ExpItem";
import './Experience.css'
 
function slider(){
    return (
        <div className="main-wrapper">
            <h1>My Experience</h1>
            <div className="exp-slider">
            <Carousel>
                <Item>
                    <div className="Exp-Card">
                        <div className="exp-items">
                            <div className="exp-role">QA</div>
                            <div className="exp-company">Nymgo</div>
                            <div className="exp-duration">1990 - 2020</div>
                            <div className="exp-tasks">
                                <ul>
                                    <li>Lorem Ipsum has been the industry's</li> 
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item>
                <Item>
                    <div className="Exp-Card">
                        <div className="exp-items">
                            <div className="exp-role">QA</div>
                            <div className="exp-company">Nymgo</div>
                            <div className="exp-duration">1990 - 2020</div>
                            <div className="exp-tasks">
                                <ul>
                                    <li>Lorem Ipsum has been the industry's</li> 
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item>
                <Item>
                    <div className="Exp-Card">
                        <div className="exp-items">
                            <div className="exp-role">QA</div>
                            <div className="exp-company">Nymgo</div>
                            <div className="exp-duration">1990 - 2020</div>
                            <div className="exp-tasks">
                                <ul>
                                    <li>Lorem Ipsum has been the industry's</li> 
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item>
                <Item>
                    <div className="Exp-Card">
                        <div className="exp-items">
                            <div className="exp-role">QA</div>
                            <div className="exp-company">Nymgo</div>
                            <div className="exp-duration">1990 - 2020</div>
                            <div className="exp-tasks">
                                <ul>
                                    <li>Lorem Ipsum has been the industry's</li> 
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item>
            </Carousel>
            </div>
        </div>
    )
  }
export default slider