function Home (){
    return(
        <div>
            <h1>shivam netke</h1>
            <img src="" alt ="img" className="photo"/>
            <ul>
                <li>invent new traffic lights</li>
                <li>invent new traffic lights</li>
                <li>invent new traffic lights</li>
            </ul>
            <button onClick={callFun}>click me</button>
        </div>
    )
}

export function callFun()
{
    alert("callfun called");
}

export default Home;