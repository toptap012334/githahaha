import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      age: "",
      address: "",
      phoneNo: "",
      Lastname: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { email, name, age, address, phoneNo, Lastname} = this.state;
    event.preventDefault();
    alert(`
	____ข้อมูล____\.
	Name : ${name}
  Lastname : ${Lastname}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
  Email : ${email}
	`);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <center>
          <table>
            <td>
              <h1>กรอกข้อมูล</h1>
            </td>
          </table>
        </center>

        <center>
          <table>
            <tr>
              <th>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />

                <label htmlFor="name">lastName</label>
                <input
                  name="Lastname"
                  placeholder="LastName"
                  onChange={this.handleChange}
                />
                <label htmlFor="age">Age</label>
                <input
                  name="age"
                  placeholder="Age"
                  onChange={this.handleChange}
                />
              </th>
            </tr>
          </table>
        </center>

        <center>
          <table>
            <tr>
              <th>
                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  placeholder="Address"
                  onChange={this.handleChange}
                />

                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  name="phoneNo"
                  placeholder="Phone No"
                  onChange={this.handleChange}
                />
              </th>
            </tr>
          </table>
        </center>

        <center>
          <table>
            <tr>
              <th>
                <label htmlFor="email">email</label>
                <input
                  name="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday"
                onChange={this.handleChange}>
                  
                </input>
              </th>
            </tr>
          </table>
        </center>

        <center>
          <button class="pushable">
            <span class="front">ส่งข้อมูล</span>
          </button>
        </center>
      </form>
    );
  }
}

export default Form;
