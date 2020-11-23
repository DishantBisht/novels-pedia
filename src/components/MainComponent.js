import React,{ Component } from 'react';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import About from './AboutComponent.js';
import Books from './BooksComponent.js';
import Contact from './ContactComponent.js';
import Details from './BookDetails.js';
import { postComment, fetchBooks, fetchComments, postFeedback } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
  return {
    books: state.books,
    comments: state.comments, 
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (bookId, rating, author, comment) => dispatch(postComment(bookId, rating, author, comment)),
  fetchBooks: () => { dispatch(fetchBooks())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message ) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message )) 
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchComments();
  }

  render(){
  
    const HomePage = () => {
      return(
          <Home 
              book={this.props.books.books.filter((book) => book.featured)[0]}
              booksLoading={this.props.books.isLoading}
              bookErrMess={this.props.books.errMess}

          />
          
      );
    }

    const BookWithId = ({match}) => {
      return(
          <Details book={this.props.books.books.filter((book) => book.id === parseInt(match.params.bookId,10))[0]}
            isLoading={this.props.books.isLoading}
            errMess={this.props.books.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.bookId === parseInt(match.params.bookId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
          />
      );
    };

    return (
        <div>
          <Header />
            <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch location={this.props.location}>
                  <Route path='/home' component= {HomePage} />
                  <Route path='/aboutus' component= {() => <About/>} />
                  <Route path='/books/:bookId' component= {BookWithId} />
                  <Route exact path='/books' component={() => <Books books={this.props.books} /> }/>
                  <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={ this.props.resetFeedbackForm } postFeedback = {this.props.postFeedback} /> } />
                  <Redirect to="/home" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          <Footer />
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));