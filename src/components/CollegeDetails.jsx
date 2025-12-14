const CollegeDetails = ({ college }) => {
    return (
        <>
            <div
                // style={{ backgroundColor: '#999', borderRadius: '10px', padding: '5px', margin: '40px', borderBottom: '2px solid black'}}
            >
                <h2>college name : {college.name}</h2>
                <ul>
                    <li>
                        <h3>college location : {college.location}</h3>
                    </li>

                    <li>
                        <h3>college website : {college.website}</h3>
                    </li>

                    
                </ul>
            </div>
        </>
    )
}

export default CollegeDetails;