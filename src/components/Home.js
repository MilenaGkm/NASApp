import React, { useState, useEffect } from 'react'
import MediaCard from "./MediaCard"
const axios = require('axios');

export default function Home() {
	const [apod, setApod] = useState({})

	useEffect(() => {
		(async () => {
			const apod = await axios.get("https://api.nasa.gov/planetary/apod?thumbs=true&api_key=e5PWsER7KN4edOzU6atDqDZL3b05dRVbHAXaZtgX")
			setApod(apod.data)
		})()
	}, [])

	return (
		<div className="home">
			<MediaCard apod={apod}/>
		</div>
	)
}