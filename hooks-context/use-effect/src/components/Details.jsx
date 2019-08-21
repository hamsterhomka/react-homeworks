import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';

function Details({info}) {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_USERS_URL}/${info.id}.json`)
      .then(response => response.json())
      .then(response => setUser(response))
      .then(() => setIsLoading(false));

  }, [info.id]);

  return (
    <div className="details uk-card uk-card-default">
      <div className="uk-card-media-top details__top">
        {isLoading && <div className="details__spinner" data-uk-spinner/>}
        {!isLoading && <img src={user.avatar} alt=""/>}
      </div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">{!isLoading && user.name}{isLoading && '\xa0'}</h3>

        <ul className="list uk-list uk-list-divider">
          <li>city: {!isLoading && user.details.city}</li>
          <li>company: {!isLoading && user.details.company}</li>
          <li>position: {!isLoading && user.details.position}</li>
        </ul>
      </div>
    </div>
  );
}

Details.propTypes = {};

export default Details;