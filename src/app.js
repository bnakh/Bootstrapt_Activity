const App = () => {
    return React.createElement("div", { className: "app-container" },
        React.createElement("h1", {}, "ACTIVITY"),
        React.createElement("h5",{},"Create a simple page to render the information of your group members in the following form using React component"),
      [{
         
          image: "icons8-account-24.png",
          name:"Bnar Khalil",
          study:"Software Engineering",
          hobby1:"Design", 
          hobby2:"Art",

        },
        {
         
          image:
            "icons8-account-24.png",
        name:"Unknown",
         study:"Civil Engineering",
         hobby1:"Sport", 
          hobby2:"Coding",
          
        },
        {
         
          image:
            "icons8-account-24.png",
        name:"Unknown",
         study:"Geotechnical Engineering",
         hobby1:"Design", 
          hobby2:"Coding",
          
        },
        {
         
          image:
            "icons8-account-24.png",
        name:"Unknown",
         study:"Architecture Engineering",
         hobby1:"Coding", 
          hobby2:"Gaming",
          
        },
        
      
        
        
      ].map((prod) =>
        React.createElement(Product, {
     
          image: prod.image,
          name: prod.name,
          study: prod.study,
          hobby1:prod.hobby1,
          hobby2:prod.hobby2,
       
        })
      ),
    
    );
  };
  ReactDOM.render(React.createElement(App), document.getElementById("root"));