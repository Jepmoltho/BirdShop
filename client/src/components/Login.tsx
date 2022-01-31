import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Route } from "react-router-dom";
import { useGetUsers } from "../hooks/use_queries";
import UserContext from "../UserContext";

interface FormData {
    email: string;
    name: string;
  }
  
  interface FormErrors {
    email?: string;
    name?: string;
  }

function Login(){
    const user = useContext(UserContext);
    
    
    const users = useGetUsers();

    
  
    const [state, setState] = React.useState<FormData>({ email: "", name: "" });
    const [errors, setErrors] = React.useState<FormErrors>({});

    const validateEmail = (value: string): FormErrors => {
    const regNumber: RegExp = /^\S+@\S+\.+\S*$/;
    if (!regNumber.test(value)) {
      return { email: "Not a valid email" };
    }
    return { email: undefined };
  };

  const handleID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, ...{ email: event.target.value } }));
    setErrors((prev) => ({ ...prev, ...validateEmail(event.target.value) }));
  };

  const validateName = (value: string): FormErrors => {
    const regName: RegExp = /^([a-zA-Z]{2,}\s*)+[ ]+([a-zA-Z]{2,}\s*)$/;
    if (!regName.test(value)) {
      return { name: "Not a valid name" };
    } else if (value.length > 50) {
      return { name: "Must be 15 characters or less" };
    }
    return { name: undefined };
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, ...{ name: event.target.value } }));
    setErrors((prev) => ({ ...prev, ...validateName(event.target.value) }));
  };

  const validate = (): FormErrors => {
    return { ...validateEmail(state.email), ...validateName(state.name) }
  };

  const cancelButton = async () => { 
    user.email = "";
    user.name = "customer";
    
    if(users !== undefined){
      user.id = users.length;
    }

    const createUser = async (id:number, name:string, email:string) => {
      await axios.post('http://localhost:9000/user/' + id, {
          id: id,
          name: name,
          email: email
  
      })

  }
    
    createUser(user.id, "customer", "");
      let ID = sessionStorage.setItem("currentUserID", JSON.stringify(user.id));
      let name = sessionStorage.setItem("currentUserName", user.name);
      let email = sessionStorage.setItem("currentUserEmail", user.email);
      await axios.post('http://localhost:9000/baskets/' + user.id, {
        id: user.id,
        product:[]
    })

    window.location.href = "/homepage"; 
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (valErrors.email || valErrors.name){
      alert("There are errors!")
    }
      
    else {

      user.email = state.email
      user.name = state.name

      

      var found = false;
      users?.forEach(function(userItem){
 
        if (userItem.email===state.email) {user.id=userItem.id; found=true; return;}
      })

      
      if(!found && users !== undefined){
        
        user.id = users.length;

      }

      const updateUser = async (id:number, name:string, email:string) => {
        await axios.put('http://localhost:9000/user/' + id, {
            id: id,
            name: name,
            email: email
    
        })

      }
        const createUser = async (id:number, name:string, email:string) => {
          await axios.post('http://localhost:9000/user/' + id, {
              id: id,
              name: name,
              email: email
      
          })
         

      }

      
        if(found){
  
          updateUser(user.id, user.name, user.email) 
        
          let ID = sessionStorage.setItem("currentUserID", JSON.stringify(user.id));
          let name = sessionStorage.setItem("currentUserName", user.name);
          let email = sessionStorage.setItem("currentUserEmail", user.email);
        }
        else{
    
          createUser(user.id, user.name, user.email) 
          let ID = sessionStorage.setItem("currentUserID", JSON.stringify(user.id));
          let name = sessionStorage.setItem("currentUserName", user.name);
          let email = sessionStorage.setItem("currentUserEmail", user.email);
          await axios.post('http://localhost:9000/baskets/' + user.id, {
            id: user.id,
            product:[]
        })
        }



    }
    window.location.href = "/homepage"; 
        
  };

  return (
        <div className="login-item">
          <form onSubmit={onSubmit}>
            <h1>Please log in</h1>
            <div className="login-item">
              <label id="login-text" htmlFor="mail">
                Email address:
              </label>
              <input
                type="input"
                id="mail"
                name={"quizID"}
                value={state.email}
                onChange={handleID}
              />
              {errors.email ? (
                <span style={{ color: "red" }}>{errors.email}</span>
              ) : null}
            </div>
            <div className="login-item">
              <label id="login-text" htmlFor="name">
                Full name:
              </label>
              <input
                type="input"
                id="name"
                value={state.name}
                onChange={handleName}
              />
              {errors.name ? (
                <span style={{ color: "red" }}>{errors.name}</span>
              ) : null}
            </div>

            <div className="buttons-login">
            
              <button className="btn-primary" type="submit">Login</button>
              <Route render={({ history}) => (
              <button type="button" className="btn-secondary" onClick={() => {cancelButton(); history.push('/homepage')}}>Continue without login</button>
             
              )} />
    


            </div>
          </form>
        </div>
      
    
  );
    

}
export default Login;







  
