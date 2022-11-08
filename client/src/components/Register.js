import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Form,Button} from 'semantic-ui-react'

const Register = () => {

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
        // console.log(e.target.value);

        Setinp((pre)=>{
            return{
                ...pre,
                [name]:value,
            }
        })

    }

    const addData = async(e) =>{
        e.preventDefault();

        const {name,email,age,mobile,work,address,about} = inp;

        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,age,mobile,work,address,about
            })
        })
        const data = await res.json();
        // console.log(data);

        if(res.status===404 || !data){
            alert("Error");
            console.log("Error");
        }else{
            alert("Data added");
            console.log("Data Added")
        }
    }


    return (
        <div className=''>
            <div className='container mt-3'>
                <NavLink to="/">Home</NavLink>
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
                    <Button type='submit' primary onClick={addData} >Submit</Button>
                </Form>
            </div>

        </div>
    )
}

export default Register
