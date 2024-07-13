import { Button, Grid, Stack, TextField } from '@mui/material';
import { CardDto } from '@tspark/common';
import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Page } from '../../../app/pages/page';
import { Stores } from '../../../core/inversify.identifiers';
import { ICardStore } from '../card.store.type';

export const AddCardPage: React.FC = observer(() => {
  const cardStore = useInjection<ICardStore>(Stores.Card);

  const [cardName, setCardName] = React.useState('');

  const addCard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await cardStore.create({
        name: cardName,
      } as CardDto);

      setCardName('');
    } catch (e) {}
  };

  return (
    <Page title="Add Card" isAuthProtected>
      <Stack gap={4} component="form" onSubmit={addCard}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              value={cardName}
              onChange={(e) => {
                setCardName(e.target.value);
              }}
            />
          </Grid>
        </Grid>

        <Button variant="contained" type="submit">
          Add
        </Button>
      </Stack>
    </Page>
  );
});
