//------------------------------------------------------------------------------------------//
//-----------------------------  User Details Component -------------------------------------//
// -Redux is used to fetch the date from the API
// -mapStateToProps function reflect any updates to the Redux store and merge them into
//  props in the component
// -useffect call the redux function to fetch the data from the API
// -User State is from the redux store it contain user date which is updated by the reducer 


import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user';


const User = ({
  getUser,
  user: { user, loading },

}) => {
  useEffect(() => {
    getUser();
  }, []);

  
  return loading ? (
   
  // display a loading spinner until the data is not loaded into the state 
  <div className="container-fluid vh-100">
    <div className="d-flex align-items-center justify-content-center h-100">
      <div class="d-flex flex-column">
        <div className="spinner-container">
          <div className="loading-spinner">
          </div>
        </div>
      </div>
    </div>
  </div>


  ) : (
    <Fragment>

{/* user data UI  */}
  <section className="vh-100 Section-Background">
    <div className="container py-5 h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col col-lg-6 mb-4 mb-lg-0">
          <div className="card mb-3 border-radius shadow" >
            <div className="row g-0">
              <div className="col-md-4 gradient-custom text-center text-white border">
                <img src={user.picture.large}
                  alt="Avatar" className="img-fluid my-5 width"  />
                <h5>  {user.name.title}</h5>
                <p>  {user.name.first} {user.name.last}</p>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>User Information</h6>
                  <hr className="mt-0 mb-4"/>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">{user.email}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">{user.phone}</p>
                    </div>
                  </div>
                  <h6>Location</h6>
                  <hr className="mt-0 mb-4"/>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Country</h6>
                      <p className="text-muted">{user.location.country}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>City, State</h6>
                      <p className="text-muted">{user.location.city},{""} {user.location.state}</p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
   
    </Fragment>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state. user});
export default connect(mapStateToProps, { getUser })(User);
