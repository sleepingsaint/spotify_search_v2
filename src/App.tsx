import AuthContextProvider from "providers/AuthContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/Home";
import AuthRedirect from "components/AuthRedirect";
import { AuthService } from "services/AuthService";
import { QueryClient, QueryClientProvider } from "react-query";
import Search from "components/Search";

function App() {
    const queryClient = new QueryClient();
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <AuthContextProvider
                    login={AuthService.login}
                    logout={AuthService.logout}
                    getAccessToken={AuthService.getAccessToken}
                    refreshAccessToken={AuthService.refreshAccessToken}
                    checkAuthOnFirstVisit={true}
                >
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/search" element={<Search />} />
                            <Route
                                path="/auth/redirect"
                                element={<AuthRedirect />}
                            />
                        </Routes>
                    </BrowserRouter>
                </AuthContextProvider>
            </QueryClientProvider>
        </div>
    );
}

export default App;
