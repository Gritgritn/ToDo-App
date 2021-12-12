import React from 'react';

const Popup = ({children, visible}) => {

    return (
        <div className={visible?'popup-active':'popup'}>
            <div className="task__container">
                {children}
            </div>
      </div>
    );
};

export default Popup;