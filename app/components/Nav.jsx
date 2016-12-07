var React = require('react');

var Nav = React.createClass({
     render: function() {
          return (
          <div className="container-fluid">
               <div className="navbar-header">
                 <a className="navbar-brand" href="#">Weather Navbar</a>
               </div>
               <div id="navbar" className="navbar-collapse collapse">
                 <ul className="nav navbar-nav">
                   <li className="active"><a href="#">Get Weather</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Examples</a></li>
                 </ul>
               </div>
          </div>
     );
}
});

module.exports = Nav;
