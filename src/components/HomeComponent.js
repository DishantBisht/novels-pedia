import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Media} from 'reactstrap';


function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb className="container">
                    <BreadcrumbItem active><Link>Home</Link></BreadcrumbItem>
                </Breadcrumb>            
            </div>
            <div className="col-12 col-md-12">
                <h2>A Guide to different aspects of this site...</h2>
                <hr />
                <Media>
                    <Media body>
                        <Media heading>
                        About Us
                        </Media>
                        Give about page a read if you have some extra time to spare
                    </Media>
                </Media>
                <hr />
                <Media>
                    <Media body>
                        <Media heading>
                        Books
                        </Media>
                        The Books page contains a list of novels you may have read. Click on any to see the details. 
                    Feel free to add a comment too.
                    </Media>
                </Media>
                <hr />
                <Media>
                    <Media body>
                        <Media heading>
                        Contact Us
                        </Media>
                        The Contact page allows you send a feedback to us. Though you can only send us a feedback if you are logged in. It will be stored in our Db.
                    </Media>
                </Media>
                <hr />
            </div>
        </div>
        
    );
}

export default Home;