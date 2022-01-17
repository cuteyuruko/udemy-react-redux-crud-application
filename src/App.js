import React from 'react'

const App =() => {
  const profiles = [
    { name: "Taro", age:10},
    { name: "Hanako", age:5},
    { name: "No Name"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index)=> {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}
const User =(props) => {
  return <div>Hi! Im {props.name}, and {props.age} years old</div>
}
User.defalutProps = 
{ age:1}
export default App;
