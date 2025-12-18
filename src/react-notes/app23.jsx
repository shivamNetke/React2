// import { useState } from "react";

// function App() {

//   const [cardStyle, setCardStyle] = useState(
//     {
//           border:'1px solid black',
//            width:'200px',
//             boxShadow:'1px 1px 1px 1px blue',
//             margin : '10px'
//   }
//   )

//   const [textColor, setTextColor] = useState('black')
//   const [grid, setGrid] = useState(true)

//   const updateTheme = (bgColor, textColor) =>{
//     setCardStyle({...cardStyle, backgroundColor : bgColor})
//     setTextColor(textColor)
//   }

//   return (
//     <>
//       <button onClick={()=>updateTheme('#B6FAC1', 'green')} >green theme</button>
//       <button onClick={()=>updateTheme('white', 'black')} >default theme</button>
//       <button onClick={()=>setGrid(!grid)}>toggle grid</button>
//     <div style={{display:grid?'flex':'block' , flexWrap : 'wrap'}}>
//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>
            
//             <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//         <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
//         <div style={
//           {padding : '5px',
//             color : textColor
//           }
//         }>
//           <h4>shivam netke</h4>
//           <p>Web / App developer</p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default App;
