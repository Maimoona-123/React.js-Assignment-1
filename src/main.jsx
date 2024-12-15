import React from "react";  
import ReactDom from "react-dom/client";
  
const rootDiv = document.getElementById("root");   

ReactDom.createRoot(rootDiv).render(
  <div>  
    <h1>Hello React 5 </h1>    
    <h1>Hello React 10</h1> 
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae error
      consequuntur quibusdam sint vero, provident maxime eius adipisci. Nemo
      voluptate</p>
    
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <img src="/public/vite.svg" alt="" />  

    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
  </div>  
);  
