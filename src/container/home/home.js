import Header from "../../components/header/header";
import Section from "../../components/background-image/section-2";
import Footer from "../../components/section-3/footer";
import { useState } from "react";

const Home = () => {
    const [data, setData]=useState([
      {id:1, name:'uzair'},
      {id:2, name:'khan'},
  
    ]);
  
  return (
    <div>
      <Header  />
      <Section />
      <Footer data={data} />
    </div>
  );
};
export default Home;
