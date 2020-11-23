import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';


function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb className="container">
                    <BreadcrumbItem active><Link>Home</Link></BreadcrumbItem>
                </Breadcrumb>            
            </div>
        </div>
    );
}

export default Home;