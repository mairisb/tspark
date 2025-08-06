import { createMap, Mapper } from '@automapper/core';

export const createTwoWayMap = <Class1, Class2>(
  mapper: Mapper,
  class1: new () => Class1,
  class2: new () => Class2,
) => {
  createMap(mapper, class1, class2);
  createMap(mapper, class2, class1);
};
