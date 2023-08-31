import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://th.bing.com/th/id/OIP.pwoSYrcSQaN6Qwng6KWfcQAAAA?pid=ImgDet&rs=1"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">West Plaines Engineering</div>
							<div className="work-subtitle">
								Mechanical Engineering Intern
							</div>
							<div className="work-duration">June 2018 - July 2018</div>
						</div>

						<div className="work">
							<img
								src="https://toppng.com/uploads/preview/hy-vee-logo-vector-free-download-11574166605ezyfmnygox.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Hy-vee</div>
							<div className="work-subtitle">
								Deli Clerk
							</div>
							<div className="work-duration">June 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://th.bing.com/th/id/R.6e0d3108fb226eb3bfe58e4999d918ed?rik=swkJlwZLOReTVQ&pid=ImgRaw&r=0&sres=1&sresct=1"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Iowa State University</div>
							<div className="work-subtitle">
								Student Tech Helper
							</div>
							<div className="work-duration">August 2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
