import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function VideoDetail() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data)
    );
    console.log(videoDetails)
  }, [id]);
  const { snippet, statistics } = videoDetails;

  
  return (
    // <Box minHeight="95vh">
    //   <Stack direction={{ sx: "column", md: "row" }}>
    //     <Box flex={1}>
    //       <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
    //         <ReactPlayer
    //           url={`https://www.youtube.com/watch?v=${id}`}
    //           className="react-player"
    //           controls
    //         />
    //         <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
    //           {snippet?.title}
    //         </Typography>
    //         <Stack
    //           direction="row"
    //           justifyContent="space-between"
    //           sx={{
    //             color: "#fff",
    //           }}
    //           py={1}
    //           px={2}
    //         >
    //           <Link to={`/channel/${statistics?.channelId}`}>
    //           <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='#fff'>
    //             {statistics?.channelTitle}
    //           </Typography>
    //           </Link>
    //         </Stack>
    //       </Box>
    //     </Box>
    //   </Stack>
    // </Box>
    <h1></h1>
  );
}
