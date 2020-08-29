import React from 'react';

function Search () {
    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" placeholder="Search for a book:" class="form-control" aria-label="Name:" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button className ="btn btn-outline-secondary" type="button" id="button-addon2">Click to Search!</button>
            </div>
            </div>
        </div>
    )
}