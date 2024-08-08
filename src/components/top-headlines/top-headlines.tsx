import { Box, Chip, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTopHeadlines } from "../../service/news.service";
import { format } from "date-fns";
import { HourglassDisabled, Star } from "@mui/icons-material";

const TopHeadlines = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  const getNewsData = async () => {
    setLoading(true);
    try {
      const data = await getTopHeadlines();
      setArticles(data?.data?.articles);
    } catch (error) {
      setError("No headlines found");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd-MM-yyyy");
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <Paper
      sx={{
        background: "white",
        borderRadius: 3,
        maxWidth: { lg: 300, sm: "none" },
        width: { lg: 300, sm: "100%" },
        height: 400,
        maxHeight: 400,
        position: { lg: "fixed", sm: "relative" },
        top: { lg: "84px", sm: 0 },
        right: { lg: "24px", sm: 0 },
        padding: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        fontWeight={600}
        display={"flex"}
        alignItems={"center"}
        gap={1}
      >
        <Star color="primary" />
        Top Headlines
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        overflow={"auto"}
        height={"100%"}
      >
        {articles?.map((data, index) => (
          <Paper
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: "column",
              padding: 1,
              overflow: "visible",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              borderRadius: 2,
              position: "relative",
              paddingBottom: 4,
            }}
            key={index}
          >
            <Typography fontSize={12} fontWeight={600}>
              {data.title}
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              position={"absolute"}
              right={0}
              bottom={0}
              left={"6px"}
            >
              <Typography
                variant="caption"
                fontWeight={500}
                fontSize={10}
                textAlign={"left"}
              >
                {data?.publishedAt && ` ${formatDate(data?.publishedAt)}`}
              </Typography>
              <Typography variant="caption" fontSize={10}>
                Source
                <Chip
                  variant="filled"
                  color="warning"
                  component={"a"}
                  href={data.url}
                  target="_blank"
                  label={data.source?.name}
                  sx={{
                    fontSize: 10,
                    padding: "2px",
                    height: 16,
                    cursor: "pointer",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                />
              </Typography>
            </Box>
          </Paper>
        ))}
        {!loading && !articles?.length && (
          <Box
            display={"flex"}
            gap={1}
            alignItems={"center"}
            flex={1}
            justifyContent={"center"}
          >
            <HourglassDisabled fontSize="small" />
            <Typography fontSize={12} fontWeight={500}>
              {error}
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};
export default TopHeadlines;
