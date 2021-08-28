const Bgimage = () => {
  return (
    <div>
      {/* bg-img */}
      <div className="bg-img">
        <div className="form-section-main">
          <div className="heading-paragraph">
            <h5>Contact Us</h5>
            <p>Please complete the form and we will get back to you.</p>
          </div>
          {/* input */}
          <div className="form-bottom">
            <div className="input-section">
              <div className="pd-main">
                <input type={"text"} placeholder="Your name"></input>
           
              </div>
              {/* input */}
              <div className="pd-main">
                <input type={"text"} placeholder="Email Address"></input>
                
              </div>
              <div className="pd-main">
                <input type={"text"} placeholder=" Company"></input>
              
              </div>
              <div className="pd-main btn-height">
                <label for="w3review">
                  <textarea className='textarea' id="w3review" name="w3review" rows="4" cols="50">
                    Message
                  </textarea>
                </label>
                
              </div>
              {/* btn */}
              <div className="btn-sec-main">
                <div>
                  <button type="button">Contact Us</button>
                </div>
                <div className='anchor-main'>
                  <p >Privacy Policy</p>
                </div>
              </div>
            </div>
            </div>
          </div>
       
      </div>
    </div>
  );
};
export default Bgimage;
