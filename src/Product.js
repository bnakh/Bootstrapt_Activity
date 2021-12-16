const Product = (props) => {
    return React.createElement("div",{ className: "product" },
      React.createElement("h1", {}, props.title),
      React.createElement("img", { src: props.image }),
      React.createElement("li", {},`name: ${props.name}`),
       React.createElement("li", {},`Study: ${props.study}`),
      React.createElement("li", {},`Hobbies: ${props.hobby1}, ${props.hobby2}`),
 
    );
  };