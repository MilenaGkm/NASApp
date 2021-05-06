import React from 'react'
import { useLocation } from 'react-router-dom'

export default function MediaCard(props) {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div className="cool">
			{currentPath === '/search' ?
				<div className="search">
					<div><span>{props.search.title}</span></div>
					<div>
						<img height="400px" width="400px" src={props.search.url} alt="" />
					</div>
					<div className="addbtn" onClick={() => props.addToFavourites(props.search)}>+</div>
				</div>
				: currentPath === '/favourites' ?
					<div className="favourites">
						<div><span>{props.img.title}</span></div>
						<img src={props.img.url} alt="" onClick={() => props.searchForImages(props.img._id)} />
						<div className="addbtn" onClick={() => props.deleteImg(props.img._id)}>-</div>
					</div>
					: <div >
						<h2 className="apod">{props.apod.title}</h2>
						<img id="apodImg" className="apod" src={props.apod.thumbnail_url || props.apod.url} alt="" />
						<span className="apod">{props.apod.explanation}</span>
					</div>}
		</div>
	)
}