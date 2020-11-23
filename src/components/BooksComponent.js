import React from 'react';
import {Card, CardTitle, CardImgOverlay, CardImg, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderBooksItem({book}){
	return(
		<Link to={`/books/${book.id}`} >
			<Card key={book.id}>
		        <CardImg width="100%" src={baseUrl + book.image} alt={book.name} />
		        <CardImgOverlay>
		        	<CardTitle>{book.name}</CardTitle>
		        </CardImgOverlay>
		    </Card>
	    </Link>
	);
}

const Books = (props) => {
	
const books = props.books.books.map((book) => {
		return(
			<div className="col-12 col-sm-5 m-1">
		    	<RenderBooksItem book={book} />
		    </div>
			);
	});
		if (props.books.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.books.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.books.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
		return(
			<div className="container">
				<div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Books</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Books</h3>
                    <hr />
                </div>                
            </div>
				<div className="row">
					{books}
				</div>
			</div>
			);
}


export default Books;