
function App() {

  const cardStyle = {
          border:'1px solid black',
           width:'200px',
            boxShadow:'1px 1px 1px 1px blue',
            margin : '10px'
  }

  return (
    <>

    <div style={{display:'flex'}}>
      <div style={cardStyle}>
        <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
        <div style={
          {padding : '5px',

          }
        }>
          <h4>shivam netke</h4>
          <p>Web / App developer</p>
        </div>
      </div>

        <div style={cardStyle}>
        
        <div style={
          {padding : '5px',

          }
        }>
          <h4>shivam netke</h4>
          <p>Web / App developer</p>
        </div>
      </div>

      <div style={cardStyle}>
        <img style={{ borderBottom:'1px solid blue', width:'200px'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
        
        <div style={
          {padding : '5px',

          }
        }>
          <h4>shivam netke</h4>
          <p>Web / App developer</p>
        </div>
      </div>
            
    </div>
    </>
  );
}

export default App;
