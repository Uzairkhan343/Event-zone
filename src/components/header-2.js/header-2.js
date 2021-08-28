import image5 from "../../assets/images/24.png";
const Header = () => {
  return (
    <div>
      <div className={'main-head'}>
        <div className={'icon-text-flex'}>
          <div className={'icon-img-width'}>
            <img src={image5} alt=""></img>
          </div>
          <div>
            <p>Napa Valley Women’s Half & 5K</p>
          </div>
        </div>
        {/* button */}
        <div>
        <button class={"btn"}><i class={"fa fa-home"}></i> Home</button>
        </div>
      </div>
      
    </div>
  );
};
export default Header;
