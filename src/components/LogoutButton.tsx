import { useAuth0 } from "@auth0/auth0-react";
import * as constants from "../constants";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: constants.AUTH0_REDIRECT_URI })} className="rounded-xl border-4 border-indigo-500 p-4 text-2xl font-bold text-indigo-500">
      Log Out
    </button>
  );
}

export default LogoutButton;
