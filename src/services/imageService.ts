
import { RunwareService, GenerateImageParams } from '@/utils/runware';

export const generateLetterH = async (apiKey: string) => {
  const runware = new RunwareService(apiKey);
  
  const params: GenerateImageParams = {
    positivePrompt: "A minimalist, elegant design of the letter H in a modern style, clean lines, abstract architectural form, white background, professional graphic design",
    model: "runware:100@1",
    width: 512,
    height: 512,
    numberResults: 1,
    outputFormat: "WEBP",
    CFGScale: 7,
    strength: 0.8
  };

  try {
    const result = await runware.generateImage(params);
    return result.imageURL;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};
