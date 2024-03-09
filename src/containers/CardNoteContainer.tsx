import { FC, useState } from 'react'
import { QuotesActionType } from '../models/enums/QuoteActionsType';
import { useQuotesDispatch } from '../context/QuotesContext';
import CardNote from '../components/CardNote';

type Props = {
  quoteId: string;
}

const CardNoteContainer: FC<Props> = ({ quoteId }) => {
  const dispatch = useQuotesDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");

  const handleSave = (newNote: string) => {
    setIsEditing(false);
    dispatch({
      type: QuotesActionType.AddNote,
      payload: {
        quoteId,
        note: newNote
      }
    });
  }

  return (
    <CardNote
      isEditing={isEditing}
      note={note}
      setIsEditing={setIsEditing}
      setNote={setNote}
      handleSave={handleSave}
    />
  )
}

export default CardNoteContainer