import { doSocialLogin } from "../app/actions";

const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-rose-400 text-white p-1 rounded-md text-lg"
        type="submit"
        name="action"
        value="google"
      >
        Login with Google
      </button>

      <button
        className="bg-zinc-500 text-white p-1 rounded-md text-lg"
        type="submit"
        name="action"
        value="github"
      >
        Login with Github
      </button>
    </form>
  );
};

export default LoginForm;
