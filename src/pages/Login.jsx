import React, { Component } from 'react'

export class Login extends Component {
    state = {
        usern : '',
        pass : ''
    };
    handlechng = (ev) =>{
        const {name , value} = ev.target
        const fields = Object.assign({}, this.state)
        fields[name] = value
        
        console.log(fields);
        this.setState({...fields})
        console.log(ev.target)
    }
    
  render() {
    return (
      <div className='flex justify-center'>
          <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%]'>
              <h3 className='text-2xl'>Login</h3>
              <div className='mt-3 '>
                  <input type="email" placeholder='Email' className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                  name='usern'
                  value={this.state.usern}
                  onChange={this.handlechng}
                  
                  />
              </div>
              <div className='mt-3 '>
                  <input type="password" placeholder='password' className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                  name='pass'
                  value={this.state.pass}
                  onChange={this.handlechng}
                  />
              </div>
                <input type="button" value='Login' className='btn hover:scale-[1.02] mt-7'/>
          </div>
      </div>
    )
  }
}

export default Login