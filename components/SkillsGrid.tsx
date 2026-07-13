import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/Reveal";

export function SkillsGrid() {
  return (
    <div className="border-t border-border">
      {skillCategories.map((category, i) => (
        <Reveal key={category.name} delay={i * 0.06}>
          <div className="group grid gap-3 border-b border-border py-8 md:grid-cols-[260px_1fr] md:gap-10">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
                  {category.name}
                </h3>
              </div>
              <p className="mt-1.5 text-[13px] text-text-3">
                {category.description}
              </p>
            </div>
            <p className="self-center font-mono text-sm leading-loose text-text-2">
              {category.skills.map((skill, j) => (
                <span key={skill}>
                  {j > 0 && <span className="mx-3 text-accent-line">·</span>}
                  <span className="transition-colors hover:text-accent">
                    {skill}
                  </span>
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
