function AddUser({ user, setUser }) {
    return (
        <>
            <h4>add user</h4>
            <input onChange={(event) => setUser(event.target.value)} type="text" placeholder="enter user name" />
            <hr />
        </>
    );
}

export default AddUser;
