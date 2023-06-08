import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import { useState } from "react";
import CardDeleteDialog from "./CardDeleteDialog";

const CardActionBar = ({ cardId, onDelete, handleLikeCard, cardUserId }) => {

  const [isDialogOpen, setDialog] = useState(false);
  const { user } = useUser();

  const handleDialog = term => {
    if (term === 'open') return setDialog(true)
    setDialog(false)
  }

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
  }

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ paddingTop: 0, justifyContent: "space-between" }}
      >
        <Box>

          {(user?._id === cardUserId || user?.isAdmin) && (
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}
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

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onDelete={handleDeleteCard}
        onChangeDialog={handleDialog}
      />
    </>
  );
};

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onDelete: func.isRequired,
  handleLikeCard: func.isRequired,
  cardUserId: string.isRequired,
};

export default CardActionBar;
