import React from 'react';
import './TopNavBar.css';
import { FaPinterestSquare, FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const TopNavBar = () => {
    return (
		<div className="header-top">
			<div className="row">
				<div className="col-md-10 col-sm-12 contact">
					<div className="row g-0">
						<div className="col-md-6 col-sm-12 address">
							<ul>
								<li><a href="#" class="golocation"><span><GoLocation/></span> Grand Road, UK </a></li>
			 					<li><a href="#"><AiOutlineMail/> doom@gmail.com</a></li>
							</ul>
						</div>
						<div className="col-md-6 col-sm-12 social-icon">
							<ul>
								<li><a href="#"><FaPinterestSquare/></a></li>
								<li><a href="#"><FaFacebookF/></a></li>
								<li><a href="#"><FaTwitter/></a></li>
								<li><a href="#"><FaDribbble/></a></li>
								<li><a href="#"><FaBehance/></a></li>
								<li><a href="#"><FaLinkedinIn/></a></li>
							</ul>
						</div>
					</div>
				</div>
				  <div className=" col-md-2 g-0 col-sm-12 call-us">
				 <a href=""><FiPhoneCall/> +45 72 398455 53</a>
				</div>
			</div>
		</div>
    );
};

export default TopNavBar;