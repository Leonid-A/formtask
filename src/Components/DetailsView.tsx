import React from 'react';
import {Comp, Props, Sect} from "../Types/TabsTypes";

const DetailsView: React.FC<Props> = (props) => {
    return(
        <div className="p-3 mb-2 bg-secondary text-white border-dark rounded col-8">
            <div className="d-flex">
                <h3>{props.title}</h3>
                <span className="p-2">ICON: {props.icon}</span>
                <button className="btn btn-primary m-2" type="button" >Add Props</button>
            </div>
            <div>
                <label htmlFor={`${props.title}Path`} className="mr-2">Path</label>
                <input type="text" id={`${props.title}Path`} name={`${props.title}Path`}  defaultValue={props.path}/>
            </div>
            <div>
             {props.properties.sections && props.properties.sections.map((section: Sect) => {           // drawing sections in properties
                return(
                <div key={section.title} className="col-10 bg-dark border-light rounded">
                    <h3>{section.title}</h3>
                    <div>
                        <input type="checkbox" id="editable" name="editable"  defaultChecked={section.editable}/>
                        <label htmlFor="editable" className="ml-2">Editable</label>
                    </div>
                    <div>
                        <table className="mb-2 border">
                            <thead>
                                <tr>
                                    <th className="border p-1 m-2 text-center">Label</th>
                                    <th className="border p-1 m-2 text-center">Component</th>
                                    <th className="border p-1 m-2 text-center">Read</th>
                                    <th className="border p-1 m-2 text-center">Write</th>
                                    <th className="border p-1 m-2 text-center">Placeholder</th>
                                </tr>
                            </thead>
                            <tbody>
                                {section.selectedFields.map((field: Comp) => {                 // drawing fields from section
                                    return (
                                        <tr key={Math.random()}>
                                            <td className="border p-1">
                                                <input type="text" defaultValue={field.label}/>
                                            </td>
                                            <td className="border p-1">
                                                <select id={field.name} className="m-2">
                                                    <option> </option>
                                                    <option>PointerField</option>
                                                    <option>TextField</option>
                                                    <option>CurrencyField</option>
                                                    <option>ChoiceField</option>
                                                    <option>SwitchField</option>
                                                </select>
                                            </td>
                                            <td className="border p-1">
                                                <input type="checkbox"
                                                       id={`read${field.name}`}
                                                       className="m-3"
                                                       name={`read${field.name}`}
                                                       defaultChecked={field.read}/>
                                            </td>
                                            <td className="border p-1">
                                                <input type="checkbox"
                                                       id={`write${field.name}`}
                                                       className="m-3"
                                                       name={`write${field.name}`}
                                                       defaultChecked={field.write}/>
                                            </td>
                                            <td className="border p-1">
                                                <input type="text"
                                                       className="m-3"
                                                       defaultValue={field.placeholder}/>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default DetailsView;