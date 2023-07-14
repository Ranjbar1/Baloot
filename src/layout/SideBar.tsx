/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useQuery } from "@tanstack/react-query";
import { getCaegories } from "../services/apiCategories";
import { NavLink } from "react-router-dom";
import { Layout } from "antd";
const { Sider } = Layout;
export default function SideBar() {
  const { error, data, isLoading } = useQuery({
    queryFn: getCaegories,
    queryKey: ["categories"],
  });
  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return <p>There Was an Error: </p>;
  }

  if (data.length) {
    return (
      <Sider
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <CNavLink to="all" state={0} title="همه" />

        {data.map((category) => (
          <CNavLink
            to={`${category.name}`}
            state={category.id}
            title={category.name}
          />
        ))}
      </Sider>
    );
  }
}

export function CNavLink({
  to,
  state,
  title,
}: {
  to: string;
  state: number;
  title: string;
}) {
  return (
    <p style={{ marginRight: "2rem" }}>
      <NavLink
        style={({ isActive }) => ({
          borderBottom: isActive && "2px solid blue",
          color: isActive && "white",
          fontSize: isActive && "1rem",
        })}
        to={to}
        state={state}
      >
        {title}
      </NavLink>
    </p>
  );
}
