export const deprecationWarning = (warning: string) =>
  process.env.NODE_ENV !== 'production'
    ? // tslint:disable-next-line: no-console
      console.warn(warning)
    : () => {};
