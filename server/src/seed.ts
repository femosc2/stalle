import admin from '@middleware/firebase';
import { Pixel } from '@interfaces';

const gridSize = 50;

const db = admin.database();

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomUserID(): string {
  return Math.random().toString(36).substring(2, 10);
}

async function seedDatabase() {
  const pixelsRef = db.ref('pixels');

  console.log("Cleaning up the existing 'pixels' node...");
  await pixelsRef.remove();
  console.log("'pixels' node removed. Starting fresh...");

  console.log(`Seeding started for a ${gridSize}x${gridSize} grid...`);

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      const pixelData: Pixel = {
        user: getRandomUserID(),
        colour: getRandomColor(),
        position: { x, y },
      };

      try {
        await pixelsRef.child(`${x}_${y}`).set(pixelData);
        console.log(
          `Seeded pixel at (${x}, ${y}) with user ${pixelData.user} and colour ${pixelData.colour}`
        );
      } catch (error) {
        console.error(`Error seeding pixel at (${x}, ${y}):`, error);
      }
    }
  }

  console.log('Seeding completed!');
}

seedDatabase()
  .then(() => {
    console.log('Seeding process finished.');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error during seeding process:', error);
    process.exit(1);
  });
