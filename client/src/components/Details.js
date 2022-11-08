import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react'

const Details = () => {

    const [getUser,setUser] = useState([]);

    const {id} = useParams("");
    console.log(id);

    console.log(getUser);

    const getData =async()=>{
        const res = await fetch(`/getuser/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        });

        const data = await res.json();

        if(res.status===404 || !data){
            console.log("Error")
        }else{
            setUser(data);
            console.log("get data");
        }
    };

    useEffect(()=>{
        getData();
    },[])


    const deleteuser =async(id)=>{
        const res2 = await fetch(`/deleteuser/${id}`,{
          method:"DELETE",
          headers:{
              "Content-Type":"application/json"
          },
      });
        const deletedata = await res2.json();
        console.log(deletedata)
        if(res2.status === 404 || !deletedata){
          alert("Something went wrong");
        }else{
          alert("Deleted Successfully");
    
        }
      }


    return (
        <div className='container mt-3'>
            <h1>Welcome {getUser.name}</h1>
            <Card className='card'>
                <Card.Content>
                    <div className='row'>
                    <div className='left_view col-lg-6 c0l-md-6 col-12'>
                        {/* <Icon.Group size='huge' className='mb-4'> */}
                            <Icon name='user' />
                        {/* </Icon.Group> */}
                        <p  className='mt-5'>Name : <span/> {getUser.name}< span /></p>
                        <p className='mt-4'>Age : <span /> {getUser.age} <span /></p>
                        <p className='mt-4'> <Icon name='mail' /> Email : <span /> {getUser.email}<span /></p>
                        <p className='mt-4'> <Icon name='wordpress forms' /> Work : <span /> {getUser.work} <span /></p>
                    </div>
                    <div className='right_view col-lg-6 c0l-md-6 col-12'>
                        <div className='add_btn'>
                            <NavLink to={`/edit/${id}`}><button type="button" className="btn btn-primary mx-2"><Icon name='plus' /></button></NavLink>
                            <NavLink><button onClick={()=>deleteuser(getUser._id)} type="button" className="btn btn-danger"><Icon name='delete' /></button></NavLink>
                        </div>
                        <p className='mt-5'> <Icon name='phone square' /> Mobile : <span>{getUser.mobile}</span></p>
                        <p className='mt-3'><Icon name='location arrow' /> Location : <span>India</span></p>
                        <p className='mt-3'>Description  : <span>{getUser.about}</span></p>
                    </div>

                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default Details
