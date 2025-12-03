// function User ({name}) {
function GreetUser ({name="User"}) {  // we use 'User' if we didnt have user's name so it shows 'hii, User'

return(
<>
    <h1>hii, {name}</h1>

</>
)
}
export default GreetUser;
