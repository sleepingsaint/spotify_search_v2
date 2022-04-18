import AuthContextProvider from "providers/AuthContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/Home";
import AuthRedirect from "components/AuthRedirect";
import { AuthService } from "services/AuthService";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "components/Navbar";

function App() {
    const queryClient = new QueryClient();
    return (
        <div className="App" style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column"}}>
            <div style={{flexGrow: 0, flexShrink: 0}}>
            <Navbar />
            </div>
            <div style={{flexGrow: 1, flexShrink: 1}}>
            <Home />

            </div>
            {/* <QueryClientProvider client={queryClient}>
                <AuthContextProvider
                    login={AuthService.login}
                    logout={AuthService.logout}
                    getAccessToken={AuthService.getAccessToken}
                    refreshAccessToken={AuthService.refreshAccessToken}
                    checkAuthOnFirstVisit={true}
                >
                    <Navbar />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/auth/redirect"
                                element={<AuthRedirect />}
                            />
                        </Routes>
                    </BrowserRouter>
                </AuthContextProvider>
            </QueryClientProvider> */}
        </div>
    );
}

export default App;
