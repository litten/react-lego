(function () {
  var React = require('react');
  var rlg = require('react-lego');
  var Header = rlg.Header;

  var Index = React.createClass({
    render: function() {
      return (
        <div className="example-page">
          <Header label = "React Demos"/>
        </div>
      );
    }
  });

  // Render the main app react component into the document body. 
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<Index />, document.body);

})();