export type StandardEnum<T> = {
  [id: string]: T | string;
  [nu: number]: T | string;
};

export function enumHasValue<T>(enumType: T, value: string | number): boolean {
  const enumValues = Object.values(enumType as StandardEnum<unknown>);
  return enumValues.includes(value);
}

export function valToEnum<T extends StandardEnum<unknown>>(
  enumObj: T,
  value: string | number
): T[keyof T] | undefined {
  const enumValues = Object.values(enumObj);

  for (const enumValue of enumValues) {
    if (enumValue === value) {
      return enumValue as T[keyof T];
    }
  }

  return undefined;
}
