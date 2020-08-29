import React from '../lumin/node_modules/react/index.js';
import { defineProperty as _defineProperty } from '../_virtual/_rollupPluginBabelHelpers.js';
import { View, LinearLayout, Image, Text } from '../node_modules/magic-script-components/src/components.js';

class MyApp extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "componentDidMount", async () => {
      let response = await fetch("http://10.14.149.226:9000/data/1");

      if (response.ok) {
        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        this.setState({
          name: json.name,
          title: json.title,
          department: json.department,
          manager: json.manager
        });
      } else {
        console.log("HTTP-Error on http://10.14.149.226:9000/data/1: " + response.status);
      }
    });

    this.state = {
      name: "name init",
      title: "title init",
      department: "init department",
      manager: "init manager"
    };
  }

  render() {
    return /*#__PURE__*/React.createElement(View, {
      name: "main-view"
    }, /*#__PURE__*/React.createElement(LinearLayout, {
      defaultItemAlignment: "center-left",
      defaultItemPadding: [0.1, 0.04, 0.1, 0.2],
      orientation: "horizontal",
      localPosition: [-0.6, 0.6, 0]
    }, /*#__PURE__*/React.createElement(LinearLayout, null, /*#__PURE__*/React.createElement(Image, {
      filePath: "http://10.14.149.226:9000/images/nilin.png",
      width: 0.4,
      height: 0.4
    })), /*#__PURE__*/React.createElement(LinearLayout, null, /*#__PURE__*/React.createElement(Text, {
      text: this.state.name,
      textSize: 0.16
    }), /*#__PURE__*/React.createElement(Text, {
      text: this.state.title,
      textSize: 0.06
    }), /*#__PURE__*/React.createElement(Text, {
      text: `Department: ${this.state.department}`,
      textSize: 0.04
    }), /*#__PURE__*/React.createElement(Text, {
      text: `Manager: ${this.state.manager}`,
      textSize: 0.04
    }))));
  }

} // profile data: http://10.14.149.226:9000/data/1
// image: http://10.14.149.226:9000/images/nilin.png

export default MyApp;
