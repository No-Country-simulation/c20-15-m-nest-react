import useAuth from "../hooks/useAuth";

export const HomePage = () => {
  const { user } = useAuth();
  if (!user) {
    return <div>loading....</div>;
  }
  return <div>{user.name}</div>;
};
