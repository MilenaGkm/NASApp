import React from 'react'
import { useLocation } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

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
					<FavoriteBorderIcon className="addbtn" onClick={() => props.addToFavourites(props.search)}></FavoriteBorderIcon>
				</div>
				: currentPath === '/favourites' ?
					<div className="favourites">
						<div><span>{props.img.title}</span></div>
						<img src={props.img.url} alt="" onClick={() => props.searchForImages(props.img._id)} />
						<RemoveCircleOutlineIcon className="addbtn" onClick={() => props.deleteImg(props.img._id)}></RemoveCircleOutlineIcon>
					</div>
					: <div >
						<h1 className="apod">{props.apod.title}</h1>
						<img id="apodImg" className="apod" src={props.apod.thumbnail_url || props.apod.url} alt="" />
						<div className="apodEx">{props.apod.explanation}</div>
					</div>}
		</div>
	)
}