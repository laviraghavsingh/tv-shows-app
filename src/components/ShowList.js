import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/showList.css';

const ShowList = ({ shows }) => {
  return (
    <div className="row">
      {shows.map((show) => (
        <div className="col-md-4 mb-4" key={show.show.id}>
          <div className="card">
            {show.show.image && show.show.image.medium && (
              <img src={show.show.image.medium} className="card-img-top" alt={show.show.name} />
            )}
            <div className="card-body">
              <h5 className="card-title">{show.show.name}</h5>
              <p className="card-text"><div dangerouslySetInnerHTML={{ __html: show.show.summary }} />
</p>
              <Link to={`/details/${show.show.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
