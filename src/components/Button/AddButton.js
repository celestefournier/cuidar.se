import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => {
    return (
        <div className="fixed-action-btn">
          <Link to="/add" className="waves-effect waves-light btn-floating btn-large add-btn">
            <i className="large material-icons">add</i>
          </Link>
        </div>
    );
};

export default AddButton;