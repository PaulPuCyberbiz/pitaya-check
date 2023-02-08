export type Photo = {
  id: number;
  position: number;
  base64Data?: string;
  medium?: string;
  size?: number;
};

export type PhotoParams = {
  photos?: Photo[];
  deletedPhotoIds?: number[];
};

export type CreatedPhoto = {
  photoUrl: string;
  size: number;
};
