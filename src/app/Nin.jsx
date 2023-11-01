import React from "react";

export default function Nin({ data }) {
  return (
    <>
      <div
        id="p1"
        style={{overflow: "hidden", position: "relative", backgroundColor: "white", width: "909px", height: "1286px",}}
        
      >
        <div
          id="pg1Overlay"
          className="noscroll"
          style={{width:"100%", height:"100%", position:"absolute", zIndex:1, backgroundColor:"rgba(0,0,0,0)"}}
        ></div>
        <div id="pg1" className="noscroll">
          <object
            width="909"
            height="1286"
            data="1/1.svg"
            type="image/svg+xml"
            id="pdf1"
          ></object>    
        </div>
        <div className="text-container">
          <span id="t1_1" className="t s0">
            Please find below your Improved NIN Slip{" "}
          </span>
          <span id="t2_1" className="t s0">
            You may cut it out of the paper, fold and laminate as desired.{" "}
          </span>
          <span id="t3_1" className="t s0">
            For your security &amp; privacy, please DO NOT permit others to make
            photocopies of this slip.{" "}
          </span>
          <span id="t4_1" className="t m0_1 s1">
            {data.nin}{" "}
          </span>
          <span id="t5_1" className="t m1_1 s1">
            {data.nin}{" "}
          </span>
          <span id="t6_1" className="t m2_1 s1">
            {data.nin}{" "}
          </span>
          <span id="t7_1" className="t m3_1 s1">
            {data.nin}{" "}
          </span>
          <span id="t8_1" className="t s2">
            NGA{" "}
          </span>
          <span id="t9_1" className="t s3">
            Surname/Nom{" "}
          </span>
          <span id="ta_1" className="t s4">
            {data.surname}{" "}
          </span>
          <span id="tb_1" className="t s3">
            Given Names/Prenoms{" "}
          </span>
          <span id="tc_1" className="t s4">
            {data.fullname}{" "}
          </span>
          <span id="td_1" className="t s3">
            Date of Birth{" "}
          </span>
          <span id="te_1" className="t s4">
            {data.dob}{" "}
          </span>
          <span id="tf_1" className="t s5">
            National Identification Number (NIN){" "}
          </span>
          <span id="tg_1" className="t s6">
            {data.nin}{" "}
          </span>
        </div>
      </div>
    </>
  );
}
