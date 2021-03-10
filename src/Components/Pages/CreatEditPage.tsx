import Classes from "../../jsoncode/classes";
import React, {useState} from "react";
import Lead from "../../jsoncode/layout";
import {Page} from "../../Types/TabsTypes"
import {Link} from "react-router-dom";

const CreatEditPage = () => {
    const [pages, setPages]=useState([Lead])
    let newPageName: string;

    const takePageName = (event: React.ChangeEvent<HTMLSelectElement>) => {
        newPageName = (event.target.value === "select page") ? "" : event.target.value ;
    }

    const addNewPage = () => {
        if (newPageName){
            const pagesArray = JSON.parse(JSON.stringify(pages));
            pagesArray.push({classId:newPageName});
            setPages(pagesArray);
            newPageName= "";
        }
    }

    const deletePage = (id)=>{
        const pagesArray = JSON.parse(JSON.stringify(pages));
        pagesArray.map((page,index)=>{
            if (page.classId === id){
                pagesArray.splice(index,1);
            }
        })
        setPages(pagesArray);
    }

    return(
        <>
            <h1>Pages</h1>
            <span> Create New Page </span>
            <select className="form-select" aria-label="Default select example" onChange={takePageName}>
                <option>select page</option>
                {Classes.map((obj)=>{
                    if (obj.isDocument && !obj.isSystem) {
                        return <option key={obj.name} value={obj.name}>{obj.name}</option>
                    }
                })}
            </select>
            <button className="btn btn-sm btn-primary m-2" type="button" onClick={addNewPage}>Add</button>
            <table className="m-3 border">
                <thead>
        <tr>
            <th className="border p-1 m-2 text-center">Title</th>
            <th className="border p-1 m-2 text-center">Delete</th>
            <th className="border p-1 m-2 text-center">Edit</th>
        </tr>
        </thead>
                <tbody>
                {pages.map((page: Page)=> {
                    return(
                        <tr key={page.classId}>
                            <td className="border p-1">
                            <h3>{page.classId}</h3>
                            </td>
                            <td className="border p-1">
                                <button className="btn btn-sm btn-danger m-2" type="button" onClick={()=> deletePage(page.classId)}>
                                    Delete
                                </button>
                            </td>
                            <td className="border p-1">
                                <Link to={`/${page.classId}`} className='btn btn-sm btn-primary m-2'>
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default CreatEditPage;