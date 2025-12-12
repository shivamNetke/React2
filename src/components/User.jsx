const User = ({ data }) => {
    return (
        <>
            <div style={{ border: '1px solid green', borderRadius: '10px ' }}>
                <h4>name : <span style={{ color: '#034875' }}>{data.name}</span></h4>
                <h4>age : {data.age}</h4>
                <h4>email : {data.email}</h4>
            </div>

        </>
    )
}

export default User;