import image17 from "../../assets/images/download.png";
const Footter = () => {
  return (
    <div>
      {/* logo */}
      <div className="main-flex">
        <div className="main-logo-text">
          <div>
            <img src={image17}></img>
          </div>
          {/* text */}
          <div>
            <p>© 2016 Athlete IQ.All rights reserved</p>
          </div>
        </div>
        {/* navigation */}
        <div className='navi-flex-sec'>
          <div>
            <ul>
              <li className='font-size'>About</li>
              <li className='font-adjust'>Privacy Policy</li>
              <li>About Event Zone</li>
            </ul>
          </div>
          {/* navi */}
          <div>
            <ul>
              <li className='font-size'>Home</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footter;
