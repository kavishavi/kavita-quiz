// Per question: 10 on 1st attempt, 9 on 2nd, 8 on 3rd, 0 otherwise. Max 60.
// Derived from saved progress (status + attempts), so earlier saved games score correctly too.
export const questionScore = (p: any): number => {
  if (!p || p.status !== 'solved') return 0;
  if (p.attempts === 1) return 10;
  if (p.attempts === 2) return 9;
  if (p.attempts === 3) return 8;
  return 0;
};
export const totalScore = (progress: any[]): number =>
  progress.reduce((s, p) => s + questionScore(p), 0);
export const MAX_SCORE = 60;
