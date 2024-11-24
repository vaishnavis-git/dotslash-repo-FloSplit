import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageSquare, X, Send } from 'lucide-react';

// Initialize Gemini AI with the API key from environment variables
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface UserProfile {
  name: string;
  currentPhase: string;
  fitnessLevel: string;
  weeklyTime: string;
  goals: string[];
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Hardcoded user profile (in real app, get from context/state)
  const userProfile: UserProfile = {
    name: "Vaishnavi",
    currentPhase: "follicular",
    fitnessLevel: "intermediate",
    weeklyTime: "4-5",
    goals: ["Strength Training", "Energy Boost"],
  };

  const systemPrompt = `You are CycleSync Coach, a conversational fitness coach specializing in cycle-based training.
    
  CONVERSATION STYLE:
  - Keep responses brief and conversational
  - Use natural, friendly language
  - Break information into small, digestible chunks
  - Ask follow-up questions to better understand the user's needs
  - Consider user's profile in your responses
  
  USER PROFILE:
  - Name: ${userProfile.name}
  - Current Phase: ${userProfile.currentPhase}
  - Fitness Level: ${userProfile.fitnessLevel}
  - Available Time: ${userProfile.weeklyTime} hours/week
  - Goals: ${userProfile.goals.join(', ')}
  
  KEY GUIDELINES:
  1. Start with brief responses
  2. Wait for user to ask for more details
  3. Be empathetic and supportive
  4. Consider cycle phase in advice
  5. Focus on safety and proper progression`;

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      initializeChat();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const initializeChat = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      chatRef.current = model.startChat({
        history: [
          {
            role: "user",
            parts: [systemPrompt],
          },
        ],
      });

      setMessages([{
        role: 'assistant',
        content: `Hi ${userProfile.name}! I'm your CycleSync Coach. I see you're in your ${userProfile.currentPhase} phase. How can I help you today?`
      }]);
    } catch (error) {
      console.error('Error initializing chat:', error);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !chatRef.current) return;

    const userMessage = { role: 'user' as const, content: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const result = await chatRef.current.sendMessage(inputText);
      const response = await result.response;
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response.text()
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I had trouble processing that. Could you try rephrasing?"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-rose-500 text-white p-4 rounded-full shadow-lg hover:bg-rose-600 transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col">
      {/* Chat Header */}
      <div className="bg-rose-500 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-semibold">CycleSync Coach</h3>
          <p className="text-sm text-rose-100">Current Phase: {userProfile.currentPhase}</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-rose-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.role === 'assistant'
                ? 'bg-rose-50 mr-12'
                : 'bg-gray-100 ml-12'
            } p-3 rounded-lg`}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="bg-rose-50 p-3 rounded-lg mr-12">
            Typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about workouts, wellness, or cycle syncing..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-rose-500 text-white p-2 rounded-lg hover:bg-rose-600 disabled:bg-gray-300"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;