var CheckBox = React.createClass({
   displayName: "CheckBox",

   render: function render() {
      return React.createElement(
         "div",
         null,
         React.createElement("input", { id: this.props.number,
            className: "cmn-toggle cmn-toggle-round-flat",
            type: "checkbox" }),
         React.createElement(
            "label",
            { htmlFor: this.props.number },
            " "
         ),
         " "
      );
   }
});