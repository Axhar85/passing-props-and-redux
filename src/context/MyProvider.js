import React, {useState} from "react";

export const MyContext = React.createContext();

const MyProvider = props => {

    let [age , setAge] = useState(25)
    let[name] = useState('Rafael')
  
    const getOld = () => setAge(age + 1)

    return(
        <MyContext.Provider 
         value={{
            name: name,
            age: age,
            getOld: getOld
        }}
        >
            {props.children}
        </MyContext.Provider>
    )
};

export default MyProvider;