'use client'
import {useState, useEffect} from "react"

export default function getCourseData(){

const [data, setData] = useState(null)

useEffect(()=>{
	const find = async =>{
	const res = await await fetch('/api/getCourseData');
	const response = await res.json()

	setData(response)
	console.log(data)
	}
},[])
	return(
<>

	<p>hello</p>
</>
	)
}

