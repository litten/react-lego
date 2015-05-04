var React = require('react');

var Header = React.createClass({

  displayName: "Header",
  
  propTypes: {
    position: React.PropTypes.string
  },
  
  render: function() {

    var styles = this.props.style;
    var type = this.props.type || "";
    var label = this.props.label;
    var smallLabel = this.props.smallLabel;
    var longLabel = this.props.longLabel;
    var button = this.props.button || [];

    var className = (type.indexOf("light")>=0)? "cm-header cm-header--light":"cm-header";
    var labelClassName = (type.indexOf("long")>=0)? "cm-page-mutil-title":"cm-page-title";
    var modLable = smallLabel? React.createElement("h1", {className: "cm-page-title"}, 
        React.createElement("span", {className: "cm-title-l"}, label),
        React.createElement("span", {className: "cm-title-s"}, smallLabel)
    ):React.createElement("h1", {className: labelClassName}, label);

    var modLeftBtn, modRightBtn;
    for(var i=0,len=button.length;i<len;i++){
        var icon = button[i].icon;
        var iconClassName = "";
        if(icon){
            iconClassName = "icon-"+icon;
        }
        var word = button[i].word;
        var count = button[i].count;
        if(count){
            word = React.createElement("i", {
                    className: "sup-wrap"
                },word,
                React.createElement("span", {className: "sup-num"}, count)
            )
        }else{
            word = React.createElement("i", {
                    className: "sup-wrap"
                }, word
            )
        }
        if(button[i].pos == "left"){
            modLeftBtn = React.createElement("span", {
                onClick: button[i].tap,
                className: "fl cm-header-icon "+iconClassName
            }, word);
        }else{
            modRightBtn = React.createElement("span", {
                onClick: button[i].tap,
                className: "fr cm-header-icon "+iconClassName
            }, word);
        }
    }

    var view;

    view = React.createElement("header", {className: className, style: styles}, 
        modLeftBtn,
        modRightBtn,
        modLable
    );

    return view;
  }

});

module.exports = Header;
