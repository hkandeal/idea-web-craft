
/**
 * Runware Service for generating images
 */

// Define interface for the service initialization
export class RunwareService {
  private apiKey: string;
  private baseUrl = 'https://api.runware.ai/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Define parameters for image generation
  async generateImage(params: GenerateImageParams): Promise<{ imageURL: string }> {
    try {
      // Send a POST request to the Runware API
      const response = await fetch(`${this.baseUrl}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify(params)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error (${response.status}): ${errorText}`);
      }

      const result = await response.json();
      return { imageURL: result.images?.[0] || '' };
    } catch (error) {
      console.error('Error in Runware API call:', error);
      throw error;
    }
  }
}

// Define the parameters interface for image generation
export interface GenerateImageParams {
  positivePrompt: string;
  negativePrompt?: string;
  model: string;
  width: number;
  height: number;
  numberResults: number;
  outputFormat: 'JPEG' | 'PNG' | 'WEBP';
  CFGScale: number;
  strength: number;
  seed?: number;
}
