import {
  Day03Collection,
  Day03Number,
  day03NumberNextToSymbol,
  Day03Symbol,
} from "./day-03-utilities";

export type Day03ValidGearWithNumbers = {
  gear: Day03Symbol;
  gearRatio: number;
};

export function day03ValidGearsWithNumbers(
  collection: Day03Collection
): Day03ValidGearWithNumbers[] {
  const gears = getGears(collection);
  const validGears = gears.filter((gear) => gear.numbers.length === 2);

  return validGears.map((gear) => {
    const firstGearValue = gear.numbers[0].value;
    const secondGearValue = gear.numbers[1].value;
    const gearRatio = firstGearValue * secondGearValue;

    return {
      gear,
      gearRatio,
    };
  });
}

type Day03Gear = Day03Symbol & {
  numbers: Day03Number[];
};

const Day03GearSymbol = "*";

function getGears(collection: Day03Collection): Day03Gear[] {
  const gears = collection.symbols.filter(
    (symbol) => symbol.value === Day03GearSymbol
  );

  return gears.map((gear) => {
    return {
      ...gear,
      numbers: getNumbersForGear(gear, collection.numbers),
    };
  });
}

function getNumbersForGear(
  symbol: Day03Symbol,
  numbers: Day03Number[]
): Day03Number[] {
  return numbers.filter((number) => day03NumberNextToSymbol(number, symbol));
}
