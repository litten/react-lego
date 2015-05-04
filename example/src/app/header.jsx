(function () {
  var React = require('react');
  var rlg = require('react-lego');
  var Header = rlg.Header;

  var HeaderDemo = React.createClass({

    render: function() {

      return (
        <div className="example-page">

          <Header label = "Normal Header"/>

          <Header label = "Light Header" 
            type = "light" 
            style={{top: 50}}/>

          <Header label="Large Header" 
            smallLabel="And Small Header" 
            style={{top: 100}}/>

          <Header label="Long Long Long Long Long Long Header" 
            type = "light|long"
            style={{top: 150}}/>

          <Header label="Header With Icons"
            button = {[{
              pos: "left",
              icon: "back",
              tap: this._handleLeftTap
            },{
              pos: "right",
              icon: "list",
              tap: this._handleRightTap
            }]}
            style={{top: 200}}/>

          <Header label="Header With Counts"
            button = {[{
              pos: "left",
              icon: "back",
              tap: this._handleLeftTap
            },{
              pos: "right",
              icon: "list",
              count: 16,
              tap: this._handleRightTap
            }]}
            style={{top: 250}}/>

          <Header label="Header With Words"
            type = "light"
            button = {[{
              pos: "left",
              word: "Back",
              tap: this._handleLeftTap
            },{
              pos: "right",
              word: "Agree",
              tap: this._handleRightTap
            }]}
            style={{top: 300}}/>

        </div>
      );
    },
    _handleLeftTap: function() {
      alert('tap left button');
    },
    _handleRightTap: function(){
      alert('tap right button');
    }
    
  });

  React.render(<HeaderDemo />, document.body);

})();