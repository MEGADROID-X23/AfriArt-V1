import React from "react";
import "./CollectionBox.css";

import { Link } from "react-router-dom";

const CollectionBox = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // return (
  //   <>
  //     <div className="collection">
  //       <div className="collectionLeft">
  //         <p className="col-p">ARTWORK</p>
  //         <h3 className="col-h3">
  //           <span>Women's</span> Gallery
  //         </h3>
  //         <div className="col-link">
  //           <Link to="/shop" onClick={scrollToTop}>
  //             <h5>Shop Now</h5>
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="collectionRight">
  //         <div className="collectionTop">
  //           <p className="col-p">ARTWORK</p>
  //           <h3 className="col-h3">
  //             <span>Men's</span> Gallery
  //           </h3>
  //           <div className="col-link">
  //             <Link to="/shop" onClick={scrollToTop}>
  //               <h5>Shop Now</h5>
  //             </Link>
  //           </div>
  //         </div>
  //         <div className="collectionBottom">
  //           {/* <div className="box1">
  //             <p className="col-p">ARTWORK</p>
  //             <h3 className="col-h3">
  //               <span>Kid's</span> Gallery
  //             </h3>
  //             <div className="col-link">
  //               <Link to="/shop" onClick={scrollToTop}>
  //                 <h5>Shop Now</h5>
  //               </Link>
  //             </div>
  //           </div> */}
  //           <div className="box2">
  //             <h3 className="col-h3">
  //               <span>E-gift</span> Artworks
  //             </h3>
  //             <p className="col-p">
  //               Surprise that special someone with the gift they really want.
  //             </p>
  //             <div className="col-link">
  //               <Link to="https://afri-art-e-gifts.vercel.app/">
  //                 <h5>Shop Now</h5>
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default CollectionBox;
