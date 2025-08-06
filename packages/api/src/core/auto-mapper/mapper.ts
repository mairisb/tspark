import { classes } from '@automapper/classes';
import { createMapper } from '@automapper/core';
import { CardDto, GameDto, UserDto } from '@tspark/common';
import { Card } from '../../features/card/card.entity';
import { Game } from '../../features/game/game.entity';
import { User } from '../../features/user/user.entity';
import { createTwoWayMap } from './auto-mapper.helpers';

export const mapper = createMapper({
  strategyInitializer: classes(),
});

export const createMaps = () => {
  createTwoWayMap(mapper, Card, CardDto);
  createTwoWayMap(mapper, Game, GameDto);
  createTwoWayMap(mapper, User, UserDto);
};
