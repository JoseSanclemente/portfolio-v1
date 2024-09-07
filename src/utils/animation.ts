/**
 * Calculate the animation delay based on the increment
 * @param increment
 * @returns Animation delay in seconds
 */
export const getAnimationDelay = (increment: number) => {
  return `${increment * 0.25}s`;
};
