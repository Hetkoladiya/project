import React, { useState, useEffect } from 'react';
import { Message } from '../types';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { generateResponse } from '../utils/chatbot-utils';
import type { Destination } from '../types';

interface ChatContainerProps {
  selectedDestination: Destination | null;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ selectedDestination }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Namaste! 🙏 I'm your Indian travel assistant. I can help you discover amazing destinations across India, from the Himalayas to the backwaters of Kerala. What would you like to explore?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);

  useEffect(() => {
    if (selectedDestination) {
      const bookingMessage: Message = {
        id: Date.now().toString(),
        content: `Great! I see you're interested in ${selectedDestination.name}. Would you like to know more about this destination or proceed with the booking?`,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, bookingMessage]);
    }
  }, [selectedDestination]);

  const handleSend = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Generate AI response
    setTimeout(() => {
      const response = generateResponse(content);
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <div className="p-4 border-t">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};