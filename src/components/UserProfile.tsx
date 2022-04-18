import { useAuth } from "hooks/useAuth";
import { useQuery } from "react-query";

export const UserProfile: React.FC = () => {
    const { apiService, isLoggedIn } = useAuth();

    const { isLoading, isError, data } = useQuery(
        "userProfile",
        async () => apiService!.getProfile(),
        {
            enabled: isLoggedIn 
        }
    );

    if (isLoading) {
        console.log("loading")
        return <div>Loading Profile</div>;
    }

    if (isError) {
        console.log("error")
        return <div>retry profile</div>;
    }
    
    return <div>{data ? data.display_name : "No data"} </div>;
};
