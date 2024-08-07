import { Box, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SearchIcon from "@mui/icons-material/Search";

const NoResultsFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      textAlign="center"
      padding={2}
      maxWidth={700}
    >
      <SentimentDissatisfiedIcon style={{ fontSize: 50 }} color="primary" />
      <Typography variant="h6" color="textSecondary" style={{ marginTop: 16 }}>
        Oops! No news articles found.
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        style={{ marginTop: 8 }}
      >
        It seems we couldn't find what you were looking for. Try searching with
        different keywords or check back later.
      </Typography>
      <Box display="flex" alignItems="center" marginTop={2}>
        <SearchIcon style={{ marginRight: 8, color: "gray" }} />
        <Typography variant="body2" color="textSecondary">
          Need help? Try these tips:
        </Typography>
      </Box>
      <ul style={{ marginTop: 8, textAlign: "left", fontSize: 12 }}>
        <li>Check your spelling</li>
        <li>Use different keywords</li>
        <li>Try more general terms</li>
      </ul>
    </Box>
  );
};

export default NoResultsFound;
