import background from "../../assets/images/bg-image.jpg";

const Section = () => {
  return (
    <div>
      <div
        className={"image-width-2"}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={"pd-1"}>
          <div className={"heading-adjust"}>
            <h2>Your Event Journey</h2>
          </div>
          <div className={"heading-adjust-2"}>
            <h2>Start Here!</h2>
          </div>
          {/* input */}
          <div className={"input-adjust"}>
            <label className={"border-color"} for="cars">
              <select className={"innput"} name="cars" id="cars">
                <option value="volvo">Please Select THE Event</option>
                <option value="saab">Please Select THE Event</option>
                <option value="mercedes">Please Select THE Event</option>
                <option value="audi">Please Select THE Event</option>
              </select>
            </label>
          </div>
          <div className={"paragraph-adjust"}>
            <p>The best advice, conversations, stories, and insights from</p>
            <p className={"re-pd"}>
         
              your fellow event-goers, curated for your success.
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default Section;
