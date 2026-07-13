import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category) => (
        <div
          key={category.name}
          className="rounded-[14px] border border-border bg-surface p-6"
        >
          <h3 className="text-base font-semibold text-text">{category.name}</h3>
          <p className="mt-1 text-[13px] text-text-2">{category.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
