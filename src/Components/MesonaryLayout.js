import React from "react";
import '../Mesnory.css'
import Masonry from 'react-masonry-css'
// import row1Img1 from "../logos/new-artical-1-1.png";
// import row1Img2 from '../logos/new-artical-1-2.png'
//import row2Img1 from '../logos/new-artical-2-1.png'
// import row2Img2 from '../logos/new-artical-2-2.png'
// import row2Img3 from '../logos/new-artical-2-3.png'
// import row3Img1 from '../logos/new-artical-3-1.png'
// import row3Img2 from '../logos/new-artical-3-2.png'
const Artical = () => {
  return (
    <>
       <h4 className="text-center mt-5 artical-heading">NEW ARTICALS</h4>
        <p className="text-center artical-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
       <Masonry className="grid my-masonry-grid"  />
  <div className="item item1"></div>
  <div className="item item2"></div>
  <div className="item item3"></div>
  <div className="item item4"></div>
  <div className="item item5"></div>
  <div className="item item6"></div>
  <div className="item item7"></div>
 
 
    </>
  );
};

export default Artical;
