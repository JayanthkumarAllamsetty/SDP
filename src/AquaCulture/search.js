import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Data'

export default function search() {
    return (
        <section className="Container">
            <div className="justify-content">
                <div>
                    {/* <div>
                        <label className="from-lable">
                            Search
                            <input type="text"
                            className="form"/>
                             
                             </label>
                        </div> */}
                </div>
                {data.cardData.map((item,index)=>{
                    return(
                        <div className="card">
                        <img src={item.img} className="card-img-top"/> 
                        <div className="card-body">
                            <h5 className="card-title" >{item.title}</h5>
                            {/* <h5  className="card-text"> card-text</h5> */}
                            <p className="card-text">{item.desc}</p>
    
                                </div>
    
                        </div>
             
               
                    )
                })}
                    </div>
        </section>
    )
}
