import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";

const CardActionBar = ({ cardId, handleDeleteCard, handleLikeCard, cardUserId }) => {
  const { user } = useUser();


  return (
    <CardActions
      disableSpacing
      sx={{ paddingTop: 0, justifyContent: "space-between" }}
    >
      <Box>

        {(user?._id === cardUserId || user?.isAdmin) && (
          <IconButton
            aria-label="delete card"
            onClick={() => handleDeleteCard(cardId)}
          >
            <DeleteIcon />
          </IconButton>
        )}


        {user?._id === cardUserId && (
          <IconButton
            aria-label="edit card"
            onClick={() =>
              console.log(`Move to Edit card component with card ${cardId}`)
            }
          >
            <ModeEditIcon />
          </IconButton>
        )}


      </Box>

      <Box>
        <IconButton aria-label="call business">
          <CallIcon />
        </IconButton>

        {user && (
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleLikeCard(cardId)}
          >
            <FavoriteIcon />
          </IconButton>
        )}

      </Box>
    </CardActions>
  );
};

CardActionBar.propTypes = {
  cardId: string.isRequired,
  handleDeleteCard: func.isRequired,
  handleLikeCard: func.isRequired,
};

export default CardActionBar;
