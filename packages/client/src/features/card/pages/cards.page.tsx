import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../../app/pages/page';
import { Stores } from '../../../core/inversify.identifiers';
import { ICardStore } from '../card.store.type';

export const CardsPage: React.FC = observer(() => {
  const cardStore = useInjection<ICardStore>(Stores.Card);

  React.useEffect(() => {
    cardStore.fetchAll();
  }, []);

  return (
    <Page title="Your Cards" isAuthProtected>
      <Stack spacing={4}>
        <Stack spacing={2}>
          {cardStore.cards.map((card) => (
            <Card key={card.id} sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: 64 }}
                image="https://mui.com/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
              />
              <CardContent>
                <Typography>{card.name}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Button variant="contained" component={Link} to="/card/add">
          Add card
        </Button>
      </Stack>
    </Page>
  );
});
