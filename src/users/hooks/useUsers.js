import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../providers/UserProvider";
import useAxios from "../../cards/hooks/useAxios";
import { login } from "../services/usersApiService";
import { getUser, setTokenInLocalStorage } from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";

const useUsers = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { user, setUser, setToken } = useUser();

    useAxios();

    const requestStatus = useCallback(
        (loading, errorMessage, users, user = null) => {
            setLoading(loading);
            setError(errorMessage);
            setUsers(users);
            setUser(user);
        }, [setUser]
    );

    const handleLogin = useCallback(async (user) => {
        try {
            const token = await login(user); // token: kjh34kl5h3lk45h345.k3jh45k3j4h5.kjh345kuj3h45
            setTokenInLocalStorage(token); // localStorage: {token: kjh34kl5h3lk45h345.k3jh45k3j4h5.kjh345kuj3h45}
            setToken(token);
            const userFromLocalStorage = getUser();
            requestStatus(false, null, null, userFromLocalStorage);
            navigate(ROUTES.CARDS);
        } catch (error) {
            requestStatus(false, error, null);
        }
    }, [navigate, requestStatus]);

    return {
        handleLogin,
        users,
        isLoading,
        error,
        user,
    }
};

export default useUsers;
