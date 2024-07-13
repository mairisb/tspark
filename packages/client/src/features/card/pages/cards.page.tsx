import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { CardDto, ErrorResponse } from '@tspark/common';
import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../../app/pages/page';
import { Services } from '../../../core/inversify.identifiers';
import { ICardService } from '../card.service.type';

export const CardsPage: React.FC = observer(() => {
  const cardService = useInjection<ICardService>(Services.Card);

  const [cards, setCards] = React.useState<CardDto[]>([]);

  React.useEffect(() => {
    cardService.getAll().then((response) => {
      if (!(response as unknown as ErrorResponse).error) {
        setCards(response);
      }
    });
  }, []);

  return (
    <Page title="Your Cards" isAuthProtected>
      <Stack spacing={4}>
        <Stack spacing={2}>
          {cards.map((card) => (
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
