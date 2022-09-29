import React from 'react';

function Card(props) {
return(
<div className="d-flex flex-wrap">
        {props.items.map((item) =>
          <div className="card m-3">
            <div className='card-body'>
              <h3>{item.name}</h3>
              {props.values.type ? <p>Type: {item.brewery_type}</p> : ""}
              {props.values.country ? <p>Country: {item.country}</p> : ""}
              {props.values.city ? <p>City: {item.city}</p> : ""}
              {(props.values.address && item.street !== null) ? <p>Address: {item.street}</p> : ""}
            </div>
          </div>
        )}
      </div>
);
}

export default Card;