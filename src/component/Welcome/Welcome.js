import React from 'react'
import './Welcome.css'
import { BsFillCaretRightFill} from "react-icons/bs";
import { FaArrowAltCircleRight } from "react-icons/fa";

function componentName() {
    return (
        <div class="container mt-5 pt-5 w-75">
              <div class="mb-3">
                <p>Fetchers</p>
                <h6>Welcome to <span>Doom Constructions</span></h6>
                <h6>Company, a professional team,</h6>
                <h6>here to help you</h6>
                </div>
            <div class="row g-5">

            <div className="col-md-4 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda nobis placeat incidunt impedit suscipit tempora quae ipsa aut, tenetur fugit tempore explicabo unde ea? Minima vitae numquam ipsam dignissimos!
                   </p>
            </div>
            <div className="col-md-4 ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda nobis placeat incidunt impedit suscipit tempora quae ipsa aut, tenetur fugit tempore explicabo unde ea? Minima vitae numquam ipsam dignissimos!
                   </p>
            </div>
            <div className="col-md-4  ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda nobis placeat incidunt impedit suscipit tempora quae ipsa aut, tenetur fugit tempore explicabo unde ea? Minima vitae numquam ipsam dignissimos!
                   </p>
                </div>
            </div>
            <div class="mt-4">

                    <button type="button" class="btn text-white btn-lg welcome-section-btn">DISCOVER DOOM <BsFillCaretRightFill/></button>

                </div>
        </div>
    )
}

export default componentName
