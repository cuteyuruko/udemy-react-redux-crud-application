import React from 'react'
import PropTypes from 'prop-types';
const App =() => {
  const profiles = [
    { name: "Taro", age:10},
    { name: "Hanako", age:"5"},//１．numberエラー
    { name: "1"}//2.isRequired エラー
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
User.defalutProps = {
  age:1
}

User.propTypes = {
  name: PropTypes.string,
  age:PropTypes.number.isRequired

}
export default App;
