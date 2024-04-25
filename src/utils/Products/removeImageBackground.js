import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

async function removeBackground(imageUrl) {
  try {
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_url', imageUrl);

    const response = await axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: formData,
      responseType: 'arraybuffer',
      headers: {
        'X-Api-Key': '7bpxbVYjaQac7qsnwRCU4y4t',
      },
      encoding: null
    });

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    fs.writeFileSync("no-bg.png", response.data);
    console.log('Background removed successfully.');
  } catch (error) {
    console.error('Request failed:', error);
  }
}
export default removeBackground

