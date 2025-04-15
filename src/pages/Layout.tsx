import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/ჩვენ შესახებ");
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
