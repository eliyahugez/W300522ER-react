import React, { useEffect, useState } from 'react';
import { Typography, Paper, Grid, Link, IconButton, SpeedDial, SpeedDialIcon, SpeedDialAction, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import { Call, Delete, Edit, Email, Favorite, Web } from '@mui/icons-material';
import { useUser } from '../../users/providers/UserProvider';
import { changeLikeStatus } from '../../../src/cards/services/cardApiService'

const CardDetailPage = () => {
  const { id } = useParams();
  const { value: { card }, handleGetCard } = useCards();
  const { user } = useUser();

  const { handleLikeCard } = useCards();
  useEffect(() => {
    handleGetCard(id);
  }, []);


  const [isLike, setLike] = useState(() => {
    if (!user) return false;

  });

  const handleLike = async () => {
    setLike(!isLike);
    await handleLikeCard(id);
    // onLike();
  };



  const actions = [
    { icon: <Edit />, name: 'Edit' },
    { icon: <Delete />, name: 'Delete' },

    {
      icon: <IconButton
        aria-label="add to favorites"
        onClick={handleLike}
      >
        <Favorite color={isLike ? "error" : "inherit"} />
      </IconButton>, name: 'Favorite'
    },

    { icon: <Call />, name: 'Call' },
  ];

  return (
    <>
      {card &&
        <Paper variant="outlined" elevation={3} sx={{ padding: 2 }}>
          <Typography spacing={2} sx={{ marginTop: 2 }} variant="h3">Welcome to our Card Page </Typography>
          <Divider variant="middle" />
          <Typography variant="h5">{card.title}</Typography>
          <Typography variant="subtitle1">{card.subtitle}</Typography>
          <Typography>{card.description}</Typography>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
          </Grid>
          <Grid item xs={6}>
            <Divider variant="inset" />
            <Typography>
              <strong>Address:</strong>{' '}
              {`${card.address.street} ${card.address.houseNumber}, ${card.address.city}, ${card.address.country}`}
            </Typography>
            <Typography>
              <strong>ZIP:</strong> {card.address.zip}
            </Typography>
            <Typography>
              <strong>BizNumber:</strong> {card.bizNumber}
            </Typography>
          </Grid>
          <Grid item xs={6} >

            <img src={card.image.url} alt={card.image.alt} style={{ maxWidth: "60%", marginTop: '2rem', scale: "revert" }} />
          </Grid>

          <Paper variant="outlined" square>
            <Grid item xs={6}  >
              <Typography>
                <IconButton
                  aria-label="phone"
                  className='icon_for_card_detail'>

                  <PhoneIcon  ></PhoneIcon>
                  <strong>Phone:</strong> {card.phone}
                </IconButton>
              </Typography>
              <Typography>
                <IconButton>
                  <Email  ></Email>
                  <strong>Email:</strong> {card.email}
                </IconButton>
              </Typography>
              <Typography>
                <IconButton>
                  <Web></Web>
                  <strong>Website:</strong>{' '}
                  <Link href={card.web}>{card.web}</Link>
                </IconButton>
              </Typography>
            </Grid>
          </Paper>

          {user && (user._id === card.user_id || user.isAdmin === true) && (

            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: -300, right: "5%" }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          )}

        </Paper>

      }

    </>
  );
};

export default CardDetailPage;
