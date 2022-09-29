import React from 'react';

function Header() {
    return (

        <div>
            <head>
                {/* <!-- Required meta tags --> */}
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />

                <link rel="stylesheet" href="brewery-api/assets/fonts/icomoon/style.css" />

                <link rel="stylesheet" href="brewery-api/assets/css/owl.carousel.min.css" />

                {/* <!-- Bootstrap CSS --> */}
                <link rel="stylesheet" href="brewery-api/assets/css/bootstrap.min.css" />

                {/* <!-- Style --> */}
                <link rel="stylesheet" href="brewery-api/assets/css/style.css" />

                <title>Website Menu #3</title>
            </head>
            <body>


                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                <header className="site-navbar" role="banner">

                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-11 col-xl-2">
                                <h1 className="mb-0 site-logo"><a href="index.html" className="text-white mb-0">Brand</a></h1>
                            </div>
                            <div className="col-12 col-md-10 d-none d-xl-block">
                                <nav className="site-navigation position-relative text-right" role="navigation">

                                    <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li className="active"><a href="index.html"><span>Home</span></a></li>
                                        <li className="has-children">
                                            <a href="about.html"><span>Dropdown</span></a>
                                            <ul className="dropdown arrow-top">
                                                <li><a href="#">Menu One</a></li>
                                                <li><a href="#">Menu Two</a></li>
                                                <li><a href="#">Menu Three</a></li>
                                                <li className="has-children">
                                                    <a href="#">Dropdown</a>
                                                    <ul className="dropdown">
                                                        <li><a href="#">Menu One</a></li>
                                                        <li><a href="#">Menu Two</a></li>
                                                        <li><a href="#">Menu Three</a></li>
                                                        <li><a href="#">Menu Four</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="listings.html"><span>Listings</span></a></li>
                                        <li><a href="about.html"><span>About</span></a></li>
                                        <li><a href="blog.html"><span>Blog</span></a></li>
                                        <li><a href="contact.html"><span>Contact</span></a></li>
                                    </ul>
                                </nav>
                            </div>


                            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

                        </div>

                    </div>
                    

                </header>   

            <div className="hero" style="background-image: url('brewery-api/assets/images/hero_1.jpg');"></div>



                <script src="brewery-api/assets/js/jquery-3.3.1.min.js"></script>
                <script src="brewery-api/assets/js/popper.min.js"></script>
                <script src="brewery-api/assets/js/bootstrap.min.js"></script>
                <script src="brewery-api/assets/js/jquery.sticky.js"></script>
                <script src="brewery-api/assets/js/main.js"></script>
                
            </body>
        </div>);
}

export default Header;