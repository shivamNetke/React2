// function PropsEx({name, age, email}) {
function PropsEx({user}) {

// function PropsEx(data) {


    return(
        <>
             {/* <h1>Props Practice</h1>
            <h1>age : {age}</h1>
            <h1>name : {name}</h1>
            <h1>email : {email}</h1>  */}

            <hr />
            <h1>Props Practice</h1>
            <h1>name : {user.name}</h1>
            <h1>age : {user.age}</h1>
            <h1>email : {user.email}</h1> 

        </>
    )
}

export default PropsEx;