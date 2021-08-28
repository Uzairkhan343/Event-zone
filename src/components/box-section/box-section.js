import image10 from "../../assets/images/1.jpg";
import image11 from "../../assets/images/twitter.png";
const Box = () => {
  return (
    <div>
      <div className={"main-box-section"}>
        {/* box 1 */}
        <div className={"box-main"}>
          <div className={"wd-img"}>
            <img src={image10} alt=""></img>
          </div>
          {/* sec-1 */}
          <div className={"sec-box"}>
            {/* btn */}

            <div className={"btn-text"}>
              <div>
                <button type={"button"}>Course</button>
              </div>
              {/* img */}
              <div>
                <img src={image11} alt=""></img>
              </div>
            </div>
            {/* paragraph */}
            <div className={"text-font"}>
              <p>
                What Advice Do You Have For The 5K Course? What Are You Looking
                Forward To Most?
              </p>
            </div>
          </div>
        </div>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </div>
    </div>
  );
};
export default Box;
