import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    const leaders = props.leaders;

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb className="container">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>             
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-12">
                    <h2>Hi there!</h2>
                    <p>This website was designed for the sole purpose of showcasing my skills as a MERN stack Developer. 
                        Plaese Do read the guide on the home page to understand the aspects of this website.
                        Have a nice day! 
                    </p>
                    <p>Do read the random quote..
                    </p>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">A Tale of Two Cities,
                                Charles Dickens</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;    