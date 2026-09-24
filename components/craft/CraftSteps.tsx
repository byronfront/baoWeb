import { craftSteps } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

type CraftStepsProps = {
  columns?: 2 | 3;
  className?: string;
};

export function CraftSteps({ columns = 3, className }: CraftStepsProps) {
  return (
    <ol
      className={`grid gap-x-10 gap-y-12 sm:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : ""
      } ${className ?? ""}`}
    >
      {craftSteps.map(({ step, title, body }, i) => (
        <Reveal as="li" key={step} delay={i * 70} className="seam-t pt-6">
          <span className="text-label tabular-nums opacity-50">{step}</span>
          <h3 className="mt-4 font-display text-d5 font-normal leading-tight">
            {title}
          </h3>
          <p className="mt-2.5 max-w-[34ch] text-sm opacity-70 pretty">{body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
