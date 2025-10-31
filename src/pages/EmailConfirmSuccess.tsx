import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EmailConfirmSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[image:var(--gradient-subtle)]">
      <Card className="w-full max-w-md p-8 shadow-[var(--shadow-glow)] animate-fade-in">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-accent flex items-center justify-center animate-fade-in-delay">
            <CheckCircle className="w-8 h-8 text-accent-foreground" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Email Confirmado!
            </h1>
            <p className="text-muted-foreground">
              Sua alteração de email foi concluída com sucesso
            </p>
          </div>

          {/* Success Message */}
          <div className="flex items-start gap-3 p-4 bg-accent rounded-lg text-left">
            <CheckCircle className="w-5 h-5 text-accent-foreground shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-accent-foreground">
                Tudo pronto!
              </p>
              <p className="text-sm text-muted-foreground">
                Seu novo email foi verificado e ativado. Você já pode usar sua conta normalmente.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Button
              className="w-full bg-[image:var(--gradient-primary)] hover:opacity-90 transition-opacity"
              size="lg"
              asChild
            >
              <a href="/">Ir para o início</a>
            </Button>
          </div>

          {/* Helper Text */}
          <p className="text-xs text-muted-foreground pt-4">
            Agora você pode fazer login com seu novo email.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default EmailConfirmSuccess;
