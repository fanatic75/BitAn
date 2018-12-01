import React from  "react";
import  "../loadinglogo.css";
import "../loadinglogo1.css";
class LoadingLogo extends React.Component {



    componentDidUpdate(){
      setTimeout(() =>{
        this.props.visibilityToggle();
      },2001);
    }

  render(){
    if(this.props.loading){
    return(
      <div>

    <div className="loading_logo_container" >
            <div className="circles_container">

              <div className="circle b_circle" >
                <div className="circle onstack" >
                  <ul className="circle-container">
                    <li className="boxes"></li>
                    <li className="boxes">
                    </li>
                    <li className="boxes">
                    </li>
                    <li className="boxes">
                    </li>
                    <li className="boxes">
                    </li>
                    <li className="boxes" style={{transform: "rotate(100deg) translate(15vh) rotate(-100deg) rotateZ(6deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(120deg) translate(15vh) rotate(-120deg) rotateZ(29deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(140deg) translate(15vh) rotate(-140deg) rotateZ(50deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(160deg) translate(15vh) rotate(-160deg) rotateZ(72deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(180deg) translate(15vh) rotate(-180deg) rotateZ(91deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(200deg) translate(15vh) rotate(-200deg) rotateZ(112deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(220deg) translate(15vh) rotate(-220deg) rotateZ(129deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(240deg) translate(15vh) rotate(-240deg) rotateZ(150deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(260deg) translate(15vh) rotate(-260deg) rotateZ(169deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(280deg) translate(15vh) rotate(-280deg) rotateZ(189deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(300deg) translate(15vh) rotate(-300deg) rotateZ(211deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(320deg) translate(15vh) rotate(-320deg) rotateZ(231deg)"}}>
                    </li>
                    <li className="boxes" style={{transform: "rotate(340deg) translate(15vh) rotate(-340deg) rotateZ(247deg)"}}>
                    </li>


                  </ul>


                  <div className="circle m_circle" >
                    <div className="logo">
                      <div>B <span className="logo_it">IT</span></div>
                      <div>C <span className="logo_hat">HAT</span></div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>


      </div>
      );
    }else{return(null);}
  }
}

export default LoadingLogo;
