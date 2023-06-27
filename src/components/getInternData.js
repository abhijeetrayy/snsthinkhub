'use client'
import {useState, useEffect} from "react"
import Link from "next/link"

export default function getInternData(){

const [data, setData] = useState(null)

useEffect(()=>{
	const find = async ()=>{
		try{const res =  await fetch('/api/getInternData');
				const response = await res.json()
				console.log(response)
				setData(response?.data)}
				catch (error){
					console.log("Error fetching data", error)
				}

		
	}
		find()
},[])
	return(
<>
	<div className="w-full flex flex-col">
		<div>Internship List</div>
		<div className="flex flex-row gap-6 block justify-around">
			<div>InternshipId</div>
			<div>Internship Name</div>
		</div>
	{ data ?
		data.map((item)=>(
			<div className="flex flex-row gap-6 block justify-around">
				<Link className="underline pointer" href={`/admin/internship/${item.internshipId}`} key={item._id}>{item.internshipId}</Link>
				<span>web devlopment</span>
			</div>
			)) : "wait"
			
	}
	</div>
	
</>
	)
}

