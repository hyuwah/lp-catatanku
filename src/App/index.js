import React, {Component} from 'react';
import Navbar from '../Components/Navbar'
import FullImageIntro from '../Components/FullImageIntro';
import Features from '../Components/Features';
import './index.css';

const ss = require("../Assets/ss_portrait.png")

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar/>

          <FullImageIntro>
            
              <div className="row flex-center">
                <div className="col-md-4">
                  <h1>Suka catat mencatat?<br/>
                    Pake aja <strong>CatatanKu</strong>
                  </h1>
                  <br/>
                  <h4>Aplikasi android buat nyimpen segala catatan yang perlu dicatat.</h4>
                </div>
                <div className="col-md-8 flex-center">
                  <img src={ss} className="img-fluid" alt=""/>
                </div>
              </div>

          </FullImageIntro>

        </header>

        <main>
          
          <Features />

        </main>

      </div>
    );
  }
}

export default App;
