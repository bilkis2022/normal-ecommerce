import React, { useState } from 'react'
import { useEffect } from 'react';

const Register = () => {
  const [forms, setForms] = useState([]);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confPass, setConfPass] = useState();

  let formvalue = {
    firstName,
    lastName,
    email,
    pass,
    confPass
  }
  const formSubmit = (e) => {
    e.preventDefault();

    setForms([...forms, formvalue])
    setFirstName('')
    setLastName('')
    setEmail('')
    setPass('')
    setConfPass('')
  }

  useEffect(()=>{
    localStorage.setItem('formfield', JSON.stringify(forms))
  }, [forms])

  return (
    <>
      <form action="" onSubmit={formSubmit}>
      <div className='flex justify-center'>
          <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%]'>
              <h3 className='text-2xl'>Login</h3>
              <div className='mt-3 flex '>
                  <input type="text" placeholder='firstname' className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 mr-2'
                  name='first'
                  value={firstName}
                  onChange={e=>{setFirstName(e.target.value)}}
                  />
                  <input type="text" placeholder='lastname' className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                  name='last'
                  value={lastName}
                  onChange={e=>{setLastName(e.target.value)}}
                  />
              </div>
              <div className='mt-3 '>
                  <input type="email" placeholder='Email' className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                  name='email'
                  value={email}
                  onChange={e=>{setEmail(e.target.value)}}
                  />
              </div>
              <div className='mt-3 flex'>
                  <input type="password" placeholder='password' className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 mr-2'
                  name='pass'
                  value={pass}
                  onChange={e=>{setPass(e.target.value)}}
                  />
                  <input type="password" placeholder='confirm-password' className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                  name='confirmpass'
                  value={confPass}
                  onChange={e=>{setConfPass(e.target.value)}}
                  />
              </div>
                <input type="submit" value='Register' className='btn hover:scale-[1.02] mt-7'/>
          </div>
      </div>
      </form>
    </>
  )
}

export default Register