import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Sidebar, Videos} from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function Feed() {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => { setVideos(data) }
    );
  }, [selectedCategory])
  

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar 
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 Juan José
        </Typography>
        </Box>
        <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
            {selectedCategory}
            <span style={{color: '#f31503'}}> Videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Box>
      
    </Stack>
  );
}
