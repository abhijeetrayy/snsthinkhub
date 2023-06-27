'use client'
import BeatLoader from "react-spinners/BeatLoader";
import {useState} from "react"
export default function MoreButton({data,size }){
let [loading, setLoading] = useState(false);
	return(
	<>
		<button onClick={()=> setLoading(true)}>
                                          {loading ? <BeatLoader color="#FFFFFF" size={size? size: 12}/> : data}
                                        </button>
	</>
	)
}