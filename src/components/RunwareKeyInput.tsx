
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateLetterH } from '@/services/imageService';
import { toast } from 'sonner';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const RunwareKeyInput = () => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!apiKey) {
      toast.error('Please enter your Runware API key');
      return;
    }

    setIsLoading(true);
    try {
      const generatedImageUrl = await generateLetterH(apiKey);
      setImageUrl(generatedImageUrl);
      toast.success('Image generated successfully!');
      console.log('Generated image URL:', generatedImageUrl);
    } catch (error) {
      toast.error('Failed to generate image');
      console.error('Error details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto p-4">
      <p className="text-sm text-gray-600">
        To generate an image, please enter your Runware API key. You can find your API key at{' '}
        <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
          runware.ai
        </a>
      </p>
      <Input
        type="password"
        placeholder="Enter your Runware API key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <Button 
        onClick={handleGenerate}
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Letter H'}
      </Button>
      
      {imageUrl && (
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Generated Image:</p>
          <AspectRatio ratio={1/1} className="bg-gray-100 rounded-md overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Generated Letter H" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      )}
    </div>
  );
};
