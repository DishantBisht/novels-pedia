import { baseUrl } from '../shared/baseUrl';
import * as ActionTypes from './ActionTypes';

export const fetchBooks = () => (dispatch) => {

    dispatch(booksLoading(true));

    return fetch(baseUrl + 'books')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(books => dispatch(addBooks(books)))
    .catch(error => dispatch(booksFailed(error.message)));
}

export const booksLoading = () => ({
    type: ActionTypes.BOOKS_LOADING
});

export const booksFailed = (errmess) => ({
    type: ActionTypes.BOOKS_FAILED,
    payload: errmess
});

export const addBooks = (books) => ({
    type: ActionTypes.ADD_BOOKS,
    payload: books
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const postComment = (bookId, by, rating, comment) => (dispatch) => {
    const newComment = {
        rating: rating,
        by: by,
        comment: comment
    };

    const bearer = 'Bearer ' + localStorage.getItem('token');
    console.log(bearer);
    return fetch(baseUrl + "books/" + bookId + '/comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': bearer
      }
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\n '+error.message); });
};

export const addComment = (bookId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postFeedback = (feedback) => (dispatch) => {

  const bearer = 'Bearer ' + localStorage.getItem('token');
  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: {
      "Content-Type": "application/json",
      'Authorization': bearer
    },
    credentials: "same-origin"
  })
    .then(
      response => {
   
     if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response =>
      alert("Thank you for your feedback!" + JSON.stringify(response))
    )
    .catch(error => {
      console.log("post feedbacks", error.message);
      alert("Your feedback could not be posted \n Please Login first \n Error: " + error.message);
    });
};

export const requestLogin = (creds) => {
  return {
      type: ActionTypes.LOGIN_REQUEST,
      creds
  }
}

export const receiveLogin = (response) => {
  return {
      type: ActionTypes.LOGIN_SUCCESS,
      token: response.token
  }
}

export const loginError = (message) => {
  return {
      type: ActionTypes.LOGIN_FAILURE,
      message
  }
}

export const loginUser = (creds) => (dispatch) => {
  dispatch(requestLogin(creds))

  return fetch(baseUrl + 'users/login', {
      method: 'POST',
      headers: { 
          'Content-Type':'application/json' 
      },
      body: JSON.stringify(creds)
  })
  .then(response => {
      if (response.ok) {
          return response;
      } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
      }
      },
      error => {
          throw error;
      })
  .then(response => response.json())
  .then(response => {
      if (response.success) {

          localStorage.setItem('token', response.token);
          localStorage.setItem('creds', JSON.stringify(creds));
          dispatch(receiveLogin(response));
      }
      else {
          var error = new Error('Error ' + response.status);
          error.response = response;
          throw error;
      }
  })
  .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST
  }
}

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  }
}

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout())
  localStorage.removeItem('token');
  localStorage.removeItem('creds');
  dispatch(receiveLogout())
}

export const postSignup = (creds) => (dispatch) => {
  
  return fetch(baseUrl + 'users/signup' , {
      method: "POST",
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': 'application/json'
    },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .catch(error =>  { console.log('post UserSignUp', error.message); alert('User not Added\n '+error.message); });
};