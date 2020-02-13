import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series }) => {
    const show = series.show;
    let imageMarkup;
    if(show.image) {
        imageMarkup = <img src={show.image.medium} alt="" />
    } else {
        imageMarkup = <img src="https://placehold.it/205x295" alt="" />
    }

    return (
        <li key={show.id}>
            <div className="show-image-placeholder">
                {imageMarkup}
            </div>
            <div className="show-info">
                <Link to={`/series/${show.id}`}>
                    <h1>{show.name}</h1>
                </Link>
                <div>Language: {show.language}</div>
                <div>Premiered: {show.premiered}</div>
                <div>Genres: {show.genres.map(genre => (<p>{genre}</p>))}</div>
            </div>
        </li>
    );
}

export default function SeriesList(props) {
    console.log(props.list);
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    );
}