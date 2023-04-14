import React from "react";
import img1 from "./character-3.png";
import img2 from "./character-1.png";
import img3 from "./character-2.png";
import img4 from "./img4.png"
import img5 from "./img5.png"
import img6 from "./img6.png"
import img7 from "./img7.png"
import img8 from "./img8.png"


const middleleft = () => {
  const style1 = {
    position: "absolute",
    width: "360px",
    height: "640px",
    left: "210px",
    top: "95px",
    background: "#FFFFFF",
    border: "1px solid #C6C6C6",
    borderRadius: "8px",

  };

  const style2 = {
    width: "360px",
    height: "60px",
    padding: "5px",
    background: "#F0F3FD",
    border: "1px solid #D2D2D2",
    borderRadius: "8px",


  };
  const style3 = {
    width: "360px",
    height: "60px",
    padding: "5px",
    left: "210px",
    top: "130px",
    border: "1px solid #D2D2D2",


  };

  const style4 = {
    display: "grid",
    position: "absolute",
    boxSizing: "border-box",
    width: "800px",
    height: "640px",
    left: "600px",
    top: "95px",
    background: "#FFFFFF",
    border: "1px solid #D2D2D2",
    borderRadius: "8px",


  };
  const style5 = {
    position: "absolute",
    boxSizing: "border-box",
    width: "800px",
    height: "55px",
    background: "#FFFFFF",
    border: "1px solid #D2D2D2",
    boxShadow: " 0px 1px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px",


  };
  const style6 = {
    position: "absolute",
    boxSizing: "border-box",
    left: '-13px',
    bottom: '-8px',
    width: "800px",
    height: "52px",
    background: "#FFFFFF",
    border: "1px solid #D2D2D2",
    borderRadius: "0 0 7px 7px",


  }

  const style7 = {
    font: 'font-sans'
  }

  return (
    <>
      <div className="mid-left" grid style={style1}>
        <div className=" flex" style={style2}>
          <div className="">
            <img src={img4} width="60"
              height="40" />
          </div>
          <div className="grid">
            <div className=""> Friends</div>
            <div className=" text-[#7B868E] ">
              All right.. I’ll be waiting for...
            </div>
          </div>
          <div className=" text-[#7B868E] pt-[8px] pl-[44px] ">3h ago</div>
        </div>

        <div className="flex" style={style3}>
          <div className="">
            <img src={img5} width="60"
              height="40" />
          </div>
          <div className="grid">
            <div className=""> College</div>
            <div className=" text-[#7B868E] ">Hey, what’s going on?.</div>
          </div>
          <div className=" text-[#7B868E] pt-[8px] pl-[77px] ">3h ago</div>
        </div>

        <div className="flex" style={style3}>
          <div className="">
            <img src={img6} width="60"
              height="30" />
          </div>
          <div className="grid">
            <div className=""> Enterpreneter</div>
            <div className=" text-[#7B868E] ">
              Thanks for your reply
            </div>
          </div>
          <div className=" text-[#7B868E] pt-[8px] pl-[44px] ">3h ago</div>
        </div>

        <div className="flex" style={style3}>
          <div className="">
            <img src={img7} width="60"
              height="30" />
          </div>
          <div className="grid">
            <div className=""> ProjectX</div>
            <div className=" text-[#7B868E] ">
              Let’s do it!
            </div>
          </div>
          <div className=" text-[#7B868E] pt-[8px] pl-[44px] ">3h ago</div>
        </div>
      </div>

      <div className=" mid-right" style={style4}>
        <div className="flex mid-right-top " style={style5}>
          <div className="flex p-2">
            <img src={img8} width="50"
              height="45" />
            <div className="grid">
              <div className=""> Friend </div>
              <div className=" text-[#7B868E] ">3 members</div>
            </div>
          </div>
          <div className="flex pt-3 pl-[40%] absolute ">
            <div className="">
              <img src={img1} width="32" height="32"></img>
            </div>{" "}
            <div className="">
              <img src={img2} width="32" height="32"></img>
            </div>{" "}
            <div className="">
              <img src={img3} width="32" height="32"></img>
            </div>{" "}
            <div className="">
              <img src={img1} width="32" height="32"></img>
            </div>
          </div>
          <div className="absolute pt-2 pl-[93%]">
            <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="48"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z" /></svg>
          </div>
        </div>


        <div className="mid-right-mid absolute  h-[568px] w-[800px] top-[10%] left-3 " style={style7}  >

          <div className="flex space-x-2">
            <div className="">
              <img src={img1} width="32" height="32"></img>
            </div>
            <div className="grid">
              <div className="flex space-x-8">
                <div className="text-sm"> John Wick </div>{" "}
                <div className=" text-[#7B868E] ">7:00</div>
              </div>
              <div className="flex pt-1 h-[30px] w-[130px] text-[12px] bg-[#F1FFEF] border-solid rounded-md rounded-tl-none">
                ok.. i can do that
              </div>
            </div>
          </div>

          <div className="pr-4 flex justify-end  space-x-2">
            <div className="grid">
              <div className="flex space-x-[80%]">
                <div className=" text-[#7B868E] ">7:00</div>
                <div className="text-sm "> Me </div>{" "}
              </div>
              <div className=" p-3 flex pt-1 h-[30px] w-[250px] text-[12px] bg-[#CAE2FE] border-solid rounded-md rounded-tr-none">
                All right.. I’ll be waiting for your responses
              </div>
            </div>

            <div className="">
              <img src={img3} width="32" height="32"></img>
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="">
              <img src={img2} width="32" height="32"></img>
            </div>
            <div className="grid">
              <div className="flex space-x-[50%]">
                <div className="text-sm"> Jennifer </div>{" "}
                <div className=" text-[#7B868E] ">7:00</div>
              </div>
              <div className="flex pt-1 h-[30px] w-[170px] text-[12px] bg-[#F1FFEF] border-solid rounded-md rounded-tl-none">
                ok.. i can do that.. Pretty easy
              </div>
            </div>
          </div>
          <div className="pt-3"></div>
          <div className="flex space-x-2">
            <div className="">
              <img src={img1} width="32" height="32"></img>
            </div>
            <div className="grid">
              <div className="flex space-x-[70%]">
                <div className="text-sm"> John Wick </div>{" "}
                <div className=" text-[#7B868E] ">7:00</div>
              </div>
              <div className="p-3 flex pt-1 h-[50px] w-[330px] text-[12px] bg-[#F1FFEF] border-solid rounded-md rounded-tl-none">
                Let’s have a meeting at 5. I’ll set it up and I request everyone to join on your system
              </div>
            </div>
          </div>
          <div className="pt-3"></div>

          <div className="flex space-x-2">
            <div className="">
              <img src={img1} width="32" height="32"></img>
            </div>
            <div className="grid">
              <div className="flex space-x-[70%]">
                <div className="text-sm"> John Wick </div>{" "}
                <div className=" text-[#7B868E] ">7:00</div>
              </div>
              <div className="p-3 flex pt-1 h-[50px] w-[330px] text-[12px] bg-[#F1FFEF] border-solid rounded-md rounded-tl-none">
                Let’s have a meeting at 5. I’ll set it up and I request everyone to join on your system
              </div>
            </div>
          </div>

          <div className="pr-4 flex justify-end  space-x-2">
            <div className="grid">
              <div className="flex space-x-[80%]">
                <div className=" text-[#7B868E] ">7:00</div>
                <div className="text-sm "> Me </div>{" "}
              </div>
              <div className="p-3 flex pt-1 h-[30px] w-[280px] text-[12px] bg-[#CAE2FE] border-solid rounded-md rounded-tr-none">
                All right.. I’ll be waiting for everyone to join ^
              </div>
            </div>

            <div className="">
              <img src={img3} width="32" height="32"></img>
            </div>
          </div>
          <div className="pt-4"></div>

          <div className="pr-4 flex justify-end  space-x-2 pt-[-30px] ">
            <div className="grid">
              <div className="flex space-x-[80%]">
                <div className=" text-[#7B868E] ">7:00</div>
                <div className="text-sm "> Me </div>{" "}
              </div>
              <div className="p-3 flex pt-1 h-[30px] w-[280px] text-[12px] bg-[#CAE2FE] border-solid rounded-md rounded-tr-none">
                Feel free to reach out to me anytime. I’m free!
              </div>
            </div>

            <div className="">
              <img src={img3} width="32" height="32"></img>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="">
              <img src={img1} width="32" height="32"></img>
            </div>
            <div className="grid">
              <div className="flex space-x-8">
                <div className="text-sm"> John Wick </div>{" "}
                <div className=" text-[#7B868E] ">7:00</div>
              </div>
              <div className="p-2 flex pt-1 h-[30px] w-[130px] text-[12px] bg-[#F1FFEF] border-solid rounded-md rounded-tl-none">
                Thanks! let's started
              </div>
            </div>
          </div>
          <div className=" flex " style={style6} >
            <div className="text-[#7B868E] pt-3 pl-8">
              Write a Message...
            </div>
            <div className="absolute flex space-x-3 top-[22%] left-[70%]">
              <div className=" ">
                <button className=" bg-[#00CEE0] rounded-md text-white h-[30px] w-[100px]  " > + condition</button>
              </div>
              <div className="">
                <svg width="14" height="25" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0909 6.36364V21C12.0909 23.8127 9.81273 26.0909 7 26.0909C4.18727 26.0909 1.90909 23.8127 1.90909 21V5.09091C1.90909 3.33455 3.33455 1.90909 5.09091 1.90909C6.84727 1.90909 8.27273 3.33455 8.27273 5.09091V18.4545C8.27273 19.1545 7.7 19.7273 7 19.7273C6.3 19.7273 5.72727 19.1545 5.72727 18.4545V6.36364H3.81818V18.4545C3.81818 20.2109 5.24364 21.6364 7 21.6364C8.75636 21.6364 10.1818 20.2109 10.1818 18.4545V5.09091C10.1818 2.27818 7.90364 0 5.09091 0C2.27818 0 0 2.27818 0 5.09091V21C0 24.8691 3.13091 28 7 28C10.8691 28 14 24.8691 14 21V6.36364H12.0909Z" fill="#00354E" />
                </svg>

              </div>
              <div className="">
                <svg width="28" height="23" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.986 0C6.258 0 0 6.272 0 14C0 21.728 6.258 28 13.986 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 13.986 0ZM9.1 8.4C10.262 8.4 11.2 9.338 11.2 10.5C11.2 11.662 10.262 12.6 9.1 12.6C7.938 12.6 7 11.662 7 10.5C7 9.338 7.938 8.4 9.1 8.4ZM14 22.4C10.808 22.4 8.092 20.076 7 16.8H21C19.908 20.076 17.192 22.4 14 22.4ZM18.9 12.6C17.738 12.6 16.8 11.662 16.8 10.5C16.8 9.338 17.738 8.4 18.9 8.4C20.062 8.4 21 9.338 21 10.5C21 11.662 20.062 12.6 18.9 12.6Z" fill="#F78E02" />
                </svg>
              </div>
              <div className="h-[30px] absolute  left-[101%] bg-gray-400 w-[1px]"></div>
              <div className="absolute  left-[111%]">
                <svg width="25" height="23" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0119048 27L25 13.5L0.0119048 0L0 10.5L17.8571 13.5L0 16.5L0.0119048 27Z" fill="#007FDB" />
                </svg>
              </div>
            </div>

          </div>


        </div>





      </div>






    </>
  );
};

export default middleleft;
