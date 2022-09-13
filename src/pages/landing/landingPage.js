import React from "react";
import  {Link } from "react-router-dom";
import LandingContent from "../../components/landing/LandingContent";

const LandingPage = () => {
    return (
        <LandingContent 
        content={ 
        <div id="page-top">      
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">PNMS</h1>
                        <h2 class="text-white-50 mx-auto mt-2 mb-5">Get your plant on your doorstep. Buy You Plant today</h2>
                        <Link to="/login"> <a class="btn btn-primary">SHOP HERE</a></Link>
                    </div>
                </div>
            </div>
        </header>
        <section class="projects-section bg-light" >
            <div class="container px-4 px-lg-5">
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center" id="about">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/wallpaper4.jpg" alt="..."  /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>About</h4>
                            <p class="text-black-50 mb-0">The Plant Nursery Management System is a web application that simplifies the ordering and delivery of plants to customers and supports the management of nurseries throughout Rwanda</p>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center" id="projects">
                    <h4 class=" text-center mb-4">Projects</h4>
                    <div class="col-lg-6"><img class="img-fluid" src="assets/img/wallpaper5.jpg" alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Tree nursery beds</h4>
                                    <p class="mb-0 text-white-50">The overall goal of the Tree nursery project is to have an environmentally friendly, ecologically stable and economically flourishing Rwanda.</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="assets/img/wallpaper7.jpg" alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Plant 20,000 Trees In Northern Rwanda</h4>
                                    <p class="mb-0 text-white-50">Through this project,20,000 trees will be planted and maintained to enable environmental protection as well as economic support of the local Rwandan community in 5 rural sectors.</p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact-section bg-black" id="contact-us">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">Kigali, Rwanda</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="#!">plantnursery@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Phone</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">+250 (787) 934-651</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
        }
        />
    );

};

export default LandingPage;