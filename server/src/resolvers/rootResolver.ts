import admin from "@middleware/firebase";
import { Pixel } from "@interfaces";

export const root = {
  message: (): string => "Hello from stalle backend!",

  getPixel: async ({ x, y }: { x: number; y: number }): Promise<Pixel> => {
    const pixelRef = admin.firestore().collection("pixels").doc(`${x}_${y}`);
    const pixelDoc = await pixelRef.get();

    if (!pixelDoc.exists) {
      throw new Error("Pixel not found");
    }

    return pixelDoc.data() as Pixel;
  },

  setPixel: async ({
    x,
    y,
    colour,
    user,
  }: {
    x: number;
    y: number;
    colour: string;
    user: string;
  }): Promise<Pixel> => {
    const pixelRef = admin.firestore().collection("pixels").doc(`${x}_${y}`);

    const pixelData: Pixel = {
      user,
      colour,
      position: {
        x,
        y,
      },
    };

    await pixelRef.set(pixelData);

    return pixelData;
  },
};
