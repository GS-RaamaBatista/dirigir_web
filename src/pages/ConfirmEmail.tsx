import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const ConfirmEmail = () => {
  const [isResending, setIsResending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleResendEmail = async () => {
    setIsResending(true);
    
    // Simular envio de email (aqui você integraria com sua API real)
    setTimeout(() => {
      setEmailSent(true);
      setIsResending(false);
      toast.success("Email de confirmação enviado!", {
        description: "Verifique sua caixa de entrada e spam.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[image:var(--gradient-subtle)]">
      <Card className="w-full max-w-md p-8 shadow-[var(--shadow-glow)] animate-fade-in">
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-accent flex items-center justify-center animate-fade-in-delay">
            <Mail className="w-8 h-8 text-accent-foreground" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Confirme seu Email
            </h1>
            <p className="text-muted-foreground">
              Enviamos um link de confirmação para seu email
            </p>
          </div>

          {/* Status Messages */}
          {emailSent ? (
            <div className="flex items-start gap-3 p-4 bg-accent rounded-lg text-left animate-fade-in">
              <CheckCircle className="w-5 h-5 text-accent-foreground shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-accent-foreground">
                  Email enviado com sucesso!
                </p>
                <p className="text-sm text-muted-foreground">
                  Verifique sua caixa de entrada e também a pasta de spam.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg text-left">
              <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  Não recebeu o email?
                </p>
                <p className="text-sm text-muted-foreground">
                  Clique no botão abaixo para reenviar o email de confirmação.
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={handleResendEmail}
              disabled={isResending}
              className="w-full bg-[image:var(--gradient-primary)] hover:opacity-90 transition-opacity"
              size="lg"
            >
              {isResending ? "Enviando..." : "Reenviar Email de Confirmação"}
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
            Verifique se o email está correto. Se continuar com problemas, entre em contato com o suporte.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ConfirmEmail;
