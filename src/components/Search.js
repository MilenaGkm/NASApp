import React, { useState, useEffect } from 'react'
import MediaCard from "./MediaCard"
const axios = require('axios');

export default function Search() {
	const [input, setinput] = useState({ input: "" })
	const [results, setResults] = useState([])

	const addToFavourites = async (url) => {
		await axios.post(`http://localhost:3001/image`, url)
	}

	useEffect(() => {
		(async () => {
			const search = await axios.get(`https://images-api.nasa.gov/search?q=${input}&media_type=image`)
			const searchResults = await search.data.collection.items.map(r => {
				return {
					img: {
						title: r.data[0].title,
						description: r.data[0].description,
						url: r.links[0].href
					}
				}
			})
			setResults(searchResults)
		})()
	}, [input])

	return (
		<div>
			<input placeholder="The moon is just the beginning" value={input.input} onChange={e => setinput(e.target.value)} ></input>
			<div className="s">
				{results.map((r, i) => {
					return <MediaCard key={i} search={r.img} addToFavourites={addToFavourites} />
				})}
			</div>
		</div>
	)
}