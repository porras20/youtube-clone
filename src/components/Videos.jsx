import { Box, Stack } from '@mui/material'
import React from 'react'
import {ChannelCard, VideoCard } from './'

export default function Videos({videos, direction}) {

  return (
    <Stack direction={ direction || 'row' } flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.items?.map((item, idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))}
    </Stack>
  )
}
