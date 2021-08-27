import image4 from "../../assets/images/download.png";
const Footer = (props) => {
  let {data}=props
  console.log("data",data);
  return (
    <div>
      <div > 
        <div className={"main-footer "}>
          <div className={'logo-text'}>
            <div className={'img-width-footer'}>
              <img src={image4}></img>
            </div>
          
            <div>
              <p className={'mg-text'}>© 2016 Athlete IQ.All rights reserveda</p>
            </div>
          </div>
          {/* navigation */}
          <div className={'navi-flex'}>
            <div>
              
              <ul>
                <li className={'text-font'}>
                  <a href={""}>About</a>
                </li>
                {
            data.map((single,index)=><div>
              <p>{single.id}</p>
              <p>{single.name}</p>
            </div>
            )
            }
                <li className={'font-small'}>
                  <a href={""}>Privacy Policy</a>
                </li>
                <li className={'font-small'}>
                  <a href={""}>About Event Zone</a>
                </li>
              </ul>
            </div>
            {/* navi */}
            <div>
              <ul>
                <li className={'text-font'}>
                  <a href={""}>Home</a>
                </li>
                <li className={'font-small'}>
                  <a href={""}>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
