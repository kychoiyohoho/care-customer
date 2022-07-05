import React from 'react'

function Customer(props){
    const {id,image,name,birthday,job,gender} = props
    console.log("name",name)
    return(
        <>
        <CustomerProfile  id={id} image={image} name={name}/>
        <CustomerInfo birthday={birthday} job={job} gender={gender} />
        </>
    );
}

function CustomerProfile({id,image,name}){
    return(
        <>
            <img src={image}/>
            <p>{name}</p>
        </>
    );
    
}

function CustomerInfo({birthday,job,gender}){
    return(
        <>
            <p>{birthday}</p>
            <p>{job}</p>
            <p>{gender}</p>
        </>
    );
    
}
export default Customer;