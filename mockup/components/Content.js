var Content = React.createClass({
   displayName: "Content",

   render: function render() {
      return React.createElement(
         "div",
         { id: "content" },
         React.createElement(
            Box,
            { number: "cmn-toggle-1" },
            " "
         ),
         "  ",
         React.createElement(
            Box,
            { number: "cmn-toggle-2" },
            " "
         ),
         " ",
         React.createElement(
            Box,
            { number: "cmn-toggle-3" },
            " "
         ),
         "  ",
         React.createElement(
            Box,
            { number: "cmn-toggle-4" },
            " "
         ),
         " "
      );
   }
});