export async function handleSignup(email, password){
    const res=await fetch('/register', {
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({email:email,pwd:password})
    })

    const data= await res.text();
    return data;
}

export async function handleLogin(){

}