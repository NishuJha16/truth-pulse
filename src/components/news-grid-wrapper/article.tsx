import { Box, Chip, Skeleton, Typography } from "@mui/material";
import { Item, formatDate } from "./news-grid-wrapper";
import { useState } from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const Article = ({ news }: any) => {
  const [imgLoading, setImageLoading] = useState<boolean>(true);

  return (
    <Item>
      <Chip
        variant="filled"
        color="primary"
        component={"a"}
        href={news.url}
        target="_blank"
        label={
          <Box display={"flex"} alignItems={"center"}>
            {news.source?.name || news.source}
            <ReadMoreIcon />
          </Box>
        }
        sx={{
          fontSize: 12,
          padding: "2px",
          height: 24,
          position: "absolute",
          right: 0,
          top: 0,
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0.2,
          cursor: "pointer",
        }}
      />
      {imgLoading && news.image && (
        <Skeleton variant="rectangular" width="100%" height={150} />
      )}
      {news.image && (
        <img
          src={`${news.image}`}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          onLoad={() => setImageLoading(false)}
          alt="news_img"
        />
      )}
      <Box display={"flex"} flexDirection={"column"} gap={1} padding={2}>
        <Typography
          variant="body2"
          fontWeight={600}
          color={"text.disabled"}
          paddingTop={1}
        >
          {news.title}
        </Typography>
        <Typography variant="caption" fontSize={10} color="text.secondary">
          <b>{news?.publishedAt && ` ${formatDate(news?.publishedAt)}`}</b>
        </Typography>
        <Typography variant="caption" color={"text.primary"}>
          {news.description}
        </Typography>
        <Typography variant="caption" color={"text.primary"} fontSize={10}>
          {news.content}
        </Typography>
      </Box>
    </Item>
  );
};
export default Article;
