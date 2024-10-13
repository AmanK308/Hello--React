//singleElement
// const heading = React.createElement('h1',{id:"heading"},"Hello World from React!"); // react element



//Create NestedElements
/* 
<div id="parent">
   <div id="child">
     <h1>this is h1 tag</h1>
     <h2> this is h2 tag</h2>
   </div>
 </div>
 */


const parent = React.createElement
  (
    'div',
    { id: 'parent' },
    [
      React.createElement
      (
        'div',
        { id: 'child' },
        [React.createElement
          (
            'h1',
            {},
            "This is h1 tag"
          ),
        React.createElement
          (
            'h2',
            {},
            "This is h2  tag"
          )]
      ),
      React.createElement
      (
        'div',
        { id: 'child2' },
        [React.createElement
          (
            'h1',
            {},
            "This is h1 tag"
          ),
        React.createElement
          (
            'h2',
            {},
            "This is h2  tag"
          )]
      )
    ]
  );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
// root.render();
console.log(parent);
console.log(root);