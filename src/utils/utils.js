export function sliceGeneration(name) {
  let short = name;

  if (name.includes('original-')) short = name.slice(9);
  if (name.includes('kalos')) short = name.slice(0, 5);

  return short;
}
