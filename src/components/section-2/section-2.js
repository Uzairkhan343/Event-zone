import image7 from "../../assets/images/drop-down.png";
const Section = () => {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };

  return (
    <div>
      <div className={"section-2-main"}>
        <div className={"sec-2"}>
          {/* logo */}
          <div className={"img-logo-wd"}>
            <img src={image7}></img>
          </div>
          {/* drop-down */}
          <div class={"drop-down"}>
            <div class={"dropdown drop-down"}>
              <button class={"dropbtn"} onclick="myFunction()">
                <i class={"fa fa-caret-down"}></i>
              </button>
              <div class={"dropdown-content"} id={"myDropdown"}>
                <a href="#">LOCAL GUIDE</a>
                <a href="#">First Timer Advice</a>
                <a href="#">Gear and Nutrition</a>
                <a href="#">Course</a>
                <a href="#">Rewards</a>
                <a href="#">Event Reviews</a>
                <a href="#">Event Reviews</a>
                <a href="#">Your Story</a>
              </div>
            </div>
          </div>
        </div>
        {/* heading */}
        <div>
          <div>
            <h5>Rewards</h5>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className={'buttons-sec-flex'}>
        {/* btn */}
        <div className={'btn-adjust'}>
          <button type={"button"}>35 Conversations</button>
        </div>
        {/* btn */}
        <div className={'btn-sec'}>
          <div className={'same-btn'}>
            <button>
              <i class={"fa fa-share-alt"}></i>Button{" "}
            </button>
          </div>
          {/* btn */}
          <div>
          <button className={'same-button'}> Register <i class="fa fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
