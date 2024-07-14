import { classes } from '@automapper/classes';
import { createMap, createMapper } from '@automapper/core';
import { CardDto, GameDto, UserDto } from '@tspark/common';
import { Card } from '../../features/card/card.entity';
import { Game } from '../../features/game/game.entity';
import { User } from '../../features/user/user.entity';

export const mapper = createMapper({
  strategyInitializer: classes(),
});

export const createMaps = () => {
  createMap(mapper, Card, CardDto);
  createMap(mapper, CardDto, Card);

  createMap(mapper, Game, GameDto);
  createMap(mapper, GameDto, Game);

  createMap(mapper, User, UserDto);
  createMap(mapper, UserDto, User);
};
