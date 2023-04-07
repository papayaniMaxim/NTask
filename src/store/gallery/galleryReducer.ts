import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GalleryImage from "./galleryImage";

export interface GalleryState {
  images: GalleryImage[];
}
import initialImage from "../../assets/image.jpg";

const initialState: GalleryState = {
  images: [
    { ...new GalleryImage(initialImage), checked: true },
    new GalleryImage(initialImage),
    new GalleryImage(initialImage),
    new GalleryImage(initialImage),
  ],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addImage(state: GalleryState, action: PayloadAction<GalleryImage>) {
      state.images = [...state.images, action.payload];
    },

    checkToggleImage(state: GalleryState, action: PayloadAction<string>) {
      const updatedImages = state.images.map((image) => {
        if (image.id === action.payload) {
          return { ...image, checked: !image.checked };
        }
        return image;
      });
      state.images = updatedImages;
    },

    clearImageChecks(state: GalleryState) {
      const updatedImages = state.images.map((image) => {
        return { ...image, checked: (image.checked = false) };
      });
      state.images = updatedImages;
    },

    deleteImage(state: GalleryState, action: PayloadAction<string>) {
      state.images = state.images.filter((image) => image.id != action.payload);
    },

    deleteCheckedImages(state: GalleryState) {
      state.images = state.images.filter((image) => !image.checked);
    },
  },
});

export const {
  addImage,
  checkToggleImage,
  deleteImage,
  deleteCheckedImages,
  clearImageChecks,
} = gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;
