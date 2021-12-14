import React from 'react';
import { useDispatch } from 'react-redux';

const EditPopup = ({children, isVisible}) => {
    let dispatch = useDispatch();

    return (
        <div className={isVisible?'popup-active':'popup'}>
            <div className="task__container">
                {children}
            </div>
      </div>
    );
};

export default EditPopup;