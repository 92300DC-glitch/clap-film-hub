import { useState } from 'react';
import { Mic } from 'lucide-react';
import { InterviewModal } from './InterviewModal';
import type { InterviewEntry } from '@/data/editions';

interface InterviewsSectionProps {
  interviews: InterviewEntry[];
}

export function InterviewsSection({ interviews }: InterviewsSectionProps) {
  const [selectedInterview, setSelectedInterview] = useState<InterviewEntry | null>(null);

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
        <Mic className="h-7 w-7 text-accent" />
        Interviews et Articles
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {interviews.map((interview, index) => (
          <button
            key={index}
            onClick={() => setSelectedInterview(interview)}
            className="group text-left cursor-pointer"
          >
            <div className="aspect-square overflow-hidden border-2 border-border mb-3 bg-muted relative">
              <img
                src={interview.photo}
                alt={interview.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-accent-foreground rounded-full p-2">
                  <Mic className="h-5 w-5" />
                </div>
              </div>
            </div>
            <h3 className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">
              {interview.name}
            </h3>
            {interview.film && (
              <p className="text-xs text-muted-foreground mt-0.5 italic">{interview.film}</p>
            )}
            {!interview.film && interview.role && (
              <p className="text-xs text-muted-foreground mt-0.5 italic">{interview.role}</p>
            )}
          </button>
        ))}
      </div>

      <InterviewModal
        interview={selectedInterview}
        open={!!selectedInterview}
        onOpenChange={(open) => !open && setSelectedInterview(null)}
      />
    </div>
  );
}
