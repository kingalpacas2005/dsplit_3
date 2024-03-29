import React from 'react';
import Button from '../components/Button';



class GroupCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [
        "0xbda5747bfd65f08deb54cb465eb87d40e51b197e",
        "0xdd2fd4581271e230360230f9337d5c0430bf44c0",
        "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
      ],
      addressToAdd: "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec"
    };
  }

  addAddress() {
    this.setState({ addresses: [...this.state.addresses, this.state.addressToAdd] });
  }

  handleInputChange(e) {
    this.setState({
      addresses: this.state.addresses,
      addressToAdd: e.target.value
    })
  }

  render() {
    return (
      <div className="body-home">
        
      </div>
    );
  }
};


export default GroupCreate;