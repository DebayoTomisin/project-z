import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../layout";
import { data } from "../data";


const AddCategories = () =>
{
    const [category, setCategory] = useState('')
    const [disabled, setDisabled] = useState(true)

    const handleSubmit = () => {
        if (category.length < 3){
            window.alert('The required length is atleast 3 characters')
        }
        else{
            data[category] = []
            console.log(category)
            return(
                <Redirect to='/' />
            )
        }
        
    }
    
    return(
        <Layout>
            <div className="md:flex items-center flex-col m-2 md:mt-10">
                <h1 className="text-xl md:text-3xl font-bold">Create a category</h1>
                <div className="mt-10 flex flex-col md:w-3/4 ">
                    <div className="flex flex-col w-full">
                        <label>Name </label>
                        <input type='text' value={category} onChange= {(e) => setCategory(e.target.value)} className="p-3 mt-2 text-sm h-full border border-input rounded-lg focus:outline-none w-full md:w-2/4  "/>
                    </div>
                    
                    <button onClick={handleSubmit} disabled={!category > 3} className={"bg-blue-600 text-white cursor-pointer px-7 py-2.5  text-sm rounded-md mr-4 font-normal mt-6 w-2/4 md:w-1/4 flex justify-center"}>Add Category</button>
                </div>
            </div>
        </Layout>
        
    )
}

export default AddCategories
