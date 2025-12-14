function StudentDetails({ student }) {
    return (
        <>
            <h3>students : </h3>
            {
                student.map((student) => (
                    <ul>
                        <li>
                            <h4>name : {student.name}</h4>
                        </li>
                        <li>
                            <h4>email : {student.email}</h4>
                        </li>
                    </ul>
                ))
            }
        </>
    )
}
export default StudentDetails;