import { Box, Button, ButtonBase, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';

function ExperienceCard({ name, position, date, imgSrc, works, isDetailed }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 1,
        border: isDetailed ? 'none' : '',
      }}
      width="100%"
    >
      <Avatar src={`/${imgSrc}`} alt={imgSrc} sx={{ width: 35, height: 35 }} />
      <Box
        display="flex"
        flexDirection="column"
        marginLeft={2}
        width="100%"
        justifyContent="flex-start"
      >
        <Typography variant="h6">{position}</Typography>
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          alignItems="center"
          marginBottom={1}
        >
          <Typography color={grey[600]}>{name}</Typography>
          <Typography color={grey[600]} marginLeft={1}>
            {date}
          </Typography>
        </Box>
        {readMore || isDetailed ? (
          <>
            {/* <ButtonBase
              sx={{
                width: 'fit-content',
                textTransform: 'none',
                cursor: 'pointer',
              }}
              onClick={() => setReadMore(!readMore)}
            >
              <Typography color={grey[600]}>Hide</Typography>
            </ButtonBase> */}
            {works.map((work, idx) => {
              return <Typography key={idx}>• {work}</Typography>;
            })}
          </>
        ) : (
          <ButtonBase
            sx={{
              width: 'fit-content',
              textTransform: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setReadMore(!readMore)}
          >
            <Typography color={grey[600]}>See my work</Typography>
          </ButtonBase>
        )}
      </Box>
    </Card>
  );
}

export default ExperienceCard;
