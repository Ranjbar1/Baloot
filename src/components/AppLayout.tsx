import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <div
      style={{
        display: "grid",
        height: "100vh",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "1fr",
        justifyContent: "center",
      }}
    >
      <header>App layout</header>
      <main>
        <Outlet />
      </main>
      <footer>app Footer</footer>
    </div>
  );
}
