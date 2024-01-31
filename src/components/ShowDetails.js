import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BookingForm from './bookingForm';
import './css/showList.css';


const ShowDetails = ({ shows }) => {
    const { showId } = useParams();
    const show = shows.find((s) => s.show.id.toString() === showId);

    if (!show) {
        return <div>Show not found</div>;
    }

    return (
        <div className='details'>
            <h2>{show.show.name}</h2>
            {show.show.image && show.show.image.original && (
                <img src={show.show.image.original} className='image' alt={show.show.name} />
            )}
            <div className='mb-3 mt-3' style={{ width: '50%' }} dangerouslySetInnerHTML={{ __html: show.show.summary }} />
            <a href={show.show.url} class="btn btn-primary mb-3" target="_blank" rel="noopener noreferrer">
                Official Site
            </a>
            <BookingForm showId={show.show.id} showName={show.show.name} />
            <br />
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default ShowDetails;
