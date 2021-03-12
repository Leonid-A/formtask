import React, {useState} from 'react';
import {Props} from "../Types/TabsTypes";
import {Field, Form} from "react-final-form";
import Styles from "../Styles/Styles";
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'


const Tab: React.FC<Props> = (props) => {
   // const [tabConfig, setTabConfig] = useState<Props>({...props});
    /*  const [renderConfigs,setRenderConfigs]=useState([]);
      useEffect(() => {
          let newRenderConfigs=[];
          for (let key in tabConfig){
              newRenderConfigs.push([key, tabConfig[key]]);
          }
          setRenderConfigs(newRenderConfigs)
      }, [tabConfig])

      const saveChanges = ()=> {

      }

      const takeChanges =(event, key) => {
        // takeTabChanges[key] = event.target.value;
      }*/

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
        await sleep(300)
        //window.alert(JSON.stringify(values))
        console.log(values)
    }

    return(
       <>
            <h1>{props.title} Tab</h1>
            <Form
                onSubmit={onSubmit}
                mutators={{
                ...arrayMutators
                }}
                initialValues={props}
                render={({ handleSubmit,
                           form,
                           form: { mutators: { push, pop }},
                           submitting,
                           pristine,
                           values
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Path</label>
                            <Field
                                name="path"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Title</label>
                            <Field
                                name="title"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Icon</label>
                            <Field
                                name="icon"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Component</label>
                            <Field name="component" component="select">
                                <option value=""> </option>
                                <option value="DetailsView">DetailsView</option>
                                <option value="NotesView">NotesView</option>
                                <option value="ActivityView">ActivityView</option>
                            </Field>
                        </div>
                        <h3>Properties</h3>
                        <p>Sections</p>
                        <div className="buttons">
                            <button
                                type="button"
                                onClick={() => push('properties.sections', undefined)}
                            >
                                Add Section
                            </button>
                            <button type="button" onClick={() => pop('properties.sections')}>
                                Remove Section
                            </button>
                        </div>
                        <FieldArray name="properties.sections">
                            {({ fields }) =>
                                fields.map((section, sectIndex) => (
                                    <div key={section}>
                                        <div>
                                            <span
                                                onClick={() => fields.remove(sectIndex)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                ❌
                                            </span>
                                        </div>
                                        <div>
                                            <label>Title</label>
                                            <Field
                                                name={`${section}.title`}
                                                component="input"
                                            />
                                        </div>
                                        <div>
                                            <label>Editable</label>
                                            <Field
                                                name={`${section}.editable`}
                                                component="input"
                                                type="checkbox"
                                        />
                                        </div>

                                        <div className="buttons">
                                            <button
                                                type="button"
                                                onClick={() => push(`${section}.selectedFields`, undefined)}
                                            >
                                                Add Field
                                            </button>
                                            <button type="button" onClick={() => pop(`${section}.selectedFields`)}>
                                                Remove Field
                                            </button>
                                        </div>
                                        <FieldArray name={`${section}.selectedFields`}>
                                            {({ fields }) =>
                                                fields.map((field, index) => (
                                                    <div key={field}>
                                                        <div>
                                                            <span
                                                                onClick={() => fields.remove(index)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                ❌
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <label>Label</label>
                                                            <Field
                                                                name={`${field}.label`}
                                                                component="input"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label>Read</label>
                                                            <Field
                                                                name={`${field}.read`}
                                                                component="input"
                                                                type="checkbox"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label>Write</label>
                                                            <Field
                                                                name={`${field}.write`}
                                                                component="input"
                                                                type="checkbox"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label>Name</label>
                                                            <Field
                                                                name={`${field}.name`}
                                                                component="input"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label>Component</label>
                                                            <Field name={`${field}.component`} component="select">
                                                                <option value=""> </option>
                                                                <option value="PointerField">PointerField</option>
                                                                <option value="TextField">TextField</option>
                                                                <option value="CurrencyField">CurrencyField</option>
                                                                <option value="ChoiceField">ChoiceField</option>
                                                                <option value="SwitchField">SwitchField</option>
                                                            </Field>
                                                        </div>


                                                     {/*   <div>
                                                            <label>Placeholder</label>
                                                            <Field
                                                                name={`${field}.placeholder`}
                                                                component="input"
                                                            />
                                                        </div>*/}
                                                    </div>
                                                ))
                                            }
                                        </FieldArray>
                                    </div>
                                ))
                            }
                        </FieldArray>

                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                        {/*<pre>{JSON.stringify(values}</pre>*/}
                    </form>
                )}
            />
       </>
        /*<div className="p-3 mb-2 bg-secondary text-white border-dark rounded">
            <div className="row">
                <div className="col-8">
                    { renderConfigs.map((item)=>{
                        let renderedItem: JSX.Element;
                        switch (item[0]) {
                            case "component":
                                renderedItem =  <div className="row" key={item[0]}>
                                    <div className="col-2">
                                        <label htmlFor={item[0]} className="mr-2">{item[0]}</label>
                                    </div>
                                    <div className="col-4">
                                        <select name={item[0]}
                                                defaultValue={item[1]}
                                                onChange={(event) => takeChanges(event, item[0])}
                                        >
                                            <option value="DetailsView">DetailsView</option>
                                            <option value="NotesView">NotesView</option>
                                            <option value="ActivityView">ActivityView</option>
                                        </select>
                                    </div>
                                </div>
                                break;
                            case "properties":
                                renderedItem =  <div className="row" key={item[0]}>

                                                </div>
                                break;
                            default:
                                renderedItem = <div className="row" key={item[0]}>
                                    <div className="col-2">
                                        <label htmlFor={item[0]} className="mr-2">{item[0]}</label>
                                    </div>
                                    <div className="col-4">
                                        <input type="text"
                                               name={item[0]}
                                               defaultValue={item[1]}
                                               onChange={(event) => takeChanges(event, item[0] )}
                                        />
                                    </div>
                                </div>
                        }
                        return renderedItem
                    })}
                </div>
                <div className="col-2">
                    <button className="btn btn-sm btn-primary m-2"
                            type="button"
                            onClick={saveChanges}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>*/
    )
}

export default Tab;