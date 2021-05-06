import React, { useState, useEffect } from 'react'
import MediaCard from "./MediaCard"
const axios = require('axios');


export default function Favourites() {
	const [images, setImages] = useState([])
	const [remove, setRemove] = useState(false)

	const searchForImages = async () => {
		let results = await axios.get(`http://localhost:3001/images`)
		let result = results.data
		setImages(result)
	}

	const deleteImg = async (id) => {
		const result = await axios.delete(`http://localhost:3001/image/${id}`)
		if (result.status !== 200) {
			alert('error')
		} else {
			setRemove(!remove)
		}
	}

	useEffect(() => {

		searchForImages()
	}, [remove])

	return (
		<div id="searchResults">
			{images.map(r => <MediaCard img={r} key={r._id + 'fav'} deleteImg={deleteImg} searchForImages={searchForImages} />)}
		</div>
	)
}