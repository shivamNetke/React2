// old version

// import { forwardRef } from "react";

// function UserInput(props, ref) {

// return(
// <>
//     <input type="text" placeholder="" ref={ref} />

// </>
// )
// }
// export default forwardRef(UserInput);

// new version


function UserInput(props) {

    return (
        <>
            <input type="text" placeholder="" ref={props.ref} />

        </>
    )
}
export default UserInput;