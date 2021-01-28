import React from 'react';
import {Card, CardTitle, CardImgOverlay, CardImg, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderBooksItem({book}){
	return(
		<Link to={`/books/${book._id}`} >
			<Card style={{width:"300px", height:"500px"}} key={book._id}>
                <CardImg className="img-fluid" src={book.image} alt={book.name} style={{width:"100%", height:"100%"}} />
		        <CardImgOverlay>
		        	<CardTitle className="btn btn-light">{book.name}</CardTitle>
		        </CardImgOverlay>
		    </Card>
	    </Link>
	);
}

const Books = (props) => {
	
const books = props.books.books.map((book) => {
		return(
			<div className="col-12 col-sm-5 m-1" style={{width:"100%", height:"100%"}}>
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
            </div>
				<div className="row">
					{books}
				</div>
			</div>
			);
}


export default Books;