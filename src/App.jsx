import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
	return (
		<div>
			<form>
				<h1>CV Builder!</h1>
				<GeneralInfo />
				<EducationExp />
				<WorkExp />
			</form>
		</div>
	);
}

function GeneralInfo() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: ""
	});
	
	function handleChange(e) {
		const {name, value} = e.target;
		setFormData({
			...formData,
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
					value={formData.name}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Email:
				<input 
					name="email"
					placeholder="bob_builder@gmail.com"
					value={formData.email}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Phone Number:
				<input 
					name="phone"
					placeholder="123456789"
					value={formData.phone}
					onChange={handleChange}
				/>
			</label>
		</div>
	);
}

function EducationExp() {
	const [formData, setFormData] = useState({
		schoolName:"",
		studyTitle:"",
		studyDate:""
	})

	function handleChange(e) {
		const {name, value} = e.target;
		setFormData({
			...formData,
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
					value={formData.schoolName}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Title of Study:
				<input
					name="studyTitle"
					placeholder="The Mickey Dance"
					value={formData.studyTitle}
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

function WorkExp() {
	const [formData, setFormData] = useState({
		company:"",
		position:"",
		repsonsibilities:"",
		startDate:"",
		endDate:""
	})

	function handleChange(e) {
		const {name, value} = e.target;
		setFormData({
			...formData,
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
					value={formData.company}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Position Title:
				<input
					name="position"
					placeholder="Alphabet Reciter"
					value={formData.position}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Main Responsibilities:
				<input
					name="responsibilities"
					placeholder="Reciting the alphabet"
					value={formData.repsonsibilities}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Starting Date:
				<input
					name="startDate"
					placeholder="DD/MM/YYYY"
					value={formData.startDate}
					onChange={handleChange}
				/>
			</label>
			<br />

			<label>Ending Date:
				<input
					name="endDate"
					placeholder="DD/MM/YYYY"
					value={formData.endDate}
					onChange={handleChange}
				/>
			</label>
		</div>
	)
}
