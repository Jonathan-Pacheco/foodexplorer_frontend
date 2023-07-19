import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    async function signIn({ email, password }){

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, role, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:role", JSON.stringify(role));
            localStorage.setItem("@foodexplorer:token", token);
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, role, token });
           
            setLoading(false);

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.");
            }

            setLoading(false);
        }

       
    }



    function signOut(){
        localStorage.removeItem("@foodexplorer:token");
        localStorage.removeItem("@foodexplorer:user");
        localStorage.removeItem("@foodexplorer:role");


        setData({});
    }

    
    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");
        const role = localStorage.getItem("@foodexplorer:role");


        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user),
                role: JSON.parse(role)
            });
        }
    }, []);


    return (
        <AuthContext.Provider value={{ signIn, signOut, loading, setLoading, user: data.user, role: data.role  }}>
            {children}
        </AuthContext.Provider>
    )

}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }; 