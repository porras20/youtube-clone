import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={2}
      sx={{ color: "white" }}
    >
    Seach results for: <span style={{ color: "#f31503" }}> {searchTerm} </span> videos
    </Typography>
    <Videos videos={videos} />
  </Box>
  );
}
