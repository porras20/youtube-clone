import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelCard, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(157,255,232,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetail={channelDetail}
          marginTop="-93px"
        ></ChannelCard>
      </Box>
      <Box display='flex' p='2'>
          <Box sx={{mr: {sm: '100px'}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
}
