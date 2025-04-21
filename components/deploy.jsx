import { Code2, Database, UploadCloud, BadgeCheck } from "lucide-react";

const techStacks = {
  development: {
    noCode: ["HubSpot", "Airtable"],
    code: ["React", "Vue", "Django", "Solidity", "Python"],
  },
  deployment: ["Docker", "Kubernetes", "AWS"],
  storage: ["PostgreSQL", "MongoDB", "Airtable"],
};

export default function TryDeploySection() {
  return (
    <section className="bg-background text-foreground py-20 px-6">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-semibold">
          Tools I Use to Build and Ship
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Card Component */}
        {[
          {
            title: "Development",
            icon: <Code2 size={14} className="mr-1" />,
            content: (
              <>
                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    No Code
                  </p>
                  <ul className="space-y-1 text-sm">
                    {techStacks.development.noCode.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <BadgeCheck size={16} className="text-primary" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Code
                  </p>
                  <ul className="space-y-1 text-sm">
                    {techStacks.development.code.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <BadgeCheck size={16} className="text-primary" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ),
          },
          {
            title: "Storage",
            icon: <Database size={14} className="mr-1" />,
            content: (
              <ul className="space-y-1 text-sm">
                {techStacks.storage.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <BadgeCheck size={16} className="text-primary" />
                    {tech}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "Deployment",
            icon: <UploadCloud size={14} className="mr-1" />,
            content: (
              <ul className="space-y-1 text-sm">
                {techStacks.deployment.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <BadgeCheck size={16} className="text-primary" />
                    {tech}
                  </li>
                ))}
              </ul>
            ),
          },
        ].map(({ title, icon, content }) => (
          <div
            key={title}
            className="bg-card text-card-foreground rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-flex items-center bg-muted text-muted-foreground text-[0.7rem] font-semibold uppercase px-3 py-1 rounded-full tracking-wider mb-4">
              {icon}
              {title}
            </div>
            {content}
          </div>
        ))}
      </div>
    </section>
  );
}
