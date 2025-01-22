import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../../app/pages/page';
import { cardApi } from '../card.api';

export const CardsPage: React.FC = () => {
  const { data: cards, error, isLoading } = cardApi.useGetAllQuery();
  const [deleteCard] = cardApi.useDeleteMutation();

  const renderCards = () => {
    if (isLoading) {
      return <Typography>Loading...</Typography>;
    }
    if (error) {
      return <Typography>Something went wrong</Typography>;
    }
    if (!cards) {
      return <Typography>No cards found</Typography>;
    }

    return (
      <Stack spacing={2}>
        {cards?.map((card) => (
          <Card key={card.id} sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              sx={{ width: 64 }}
              image="https://mui.com/static/images/cards/live-from-space.jpg"
              alt="Live from space album cover"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ flexGrow: 1 }}>{card.name}</Typography>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    deleteCard(card.id);
                  }}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    );
  };

  return (
    <Page title="Your Cards" isAuthProtected>
      <Stack spacing={4}>
        {renderCards()}

        <Button variant="contained" component={Link} to="/card/add">
          Add card
        </Button>
      </Stack>
    </Page>
  );
};
