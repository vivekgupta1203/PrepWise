import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  const user = await getCurrentUser();

  const FREE_LIMIT = 3;
  // 1️⃣ Define interviewsUsed FIRST
  const interviewsUsed = user?.interviewCount ?? 0;
  // 2️⃣ Then calculate remaining
  const interviewsLeft = Math.max(FREE_LIMIT - interviewsUsed, 0);
  // 3️⃣ Then calculate percent
  const usagePercent = Math.min((interviewsUsed / FREE_LIMIT) * 100, 100);

  const isFreeUser = user?.plan === "free";
  const limitReached = isFreeUser && interviewsUsed >= FREE_LIMIT;

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          {limitReached ? (
            <Button
              asChild
              className="bg-amber-500 hover:bg-amber-600 max-sm:w-full"
            >
              <Link href="/pricing">Upgrade to Pro</Link>
            </Button>
          ) : (
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/interview">Start an Interview</Link>
            </Button>
          )}
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Your Interviews
          </h2>

          {/* FREE PLAN STATUS */}
          {user?.plan === "free" && (
            <div className="flex flex-col items-end gap-1 min-w-[220px]">
              <div className="flex items-center justify-between w-full text-xs text-gray-400">
                <span>Free Plan</span>
                <span className="text-white font-medium">
                  {interviewsUsed}/3
                </span>
              </div>

              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>

              <span className="text-[11px] text-amber-400">
                {interviewsLeft} interviews remaining
              </span>
            </div>
          )}

          {/* PRO STATUS */}
          {user?.plan === "pro" && (
            <div className="px-4 py-1.5 text-xs font-medium rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              PRO MEMBER
            </div>
          )}
        </div>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
