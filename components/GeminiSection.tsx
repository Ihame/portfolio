
import React, { useState, useCallback } from 'react';
import { generateCreativeSpark } from '../services/geminiService';

const GeminiSection: React.FC = () => {
  const [spark, setSpark] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateSpark = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setSpark('');
    try {
      const result = await generateCreativeSpark();
      setSpark(result);
    } catch (err: any) {
      console.error("Gemini API error:", err);
      setError(err.message || 'Failed to generate spark. Check console for details.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section id="aispark" className="py-16 md:py-24 bg-crt-dark rounded-md my-16 border border-crt-border shadow-crt-glow">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crt-primary text-shadow-crt">
          AI Creative <span className="text-crt-primary">Spark</span> ✨
        </h2>
        <div className="w-20 h-0.5 bg-crt-primary mx-auto mb-8"></div>
        <p className="text-crt-secondary max-w-2xl mx-auto mb-10 text-lg">
          Feeling stuck? Let Gemini API ignite your imagination with a unique project idea or a creative prompt!
        </p>

        <button
          onClick={handleGenerateSpark}
          disabled={isLoading}
          className="button-crt text-lg py-3 px-8 transition-all duration-300"
        >
          {isLoading ? 'Generating...' : 'Get a Creative Spark!'}
        </button>

        {error && (
          <div className="mt-8 p-4 bg-crt-darker text-crt-rose border border-crt-rose rounded-md max-w-xl mx-auto">
            <p className="font-semibold text-shadow-crt-sm">Oops! Something went wrong:</p>
            <p className="text-sm">{error}</p>
            {error.includes("API_KEY") && <p className="text-xs mt-1">Please ensure your Gemini API key is correctly configured in the environment variables.</p>}
          </div>
        )}

        {spark && !error && (
          <div className="mt-10 p-6 bg-crt-darker border border-crt-border rounded-md shadow-inner max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-crt-primary mb-3 text-shadow-crt-sm">Your Creative Spark:</h4>
            <p className="text-crt-secondary text-lg whitespace-pre-wrap">{spark}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GeminiSection;