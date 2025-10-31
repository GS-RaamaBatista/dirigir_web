import { XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EmailConfirmError = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[image:var(--gradient-subtle)]">
      <Card className="w-full max-w-md p-8 shadow-[var(--shadow-glow)] animate-fade-in">
        <div className="text-center space-y-6">
          {/* Error Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center animate-fade-in-delay">
            <XCircle className="w-8 h-8 text-destructive" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Alteração Não Concluída
            </h1>
            <p className="text-muted-foreground">
              Não foi possível confirmar a alteração do seu email
            </p>
          </div>

          {/* Error Message */}
          <div className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg text-left">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-destructive">
                Algo deu errado
              </p>
              <p className="text-sm text-muted-foreground">
                O link pode ter expirado ou já foi utilizado. Por favor, solicite um novo email de confirmação.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button
              className="w-full bg-[image:var(--gradient-primary)] hover:opacity-90 transition-opacity"
              size="lg"
              asChild
            >
              <a href="/confirm-email">Solicitar Novo Email</a>
            </Button>
            
            <Button
              variant="ghost"
              className="w-full"
              asChild
            >
              <a href="/">Voltar para o início</a>
            </Button>
          </div>

          {/* Helper Text */}
          <p className="text-xs text-muted-foreground pt-4">
            Se o problema persistir, entre em contato com o suporte.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default EmailConfirmError;
