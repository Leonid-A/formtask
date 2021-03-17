import React                             from 'react';
import {FC}                              from 'react';


export const QueryGroupContainer:FC = (props)=>{
    return (
        <div className="qb-group-container">{props.children}</div>
    )
};

export default QueryGroupContainer;