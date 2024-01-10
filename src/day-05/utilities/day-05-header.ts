export type Day05Header = {
  from: string;
  to: string;
};

export function day05ParseHeader(headerString: string): Day05Header {
  const [header, _suffix] = headerString.split(" map:");
  const [from, to] = header.split("-to-");

  return {
    from,
    to,
  };
}
