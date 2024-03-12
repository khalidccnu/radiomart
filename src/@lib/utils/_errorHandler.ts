import { imagePaths } from '@lib/constant/_imagePaths';

export const imageNotFound = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const imgElement = event.currentTarget;
  imgElement.src = imagePaths.notFound;
  imgElement.alt = 'Image not found';
};
