import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';


function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem active><Link>Home</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Home</h3>
                    <hr />
                </div>                
            </div>
        </div>
    );
}

export default Home;