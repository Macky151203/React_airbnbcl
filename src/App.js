import logo from './logo.svg';
import './App.css';
import img from '../src/images/airbnb1.png';
import img2 from '../src/images/Group77.png';
import img3 from '../src/images/image12.png';
import star from '../src/images/Star1.png';
import wedimg from '../src/images/wedphoto.png';


function Nav() {
  return (
    <div>
      <nav className="navi">
        <img src={img} />

      </nav>
    </div>
  )
}

function Mid() {
  return (
    <div>
      <h1 className="mid">
        Online Experiences
      </h1>
      <p className="mid2">
        Join unique and interactive activities led by one of a kind hosts all without leaving home
      </p>
    </div>
  )
}
function Card(props) {
  return (
    <div className="cards">
      <img src={props.img} className="img3" />
      <div className="cardstats">
        <img src={star} />
        <span>{props.rating}</span>
        <span>({props.reviewcount}) .</span>
        <span>{props.country}</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Nav />
      <div className="cont">
        <img src={img2} className="img2" />
      </div>
      <Mid />
      <div className="list">
        <Card img={img3}
          rating="5.0"
          reviewcount={6}
          country="USA" />
        <Card img={wedimg}
          rating="4.0"
          reviewcount={16}
          country="INDIA" />
        <Card img={img3}
          rating="3.0"
          reviewcount={66}
          country="YEMEN" />
        <Card img={wedimg}
          rating="4.0"
          reviewcount={16}
          country="INDIA" />
        <Card img={img3}
          rating="3.0"
          reviewcount={66}
          country="YEMEN" />
          <Card img={img3}
          rating="3.0"
          reviewcount={66}
          country="YEMEN" />
          <Card img={img3}
          rating="3.0"
          reviewcount={66}
          country="YEMEN" />
          <Card img={img3}
          rating="3.0"
          reviewcount={66}
          country="YEMEN" />
          <Card img={img3}
          rating="3.0"
          reviewcount={66}
          country="YEMEN" />

      </div>
    </div>
  );
}

export default App;
