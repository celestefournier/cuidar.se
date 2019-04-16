import React from 'react';

const Card = (props) => {
    return (
        <div className="card card-habits">
            <div className="card-content">
                <span className="card-title">{props.name}</span>
                <div className="days">
                    <label>
                        <input type="checkbox" defaultChecked={props.isChecked} />
                        <span className="weekday">QUI</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span className="weekday">SEX</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span className="weekday">SAB</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span className="weekday">DOM</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span className="weekday">SEG</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span className="weekday">TER</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span className="weekday">QUA</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span className="weekday">QUI</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span className="weekday">SEX</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span className="weekday today">HOJE</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Card;