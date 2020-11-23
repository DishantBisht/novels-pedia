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
                    <h2>Some Text</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius purus ac sagittis venenatis. Curabitur dapibus fringilla felis, vel pharetra mi aliquam ut. Vivamus laoreet, elit eu tincidunt rhoncus, quam dolor blandit ipsum, at accumsan augue nulla ut mi. Curabitur fringilla aliquam sapien, sed consequat risus lacinia sed. Duis sed libero a libero sagittis tristique eu nec nibh. Fusce pharetra, diam non varius eleifend, urna justo faucibus nisl, eget sodales justo dolor eu augue. Nulla non leo ut sem maximus venenatis. Maecenas ac interdum justo, nec dapibus ex. Phasellus maximus accumsan finibus. Donec faucibus iaculis ullamcorper. Maecenas sit amet neque eget sapien cursus pharetra in ac nunc.
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