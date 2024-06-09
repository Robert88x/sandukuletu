import React, { Component } from 'react';

//
import one from '../../includes/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg';
import two from '../../includes/images/pexels-fauxels-3183132.jpg';
import three from '../../includes/images/pexels-matt-hatchett-982360-2599270.jpg';

import withNavigateHook from '../withNavigateHook';
import { Pagination } from 'antd';

// import { db } from "../../firebase-config";
import { getDocs, query, collection, getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";


class Chats extends Component {
  constructor(props) {
    super(props);
    this.onProfile = this.onProfile.bind(this);
    this.onCompose = this.onCompose.bind(this);

    this.state = {};
  }

  onProfile() {
    
  }

  async componentDidMount() {
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
    const firebaseConfig = {
      apiKey: "AIzaSyCslcx660Hmthis.props.navigation('/profile');_TRyTB4sQ3ZBKZCUsWxG_e4",
      authDomain: "kitaa-chetu.firebaseapp.com",
      projectId: "kitaa-chetu",
      storageBucket: "kitaa-chetu.appspot.com",
      messagingSenderId: "686928887905",
      appId: "1:686928887905:web:41e03dc36d495749dbaa20",
      measurementId: "G-RQYJ711K01"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Firestore and get a reference to the service
    const db = getFirestore(app);

    // cmultiple docs in collection
    const dx = query(collection(db, "chats"));
    const querySnapshot = await getDocs(dx);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });


    //single doc
    // const docRef = doc(db, "chats", "g7GwEIAPvD7COw5eqDXr");
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  }

  onCompose() {
    this.props.navigation('/composend');
  }

  render() {
    return (
      <div className='coloredBack'>
        <div className='welcomeAboard'>
          Welcome to the Chats 
          <button onClick={this.onCompose} style={{ marginLeft: '4em', color: 'white', backgroundColor: 'purple' }}>COMPOSE NEW!</button> 
        </div>
        <div className='backgroundPage'>
            <div className=''>
              <div className='replies'>
                <div onClick={this.onProfile}><img className='imagechat' src={one} alt='one' /></div>
                  <div>
                    <h5>This is coming from Robert uhafufuwufuwvfvuwvfyusFWEFIGWIFIWGIWFWIWYFGU ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={two} alt='two' /></div>
                  <div>
                    <h5>This is coming from Isack ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={three} alt='three' /></div>
                  <div>
                    <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieige ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>
                
              <div className='replies'>
                <div><img className='imagechat' src={one} alt='one' /></div>
                  <div>
                  <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieige ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={two} alt='two' /></div>
                  <div>
                  <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieige ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={three} alt='three' /></div>
                  <div>
                  <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieige ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={one} alt='one' /></div>
                  <div>
                  <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieige ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={two} alt='two' /></div>
                  <div>
                  <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieigeojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={three} alt='three' /></div>
                  <div>
                  <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieige ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={one} alt='one' /></div>
                  <div>
                  <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieige ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={two} alt='two' /></div>
                  <div>
                  <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieige ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>

              <div className='replies'>
                <div><img className='imagechat' src={three} alt='three' /></div>
                  <div>
                  <h5>This is coming from Hussein nsgiiwfusiag8rgiegie9vheohgohg9heig9gieqehhhq9hiogheuvieige ojhw9y9fhw9fgwxrg28rwhox02hx0h20rx93gxiie9g94g34g</h5>
                    <h3>Comment...</h3>
                  </div>
              </div>
            </div>
          </div>

          <Pagination className='paginate' defaultCurrent={1} total={50} />

      </div>

    )
  }
}

export default withNavigateHook(Chats);