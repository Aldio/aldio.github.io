var TopBar = React.createClass({
   displayName: "TopBar",

   render: function render() {
      return React.createElement(
         "div",
         { id: "topBar" },
         React.createElement(
            "span",
            { className: "lol" },
            " Your Hives "
         )
      );
   }
});