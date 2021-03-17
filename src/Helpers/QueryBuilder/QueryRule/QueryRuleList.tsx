import React                             from 'react';
import {FC}                              from 'react';

export const QueryRuleList:FC = (props)=>{
    return (
        <div className="qb-rule-list">{props.children}</div>
    )
};
export default QueryRuleList;