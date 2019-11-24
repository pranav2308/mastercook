import React from 'react';
import './CourseBrowser.css';

const CourseBrowser = () => {

	const tableStyle = {
		height: '300px',
		marginTop: '10%',
		marginLeft: 'auto',
		marginRight: 'auto'
	}
	const bigHeadingStyle = {
		color: '#7a653f',
		fontWeight: 'bold',
		fontSize: '350%'
	}
	const tofuImgUrl = "https://www.usnews.com/dims4/USNEWS/4f17cab/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Fa9%2F14%2Fc75d491f4979a756e6108846c2e5%2F161104-tofucubes-stock.jpg"
	return (
		<div>
			<div class="optionContainer">
				<div class="dropdown show">
					<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Sort by
					</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a class="dropdown-item" href="#">Most relevant</a>
						<a class="dropdown-item" href="#">Recent</a>
						<a class="dropdown-item" href="#">Name (A->Z)</a>
						<a class="dropdown-item" href="#">Name (Z->A)</a>
					</div>
				</div>
				<div class="dropdown show">
					<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Categories
					</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a class="dropdown-item" href="#">All</a>
						<a class="dropdown-item" href="#">Indian</a>
						<a class="dropdown-item" href="#">Thai</a>
						<a class="dropdown-item" href="#">Chinese</a>
						
					</div>
					
				</div>
			</div>

			<section class="resultCard">
				<div class="card">
					<div class="row ">
						<div class="col-md-3">
							<img src={tofuImgUrl} class="resultCardImage"/>
						</div>
						<div class="col-md-8 px-3">
							<div class="card-block px-3">
							<p class="card-text">Name: Cooking with Babish</p>
							<p class="card-text">Description: Blah Blah</p>
							<p class="card-text"> Duration: 1 hour</p>
							<p class="card-text"> Rating: 4.5/5</p>
							<button class="btn btn-primary" type="submit">Enroll Now</button>
							</div>
						</div>

						</div>
					</div>


			</section>
			
			<table style={tableStyle}>
				<tbody>
					<tr>
						<td className="align-middle text-center" style={bigHeadingStyle}>Course Browser Page</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default CourseBrowser;