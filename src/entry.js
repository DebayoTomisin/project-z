import React, { useState } from 'react'
import Layout from './layout'
import { data } from './data'

const Entry = () =>
{
    return(
        <Layout>
            <div className="md:flex items-center flex-col m-2 md:mt-10">
                <h1 className="text-xl md:text-3xl font-bold">Project Z Categories & Items</h1>
                {
                    Object.keys(data).length === 0 ? 
                    <p className="text-red-400 text-semibold text-lg mt-20">There are currently no items or categories</p>
                    :
                    <div>
                        {Object.keys(data).map((key, index) => {
                            console.log()
                            return(
                                <div key={index} className="my-5">
                                    <h1 className="text-2xl text-capitalize font-bold">{key}</h1>
                                    {
                                        data[key].length === 0 ?
                                        <p className="text-red-400 text-semibold text-lg mt-4 ">There are currently no items in this category</p> 
                                        :
                                        <div>
                                            {
                                                data[key].map((item, index) => {
                                                    return(
                                                        <div key={index} className="my-4">
                                                            <h4 className="text-xl font-semibold">{item.name}</h4>
                                                            <p>{item.desc}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                    
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </Layout>
        
    )
}

export default Entry
