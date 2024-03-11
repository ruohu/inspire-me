import { Box, IconButton, TextField, Tooltip } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { ChangeEvent, FC } from "react";

type Props = {
  isEditing: boolean,
  note: string;
  setIsEditing: (isEditing: boolean) => void;
  setNote: (note: string) => void;
  handleSave: (newNote: string) => void;
}

const CardNote: FC<Props> = ({
  isEditing,
  note,
  setIsEditing,
  setNote,
  handleSave
}) => {

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <TextField
        sx={{ width: "95%" }}
        label="My note"
        multiline
        maxRows={5}
        value={note}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setNote(e.target.value) }}
        disabled={!isEditing}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {isEditing
          ? <Tooltip title="Save note">
            <IconButton aria-label="save note" onClick={() => handleSave(note)}>
              <DoneIcon></DoneIcon>
            </IconButton>
          </Tooltip>
          : <Tooltip title="Edit note">
            <IconButton aria-label="edit note" onClick={() => { setIsEditing(true) }}>
              <EditIcon></EditIcon>
            </IconButton>
          </Tooltip>
        }
      </Box>

    </Box>
  )
}

export default CardNote;