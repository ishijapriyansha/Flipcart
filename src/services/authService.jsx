export async function handleSignup(email, password){
    const res=await fetch('http://localhost:3000/register', {
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({email:email,pwd:password})
    })

    const data= await res.text();
    
    if(!res.ok){
        throw new Error(data || 'Signup failed');
    }
    
    return data;
}

export async function handleLogin(){

}