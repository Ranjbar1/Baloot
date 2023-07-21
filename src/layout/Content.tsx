/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Layout, Row } from "antd";
import getItems from "../services/apiItems";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
const { Content } = Layout;
import React from "react";
import CardItem from "../components/Card";
export default function AppContent() {
  const { state: category } = useLocation();

  const {
    data,
    error,
    isFetchingNextPage,
    hasNextPage,
    isFetching,

    fetchNextPage,
  } = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) => getItems(pageParam, category),
    queryKey: ["items", category],
    getNextPageParam: (lastPage, pages) => {
      return lastPage ? pages.length + 1 : undefined;
    },
  });

  if (isFetchingNextPage) return <p> Loading...</p>;
  if (error) return <p> Error</p>;
  if (data)
    return (
      <Content style={{ margin: "24px 16px 0", color: "black" }}>
        <div
          style={{
            padding: 24,
            minHeight: "100%",
          }}
        >
          <Row>
            {data.pages &&
              data.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.map((item) => (
                    <Col xs={24} md={12} lg={8}>
                      <CardItem item={item} />
                    </Col>
                  ))}
                </React.Fragment>
              ))}
          </Row>
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
        </div>
      </Content>
    );
}
