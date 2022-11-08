import React, { useEffect, useState } from 'react'
import { NavLink, useParams} from 'react-router-dom'
import {Form,Button} from 'semantic-ui-react'

const Edit = () => {

    // const history = useHistory("");

    const [inp,Setinp] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        address:"",
        about:"",
    })

    const setdata = (e) =>{
        const {name,value} = e.target;
        console.log(e.target.value);

        Setinp((pre)=>{
            return{
                ...pre,
                [name]:value,
            }
        })

    }

    const {id} = useParams("");

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
            Setinp(data);
            console.log("get data");
        }
    };

    useEffect(()=>{
        getData();
    },[])


    const updateuser = async(e) =>{
        e.preventDefault();
        const{name,email,age,mobile,work,address,about} = inp;

        const res2 = await fetch(`/updateuser/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,age,mobile,work,address,about
            })
        });

        const data2 = await res2.json();
        console.log(data2)
        if(res2.status === 404 || !data2){
            alert("Please fill data");
        }else{

            alert("Data added");
            // history.push("/");
        }
    }


  return (
    <div className=''>
    <div className='container mt-3'>
        <NavLink to="/">Home 2</NavLink>
        <Form className='row mt-3'>
            <Form.Field>
                <label>Name</label>
                <input name='name'  onChange={setdata} value={inp.name} placeholder='Name' />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input name='email' onChange={setdata} value={inp.email} placeholder='Email' />
            </Form.Field>
            <Form.Field>
                <label>Age</label>
                <input name='age' onChange={setdata} value={inp.age} placeholder='Age' />
            </Form.Field>
            <Form.Field>
                <label>Mobile</label>
                <input name='mobile' onChange={setdata} value={inp.mobile} placeholder='Mobile' />
            </Form.Field>
            <Form.Field>
                <label>Work</label>
                <input name='work' onChange={setdata} value={inp.work} placeholder='Work' />
            </Form.Field>
            <Form.Field>
                <label>Address</label>
                <input name='address' onChange={setdata} value={inp.address} placeholder='Address' />
            </Form.Field>
            <Form.TextArea  onChange={setdata} value={inp.about} label='About' name='about'  placeholder='Tell us more about you...' />
            <Button onClick={updateuser} type='submit' primary >Submit</Button>
        </Form>
    </div>

</div>
  )
}

export default Edit
