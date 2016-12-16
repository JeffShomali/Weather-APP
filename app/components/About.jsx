var React = require("react");

// var About = React.createClass({
//      render: function() {
//           return (
//                <h3>About Component</h3>
//           )
//      }
// });

{/*Using Es6 Arrow Function above*/}

var About = (props) => {
     return (
          <h3>About Component</h3>
     )
};

module.exports = About;
