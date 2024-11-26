import QuizProcessPage from "@/views/quiz-process";

export default async function Page({ params }: { params: Promise<{ quizId: string }> }) {
  const { quizId } = await params;
  return <QuizProcessPage quizId={Number(quizId)} />;
}
