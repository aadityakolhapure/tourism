import React, { useState } from 'react';
import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Menu, Plus, MessageSquare, Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = {
  English: 'English',
  Hindi: 'Hindi',
  Marathi: 'मराठी',
  Japanese: '日本語',
  Spanish: 'Español',
  French: 'Français',
  German: 'Deutsch',
  Chinese: '中文',
};

const welcomeMessages = {
  English: "Hello! I'm your Satara Tourism guide. How can I help you today?",
  Hindi: "नमस्ते! मैं आपका सतारा पर्यटन गाइड हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
  Marathi: "नमस्कार! मी तुमचा सातारा पर्यटन मार्गदर्शक आहे. मी आज तुमची कशी मदत करू शकतो?",
  Japanese: "こんにちは！私はサタラ観光ガイドです。今日はどのようにお手伝いできますか？",
  Spanish: "¡Hola! Soy tu guía de turismo de Satara. ¿Cómo puedo ayudarte hoy?",
  French: "Bonjour! Je suis votre guide touristique de Satara. Comment puis-je vous aider aujourd'hui?",
  German: "Hallo! Ich bin Ihr Satara-Reiseführer. Wie kann ich Ihnen heute helfen?",
  Chinese: "你好！我是你的萨塔拉旅游向导。今天我能为您做些什么？"
};

const placeholderMessages = {
  English: "Message Satara Tourism Assistant...",
  Hindi: "सतारा पर्यटन सहायक को संदेश भेजें...",
  Marathi: "सातारा पर्यटन सहाय्यकाला संदेश पाठवा...",
  Japanese: "サタラ観光アシスタントにメッセージを送信...",
  Spanish: "Enviar mensaje al asistente de turismo de Satara...",
  French: "Message à l'assistant touristique de Satara...",
  German: "Nachricht an den Satara-Tourismus-Assistenten...",
  Chinese: "发送消息给萨塔拉旅游助手..."
};

const ChatGPTStyleBot = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { messages, input, handleInputChange, handleSubmit, setMessages, isLoading } = useChat({
    api: '/api/chat',
    body: {
      selectedLanguage,
    },
    initialMessages: [
      {
        role: 'assistant',
        content: welcomeMessages[selectedLanguage as keyof typeof welcomeMessages],
        id: 'welcome'
      }
    ],
  });

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    setMessages([
      {
        role: 'assistant',
        content: welcomeMessages[newLanguage as keyof typeof welcomeMessages],
        id: 'welcome'
      }
    ]);
  };

  const startNewChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: welcomeMessages[selectedLanguage as keyof typeof welcomeMessages],
        id: 'welcome'
      }
    ]);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-gray-900 text-white transition-all duration-300 overflow-hidden flex flex-col`}>
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 w-full p-4 hover:bg-gray-800"
          onClick={startNewChat}
        >
          <Plus size={16} />
          New chat
        </Button>

        <div className="px-2 py-4">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-full bg-gray-800">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(languages).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <ScrollArea className="flex-1 px-2">
          {messages.slice(1).map((message, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex items-center gap-2 w-full mt-2 text-left text-sm hover:bg-gray-800"
            >
              <MessageSquare size={16} />
              <span className="truncate">{message.content.slice(0, 30)}...</span>
            </Button>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-12 border-b flex items-center px-4 bg-white">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden"
          >
            <Menu />
          </Button>
          <h1 className="text-lg font-semibold ml-4">Satara Tourism Assistant</h1>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-8 ${
                message.role === 'assistant' ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="max-w-3xl mx-auto flex gap-4">
                {message.role === 'assistant' ? (
                  <Bot className="w-6 h-6 mt-1 text-green-600" />
                ) : (
                  <User className="w-6 h-6 mt-1 text-blue-600" />
                )}
                <div className="flex-1 whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="p-8 bg-white">
              <div className="max-w-3xl mx-auto flex gap-4">
                <Bot className="w-6 h-6 mt-1 text-green-600" />
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce" />
                  <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-100" />
                  <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </ScrollArea>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="border-t bg-white p-4">
          <div className="max-w-3xl mx-auto relative">
            <Input
              placeholder={placeholderMessages[selectedLanguage as keyof typeof placeholderMessages]}
              value={input}
              onChange={handleInputChange}
              className="pr-12 py-6 rounded-lg"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              disabled={isLoading}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="max-w-3xl mx-auto mt-2 text-xs text-gray-500 text-center">
            Press Enter to send
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatGPTStyleBot;