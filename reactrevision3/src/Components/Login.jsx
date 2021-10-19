import React from 'react'
import TodoApp from './TodoApp';
function Login() {
    const initState = {
        username:'',
        password:''
    }
    const [loginData,setLoginData] = React.useState(initState);
    const[isAuth,setIsAuth] = React.useState(false);
    const handleChange =(e)=>{
        var{name,value} = e.target;
        setLoginData({
            ...loginData,
            [name]:value

        })
    }

    const handleLogin = () =>{
        const {username,password} = loginData;
        if(username=='admin' && password=='admin'){
            setIsAuth(true)
        }else{
            alert('error wrong password or username')
        }

    }
    
    if(isAuth){
        return <TodoApp />
    }
    


    
    return (
        <div>
            <input type='text' placeholder='enter username' name='username' onChange={handleChange}></input>
            <input type='password' placeholder='enter password' name='password' onChange={handleChange}></input>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
