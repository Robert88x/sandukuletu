// import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';

//components
import Home from './components/welcomepages/Home';
// import Login from './components/credentialspages/Login';
// import Register from './components/credentialspages/Register';
import withNavigateHook from './components/withNavigateHook';

//
import one from './includes/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import two from './includes/images/pexels-fauxels-3183132.jpg';
import three from './includes/images/pexels-matt-hatchett-982360-2599270.jpg';

import { db } from "./firebase-config";
import { doc, setDoc } from "@firebase/firestore";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

//action imports
import userLoginAction from './actions/userLoginAction';


export class App extends Component {
   async componentDidMount(){
    // const usersCollectionRef = collection(db, "users");

    // const getUsers = async () => {
    //   const data = await getDocs(usersCollectionRef);
    //   console.log(data);
      
      // setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };

    // getUsers();


      //set up and insert/add in this document
      //if userId is the same its going to update the fields

      // let userID = ("IYT" + Math.floor(Math.random() * 10000) + "XUY").toString();
      // const newData = { name: "Manpacayoo", job: "Software Tech", country: "Tanzania", role: "User", status: true }
    
      // await setDoc(doc(db, "users", userID), newData).then(docRef => {
      //     console.log("Document has been added successfullyv");
      // }).catch(e => {
      //     console.log(e);
      // });

}

  
     //above render function
    constructor(props){
    super(props);
    //bind here
    this.onAbout = this.onAbout.bind(this);
    this.onRegister = this.onRegister.bind(this);
    this.onLogin = this.onLogin.bind(this);


    this.state = {
        username: this.props.username,
        existed: false,
    }
}

  //methods about render
  onAbout() {
    this.props.navigation('/about');
  }

  onLogin() {
    this.props.navigation('/login');
  }

  onRegister() {
    this.props.navigation('/register');
  }

  render() {
    const isLoggedIn = this.state.existed;

    return (
      <div className="app">
        <div className='sidebar'>
          <div><Home /></div>
          <div className='containers' onClick={this.onAbout}>About</div>
          <div>Vision</div>
          <div>Chats</div>
          <div>Notifications</div>
          <div>
            {/* <Login username="robert"/> */}
            { isLoggedIn ? <div className='containers' onClick={this.onLogin}>Login</div> : 
              <div className='containers' onClick={this.onRegister}>Register</div> }
          </div>
        </div>
   
        <div className='contentWelcome'>
          <h1>Sanduku la Maoni Kitaa</h1>
          <p>
              To install a different version of Node.js, 
              you can use a PPA (personal package archive) maintained by NodeSource. 
              These PPAs have more versions of Node.js available than the official Ubuntu repositories. 
              Node.js v16 and v18 are available as of the time of writing.
              First, install the PPA to get access to its packages. From your home directory, 
              use curl to retrieve the installation script for your preferred version, 
              making sure to replace 16.x with your preferred version string if different.
              Deserunt aute magna do incididunt irure in nulla non incididunt. Ex est minim laborum dolor cillum 
              proident ut adipisicing. Minim incididunt eu veniam consequat aliquip mollit deserunt ullamco enim ipsum 
              fugiat cupidatat voluptate.
              These PPAs have more versions of Node.js available than the official Ubuntu repositories. 
              Node.js v16 and v18 are available as of the time of writing.
              First, install the PPA to get access to its packages. From your home directory, 
              use curl to retrieve the installation script for your preferred version, 
              making sure to replace 16.x with your preferred version string if different.
              Deserunt aute magna do incididunt irure in nulla non incididunt. Ex est minim laborum dolor cillum 
              proident ut adipisicing. Minim incididunt eu veniam consequat aliquip mollit deserunt ullamco enim ipsum 
              fugiat cupidatat voluptate.
              These PPAs have more versions of Node.js available than the official Ubuntu repositories. 
              Node.js v16 and v18 are available as of the time of writing.
              First, install the PPA to get access to its packages. From your home directory, 
              use curl to retrieve the installation script for your preferred version, 
              making sure to replace 16.x with your preferred version string if different.
              Deserunt aute magna do incididunt irure in nulla non incididunt. Ex est minim laborum dolor cillum 
              proident ut adipisicing. Minim incididunt eu veniam consequat aliquip mollit deserunt ullamco enim ipsum 
              fugiat cupidatat voluptate.
          </p>
          <div className='imagecontainer'>
            <img className='imagec' src={one} alt='one' />
            <img className='imagec' src={two} alt='two' />
            <img className='imagec' src={three} alt='three' />
          </div>
          
        </div>
      </div>


  
      
    );
  }
  }

// App.propTypes = {
//   name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   job: PropTypes.string.isRequired,
//   password: PropTypes.password.isRequired
// };

const mapStateToProps = (state) => {
  const { name, username, job, password } = state.users;

  return {
    name,
    username,
    job,
    password
  }
} 

export default withNavigateHook(connect(mapStateToProps, { userLoginAction })(App));

