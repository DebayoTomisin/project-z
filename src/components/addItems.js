import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../layout'
import { data } from '../data'

const AddItems = () =>
{
    const history = useHistory()
    const [values, setValues] = useState({
        name: '',
        desc: '',
        category: ''
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setValues({
          ...values,
          [evt.target.name]: value
        });
    }

    const handleSubmit = () => {
        if (values.name.length < 3 && values.desc.length < 3 && values.category === ''){
            window.alert('the required length is atleast 3 characters')
        }
        else{
            const name = values.name
            const desc = values.desc
            data[values.category].push({ name, desc})
            history.push('/')
        }
    }
    
    console.log(values)
    
    return(
        <Layout>
            <div className="md:flex items-center md:item-start  flex-col m-2 md:mt-10">
                <h1 className="text-xl md:text-3xl font-bold">Create an item</h1>
                <div className="mt-10 flex items-center flex-col md:w-3/4 ">
                    <div className="flex flex-col w-full mb-5">
                        <label>Name </label>
                        <input value={values.name} name="name" className="p-3 mt-2 text-sm h-full border border-input rounded-lg focus:outline-none w-full md:w-2/4" type="text" onChange={handleChange} />
                    </div>

                    <div className="flex flex-col w-full mb-5">
                        <label>Description </label>
                        <input value={values.desc} name="desc" className="p-3 mt-2 text-sm h-full border border-input rounded-lg focus:outline-none w-full md:w-2/4" type="text" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col w-full">
                        <label>Category</label>
                        <select name="category" value={values.category} onChange={handleChange} className="p-3 mt-2 text-sm h-full border border-input rounded-lg focus:outline-none w-full md:w-2/4">
                            <option value=''>Please select an option from the available categories</option>
                            {
                                Object.keys(data).map((item, idx) => (
                                    <>
                                        
                                        <option key={idx} value={item}>{item}</option>
                                    </>
                                ))
                            }
                        </select>
                    </div>
                    <button onClick={handleSubmit} disabled={(values.name.length < 3 && values.desc.length < 3 && values.category === '')} className={"bg-blue-600 text-white cursor-pointer px-7 py-2.5  text-sm rounded-md mr-4 font-normal mt-6 w-2/4 md:w-1/4 flex justify-center"}>Add Item</button>
                    
                </div>
            </div>
        </Layout>
    )
}

export default AddItems
