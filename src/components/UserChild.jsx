function UserChild({ prop, name, getUser }) {
    return (
        <>
            <button onClick={() => prop(name)}>display name</button>
            <button onClick={() => getUser()}>getuser</button>
        </>
    )
}
export default UserChild;                       