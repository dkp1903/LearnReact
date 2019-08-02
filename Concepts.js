/*Components tell React what we need to see on the screen. Render means to apply changes. When we make some changes in the code,
React will update the changes in the UI.

A component takes in parametersm called props(properties), and returns a hierarchy of views to display via the render method.

Render method returns a description of what you want to see on the screen.
React takes the description and displays a resultant UI. 

Technically, Render returns a React Element, which is a lightweight description of what to render.

JSX is the syntax used to write HTML more easily.

The <div/> syntax is transformed to React.createElement('div')

Every React element is a JS object that you can pass and store in variables.
*/
//////////////////////////////////////
//Code using HTML Syntax
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />


//Code using JSX
React.createElement("div", {  className: "shopping-list" }, 
React.createElement("h1", null, "Shopping List for ", props.name), 
React.createElement("ul", null, React.createElement("li", null, "Instagram"), 
React.createElement("li", null, "WhatsApp"), 
React.createElement("li", null, "Oculus")));

///////////////////////////////////
