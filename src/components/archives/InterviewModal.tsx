import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { InterviewEntry } from '@/data/editions';

interface InterviewModalProps {
  interview: InterviewEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InterviewModal({ interview, open, onOpenChange }: InterviewModalProps) {
  if (!interview) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden">
        <div className="relative">
          {/* Header with photo */}
          <div className="relative h-48 sm:h-64 overflow-hidden bg-primary">
            <img
              src={interview.photo}
              alt={interview.name}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-5">
              <img
                src={interview.photo}
                alt={interview.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover border-3 border-accent shadow-lg shrink-0"
              />
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-3xl font-black text-primary-foreground uppercase tracking-tight">
                    {interview.name}
                  </DialogTitle>
                </DialogHeader>
                {interview.film && (
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    {interview.prize && <span className="text-accent font-semibold">{interview.prize}</span>}
                    {interview.prize && ' — '}
                    <em>{interview.film}</em>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Interview content */}
          <ScrollArea className="h-[50vh] sm:h-[55vh]">
            <div className="p-6 space-y-6">
              {interview.content.map((qa, index) => (
                <div key={index}>
                  <p className="font-bold text-foreground mb-2">{qa.question}</p>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{qa.answer}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
