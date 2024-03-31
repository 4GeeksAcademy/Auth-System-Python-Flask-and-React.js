import React, { useContext, useState } from "react";
import { Context, } from "../store/appContext";

import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // const token = sessionStorage.getItem("token");

    console.log("this is ur token", store.token);
    const handleCLick = () => {
       actions.login(email, password);
    };

    if (store.token && store.token != "" && store.token != undefined) navigate("/")

	return (
		<div className="text-center mt-5">
			<h1>login</h1>
                {(store.token && store.token != "" && store.token != undefined) ? "you are logged in with this token" + store.token : 

                <div>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                        <button onClick={handleCLick}>login</button>
                </div>
                }
		</div> 
	);
};
