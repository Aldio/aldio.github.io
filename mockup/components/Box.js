var Box = React.createClass({
   displayName: "Box",

   render: function render() {
      return React.createElement(
         "div",
         { id: "box" },
         React.createElement(CheckBox, { number: this.props.number
         }),
         " "
      );
   }
});