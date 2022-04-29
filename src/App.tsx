import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">Auth0 Demo 😁</h1>
      <div className="flex space-x-2">
        <LoginButton />
        <LogoutButton />
      </div>
      <Profile />
    </div>
  );
}

export default App;
