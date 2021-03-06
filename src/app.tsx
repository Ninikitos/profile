import React from 'react';

import { View, Text, AppProps, Prism, Scene, LinearLayout, Image } from 'magic-script-components';

interface Props extends AppProps {
  message: string;
}

interface State {
  message: string;
}

export default class MyApp extends React.Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      name: "name init",
      title: "title init",
      department: "init department",
      manager: "init manager",
      location: "init location",
      seat: "init seat"
    };
  }

  componentDidMount = async () => {
    let response = await fetch("http://10.14.149.226:9000/data/1");

    if (response.ok) { // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let json = await response.json();
      this.setState({
        name: json.name,
        title: json.title, 
        department: json.department, 
        manager: json.manager, 
        location: json.location,
        seat: json.seat
      });
    } else {
      console.log("HTTP-Error on http://10.14.149.226:9000/data/1: " + response.status);
    }
  }

  render() {
    return (
      <Scene>
        <Prism size={[1.8, 1, 0.2]}>
        <View name="main-view">
            <LinearLayout
              defaultItemAlignment="center-left"
              defaultItemPadding={[0.1, 0.04, 0.1, 0.2]}
              orientation="horizontal"
              localPosition={[-0.6, 0.6, 0]}>
              <LinearLayout
              ><Image
                filePath="http://10.14.149.226:9000/images/nilin.png"
                width={0.4}
                height={0.4}
                ></Image>  
              </LinearLayout>
              <LinearLayout>
                <Text text={this.state.name} textSize={0.16}></Text>
                <Text text={this.state.title} textSize={0.06}></Text>
                <Text text={`Department: ${this.state.department}`} textSize={0.04}></Text>
                <Text text={`Manager: ${this.state.manager}`} textSize={0.04}></Text>
                <Text text={`Location: ${this.state.location}`} textSize={0.04}></Text>
                <Text text={`Seat: ${this.state.seat}`} textSize={0.04}></Text>
              </LinearLayout>
            </LinearLayout>
          </View>
        </Prism>
      </Scene>
      
    );
  }
}

// profile data: http://10.14.149.226:9000/data/1
// image: http://10.14.149.226:9000/images/nilin.png
