import React from 'react'
import Button from '@material-ui/core/Button'
import { Stack } from '@mui/material'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

const ProfilePostFooter = ({post}) => {
  return (
    <div className="card-footer">
          <Stack direction="row" spacing={2}>
            <Button
                style={{ textTransform: 'none' }}
                startIcon={<FavoriteBorderRoundedIcon />}
                className="text-muted"
            >
                Like
            </Button>
            <Button
                style={{ textTransform: 'none' }}
                startIcon={<ChatOutlinedIcon />}
                className="text-muted"
            >
                Comment
            </Button>
            <Button
                style={{ textTransform: 'none' }}
                startIcon={<StarRoundedIcon />}
                className="text-muted"
            >
                Favorite
            </Button>
            <Button
                style={{ textTransform: 'none' }}
                startIcon={<IosShareRoundedIcon />}
                className="text-muted"
            >
                Share
            </Button>
        </Stack>
    </div>
  )
}

export default ProfilePostFooter