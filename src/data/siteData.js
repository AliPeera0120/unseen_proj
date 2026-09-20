import locations from "./donationLocations.json";

export const impact = {
  glassesCollected: 2500,
  glassesLabel: "2.5K+",
  casesCollected: 1000,
  casesLabel: "1K+",
};

export const collectionLocationCount = locations.length;

export const collectionBoxCount = locations.reduce(
  (total, location) => total + (location.boxCount ?? 1),
  0,
);

export function roundedDownCount(value) {
  if (value < 10) return value;
  const magnitude = 10 ** Math.floor(Math.log10(value));
  return Math.floor(value / magnitude) * magnitude;
}

export const publicCollectionBoxCount = roundedDownCount(collectionBoxCount);

export { locations };
