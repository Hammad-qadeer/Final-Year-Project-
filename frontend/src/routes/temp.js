import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {

      usersList:[],
      rolesList:[]
    }
  }

componentDidMount(){
this.fetchUsersData()
this.fetchRolesList()
}

fetchUsersData =()=>{
  fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
console.log(
  "FF", data
)
    this.setState({
      usersList: data.data
    })
  });
}

fetchRolesList = ()=>{
  fetch('http://localhost:3000/roles')
  .then(response => response.json())
  .then(data => {
console.log(
  "FF", data
)
    this.setState({
      rolesList: data.data
    })
  });
}




  render(){
    return (
      <div className="App">
       <h1>Users List</h1>
       {
         this.state.usersList && this.state.usersList.length > 0 ?
         
         this.state.usersList.map((user)=> {
           return (
             <tr>
               <td>{user.FirstName}</td>
             </tr>
           )
         })
         
         : <h2>NO Data available</h2>
       }


       <h1>Display Role Data here</h1>
       {
         this.state.rolesList && this.state.rolesList.length > 0 ?

         this.state.rolesList.map((role)=> {
           return (
             <tr>
               <td>{role.key}</td>
              </tr>
           )
         })
         : <h2>NO Data available</h2>
       }
      </div>
    );
  }
  
}

export default App;
