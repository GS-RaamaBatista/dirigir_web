import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[image:var(--gradient-subtle)] p-4">
      <div className="text-center space-y-6 max-w-2xl animate-fade-in">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
          Sistema de Confirmação de Email
        </h1>
        <p className="text-xl text-muted-foreground">
          Gerencie e confirme emails de forma segura e elegante
        </p>
        <Button 
          size="lg" 
          className="bg-[image:var(--gradient-primary)] hover:opacity-90 transition-opacity shadow-[var(--shadow-glow)]"
          asChild
        >
          <a href="/confirm-email">
            <Mail className="mr-2 h-5 w-5" />
            Ir para Confirmação de Email
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
