import { Textarea } from '@mui/joy';
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { ChangeEvent, FC } from 'react';

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
    <Box>
      <Typography>My note</Typography>
      <Textarea
        color="neutral"
        minRows={2}
        size="md"
        variant="outlined"
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