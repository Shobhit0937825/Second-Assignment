import logo from './logo.svg';
import './App.css';
import Para from './Para'
import VS_First from './vs_card/VS_First';
import Second from './Second';
import Third from './Third'
import Forth from './Forth';

function App() {
  const img1="https://images.91wheels.com//assets/b_images/main/models/profile/profile1648457794.jpg?width=360"
  const imgA="https://images.91wheels.com//assets/b_images/main/models/profile/profile1629553061.png?width=360"
  const img2="https://images.91wheels.com//assets/b_images/main/models/profile/profile1655376263.png?width=360"
  const imgB="https://images.91wheels.com//assets/b_images/main/models/profile/profile1640596059.jpg?width=360"
  const img3="https://images.91wheels.com//assets/b_images/main/models/profile/profile1654244120.jpg?width=360"
  const imgC="https://images.91wheels.com//assets/b_images/main/models/profile/profile1654504395.jpeg?width=360"
  const img4="https://images.91wheels.com//assets/b_images/main/models/profile/profile1652870103.jpg?width=360"
  const imgD="https://images.91wheels.com//assets/b_images/main/models/profile/profile1652949250.jpg?width=360"
  return (
    
    <div className='fix' >
<div>
  <Para/>
</div>
      
      <div className='yoyo'>
      <VS_First image={img1} image1={imgA} nameA="Scoda Rapid" name1="Honda City" costA="₹11,99Lakh-₹13.49Lakh" cost1="₹11.46Lakh-19.55Lakh"  />
      <Second imageA={img2} image2={imgB} nameB="Hundei Venue 2022" name2="KIA Seltos" costB="₹12,99Lakh-₹17.49Lakh" cost2="₹13.44Lakh-15.55Lakh"  />
      <Third imageB={img3} image3={imgC} nameC=" Hundai Verna" name3="TATA Nexon" costC="₹13,99Lakh-₹18.49Lakh" cost3="₹10.46Lakh-21.25Lakh"  />
      
      </div><br></br>
      <Forth imageC={img4} image4={imgD} nameD="Toyota Fortuner" name4="Ford Endeacour" costD="₹14,99Lakh-₹19.49Lakh" cost4="₹15.46Lakh-19.55Lakh"  />
    </div>
    
  
  );
}

export default App;
