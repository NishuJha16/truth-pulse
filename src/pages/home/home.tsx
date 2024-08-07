import { Box, useMediaQuery, useTheme } from "@mui/material";
import NewsGridWrapper from "../../components/news-grid-wrapper/news-grid-wrapper";
import TopHeadlines from "../../components/top-headlines/top-headlines";

const HomePage = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("lg"));

  const getGridColumns = () => {
    if (isSm) return 1;
    if (isMd) return 2;
    if (isLg) return 2;
    if (isXl) return 3;
    return 3;
  };

  return (
    <Box
      display={"flex"}
      gap={2}
      sx={{
        flexDirection: { lg: "row", sm: "column", xs: "column" },
      }}
    >
      <TopHeadlines />
      <Box marginRight={"320px"} width={"100%"}>
        <NewsGridWrapper type="everything" getGridColumns={getGridColumns} />
      </Box>
    </Box>
  );
};
export default HomePage;
