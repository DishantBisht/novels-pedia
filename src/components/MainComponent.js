import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Books from './BooksComponent';
import Contact from './ContactComponent';
import BookDetail from './BookDetails';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchBooks, loginUser, logoutUser, postSignup } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
      books: state.books,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
      favorites: state.favorites,
      auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (bookId, by, rating, comment) => dispatch(postComment(bookId, by, rating, comment)),
  fetchBooks: () => {dispatch(fetchBooks())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  postSignup: (creds) => dispatch(postSignup(creds))
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {

    const HomePage = () => {
      return(
        <Home book={this.props.books.books.filter((book) => book.featured)[0]}
          booksLoading={this.props.books.isLoading}
          booksErrMess={this.props.books.errMess}
        />
      );
    }

    const BookWithId = ({match}) => {
      return(
        this.props.auth.isAuthenticated
        ?
        <BookDetail book={this.props.books.books.filter((book) => book._id === match.params.bookId)[0]}
          isLoading={this.props.books.isLoading}
          errMess={this.props.books.errMess}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          auth={this.props.auth}
          />
        :
        <BookDetail book={this.props.books.books.filter((book) => book._id === match.params.bookId)[0]}
          isLoading={this.props.books.isLoading}
          errMess={this.props.books.errMess}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          auth={this.props.auth}
          />
      );
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
      )} />
    );

    return (
      <div>
        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser}
          postSignup={this.props.postSignup} 
          />   
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path='/aboutus' component={() => <About />} />
              <Route exact path="/books" component={() => <Books books={this.props.books} />} />
              <Route path="/books/:bookId" component={BookWithId} />
              <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));