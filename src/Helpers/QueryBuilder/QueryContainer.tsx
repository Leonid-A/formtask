import './QueryBuilder.css';
import React, {useMemo}    from 'react';
import {FC}                from 'react';
import QueryGroupContainer from "./QueryGroup/QueryGroupContainer";
import QueryGroupHeader    from "./QueryGroup/QueryGroupHeader";
import QueryGroupBody      from "./QueryGroup/QueryGroupBody";
import QueryRuleList       from "./QueryRule/QueryRuleList";
import QueryRuleContainer  from "./QueryRule/QueryRuleContainer";
import {Field}             from "react-final-form";
import {FieldArray}        from "react-final-form-arrays";

export const QueryContainer: FC<{
    name: string,
    deletable?: boolean,
    onDelete?: () => void
}> = ({ name, deletable = false, onDelete }) => useMemo(() => (
    <FieldArray name={`${name}.rules`}>
        {({ fields }) => (
            <QueryGroupContainer>
                <Field name={`${name}.condition`}>
                    {({ input, meta }) => (
                        <QueryGroupHeader
                            {...input}
                            onAddRule={() => fields.push({})}
                            onAddGroup={() => fields.push({
                                rules: [{}]
                            })}
                            deletable={deletable}
                            onDelete={onDelete}
                        />
                    )}
                </Field>
                <QueryGroupBody>
                    <QueryRuleList>
                        {fields.map((name, i) => {
                            if (fields.value[i].rules) {
                                return (
                                    <QueryContainer
                                        key={name}
                                        name={name}
                                        deletable={true}
                                        onDelete={() => fields.remove(i)}
                                    />
                                )
                            }
                            return <QueryRuleContainer key={name} name={name} onDelete={() => fields.remove(i)}/>
                        })}
                    </QueryRuleList>
                </QueryGroupBody>
            </QueryGroupContainer>
        )}
    </FieldArray>
), [name]);

export default QueryContainer;