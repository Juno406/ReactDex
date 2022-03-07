import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/PageNotFound.png'

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img className='notfoundimg card-img-top rounded mx-auto mt-2' src={PageNotFound}  />
            <p className='notfound'>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;