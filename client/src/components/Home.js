import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Table, Button } from 'semantic-ui-react'


const Home = () => {

  const[getUserData,setUserData] = useState([]);
  console.log(getUserData)

  const getdata = async() =>{

    const res = await fetch("/getdata",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    })
    const data = await res.json();
    console.log(data);

    if(res.status===404 || !data){
        console.log("Error");
    }else{
      setUserData(data);
        console.log(" Get Data ")
    }
}

  useEffect(()=>{
    getdata();
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
      getdata();

    }
  }



  return (
    <>
    <div className='container mt-5'>
    <div className='add-btn'>
      <NavLink to="/register" className='btn btn-primary' color='primary'>Add</NavLink> 
    </div>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Job</Table.HeaderCell>
        <Table.HeaderCell>Number</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      {
        getUserData.map((element,id)=>{
          return(
            <>
              <Table.Row>
                <Table.Cell>{id + 1}</Table.Cell>
                <Table.Cell>{element.name}</Table.Cell>
                <Table.Cell>{element.email}</Table.Cell>
                <Table.Cell>{element.work}</Table.Cell>
                <Table.Cell>{element.mobile}</Table.Cell>
                <div className='btn'>
                  <NavLink to={`/details/${element._id}`}><Button color='green' className='mx-2'>Read</Button></NavLink>
                 <NavLink to={`/edit/${element._id}`}> <Button color='blue' className='mx-2'>Update</Button></NavLink>
                  <NavLink><Button onClick={()=>deleteuser(element._id)} color='red' className='mx-2'>Delete</Button></NavLink>
                </div>
              </Table.Row>
            
            
            </>
          )
        })
      }
  </Table.Body>
  </Table>
    </div>

    </>

  )
  
 
}


export default Home
