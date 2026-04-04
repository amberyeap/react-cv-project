import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
	const [generalData, setGenData] = useState({
		name: "",
		email: "",
		phone: ""
	});

	const [educationData, setEduData] = useState({
		schoolName:"",
		studyTitle:"",
		studyDate:""
	});

	const [workData, setWorkData] = useState({
		company:"",
		position:"",
		repsonsibilities:"",
		startDate:"",
		endDate:""
	});

	return (
		<div>
			<form>
				<h1>CV Builder</h1>
				<GeneralInfo 
					data={generalData}
					setData={setGenData}
				/>
				<EducationExp 
					data={educationData}
					setData={setEduData}
				/>
				<WorkExp
					data={workData}
					setData={setWorkData}
				/>
			</form>
		</div>
	);
}

function GeneralInfo({data, setData}) {

	function handleChange(e) {
		const {name, value} = e.target;
		setData({
			...data,
			[name]: value
		});
	}

	return (
		<div>
			<h2>General Information</h2>
			<label>Name:
				<input
					name="name"
					placeholder="Bob the Builder"
					value={data.name}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Email:
				<input 
					name="email"
					placeholder="bob_builder@gmail.com"
					value={data.email}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Phone Number:
				<input 
					name="phone"
					placeholder="123456789"
					value={data.phone}
					onChange={handleChange}
				/>
			</label>
		</div>
	);
}

function EducationExp({data, setData}) {

	function handleChange(e) {
		const {name, value} = e.target;
		setData({
			...data,
			[name]: value
		});
	}

	return (
		<div>
			<h2>Education Experience</h2>
			<label>Name of Institution:
				<input
					name="schoolName"
					placeholder="Mickey Mouse Clubhouse"
					value={data.schoolName}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Title of Study:
				<input
					name="studyTitle"
					placeholder="The Mickey Dance"
					value={data.studyTitle}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Date of Study:
				<input
					name="studyDate"
					placeholder="DD/MM/YYYY"
					value={formData.studyDate}
					onChange={handleChange}
				/>
			</label>
		</div>
	)
}

function WorkExp({data, setData}) {

	function handleChange(e) {
		const {name, value} = e.target;
		setData({
			...data,
			[name]: value
		});
	}

	return (
		<div>
			<h2>Work Experience</h2>
			<label>Name of Company:
				<input
					name="company"
					placeholder="ABC Company"
					value={data.company}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Position Title:
				<input
					name="position"
					placeholder="Alphabet Reciter"
					value={data.position}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Main Responsibilities:
				<input
					name="responsibilities"
					placeholder="Reciting the alphabet"
					value={data.repsonsibilities}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Starting Date:
				<input
					name="startDate"
					placeholder="DD/MM/YYYY"
					value={data.startDate}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Ending Date:
				<input
					name="endDate"
					placeholder="DD/MM/YYYY"
					value={data.endDate}
					onChange={handleChange}
				/>
			</label>
		</div>
	)
}
