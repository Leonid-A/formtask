import React from "react";
import {Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import {QueryBuilder} from "../QueryBuilder";


const QueryBuilderPage = () => {
    function onSubmit(){

    }
    return (
        <Form
           initialValues={{
               test:{}
           }}
           mutators={{
               ...arrayMutators
           }}
           onSubmit={onSubmit}
        >
            {()=>{
                return (
                    <QueryBuilder
                        name={'test'}
                        columns={[
                            {
                                field:"name",
                                label:"Name",
                                type:"string"
                            },
                            {
                                field:"age",
                                label:"Age",
                                type:"number"
                            }
                        ]}
                    />
                )
            }}
        </Form>
    )
}
export default QueryBuilderPage;