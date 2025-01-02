import React from 'react';
import { Message } from '../types';
import { UserCircle, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-3 max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="w-8 h-8 flex items-center justify-center">
          {isUser ? <UserCircle className="w-8 h-8 text-blue-500" /> : <Bot className="w-8 h-8 text-green-500" />}
        </div>
        <div className={`rounded-lg p-4 ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
          {message.content}
        </div>
      </div>
    </div>
  );
};