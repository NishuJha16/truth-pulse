import { Box, Paper, Skeleton, styled } from "@mui/material";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { format } from "date-fns";
import { Fragment, useEffect, useState } from "react";
import { getAllNews } from "../../service/news.service";
import Article from "./article";
import { useOutletContext } from "react-router-dom";
import NoResultsFound from "./no-results";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  gap: 1,
  borderRadius: 10,
  overflow: "hidden",
  position: "relative",
}));

export const formatDate = (dateString: string) => {
  return format(new Date(dateString), "MMMM d, yyyy, h:mm a");
};

const NewsGridWrapper = ({ type, getGridColumns }: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const { queryParam } = useOutletContext<any>();

  const renderSkeleton = (index: number) => (
    <Item key={index}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        sx={{ background: "rgba(244, 67, 54, 0.4)" }}
      />
      <Box display={"flex"} flexDirection={"column"} gap={1} padding={2}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="40%" />
        {index % 2 === 0 && (
          <Fragment>
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="40%" />
          </Fragment>
        )}
      </Box>
    </Item>
  );

  const getNewsData = async (type: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await getAllNews(type);
      setArticles(data?.data?.articles);
    } catch (error) {
      setArticles([]);
      setError("No news found. Try with another keyword");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (queryParam) {
      getNewsData(queryParam);
    } else {
      getNewsData(type);
    }
  }, [queryParam, type]);

  return (
    <Box>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {loading
            ? Array.from(new Array(8)).map((_, index) => renderSkeleton(index))
            : articles
                ?.filter((data) => data.title !== "[Removed]")
                ?.map((data, index) => <Article news={data} key={index} />)}
        </Masonry>
      </ResponsiveMasonry>
      {!articles.length && !loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            marginTop: 8,
          }}
        >
          <NoResultsFound />
        </Box>
      )}
    </Box>
  );
};
export default NewsGridWrapper;
