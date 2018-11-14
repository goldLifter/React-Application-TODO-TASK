import React from 'react';

function Delete(props){
    return(
        <button className="delete icon" onClick={props.onClick} {...props}>
            {props.icon ?
            <i className="material-icons">{props.icon}</i>
            :
            props.children
            }
        </button>
    )
}

export default Delete;