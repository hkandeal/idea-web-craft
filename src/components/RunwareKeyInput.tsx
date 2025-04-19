
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateLetterH } from '@/services/imageService';
import { toast } from 'sonner';

export const RunwareKeyInput = () => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!apiKey) {
      toast.error('Please enter your Runware API key');
      return;
    }

    setIsLoading(true);
    try {
      const imageUrl = await generateLetterH(apiKey);
      // You can handle the image URL here, for example by displaying it
      toast.success('Image generated successfully!');
      console.log('Generated image URL:', imageUrl);
    } catch (error) {
      toast.error('Failed to generate image');
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
    </div>
  );
};
