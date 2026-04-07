import { motion } from "framer-motion";
import { ListTodo, FolderOpen, AlarmClock, Users, ArrowUpDown, Activity } from "lucide-react";

const features = [
  { icon: ListTodo, title: "Task Assignment", desc: "Create tasks, assign them to individuals or teams, and set deadlines with priority levels. Everyone knows what they're accountable for and when it's due." },
  { icon: FolderOpen, title: "Project Tracking", desc: "Organise tasks under projects with milestones and dependencies. Track progress across the full project lifecycle with board, list, and calendar views." },
  { icon: AlarmClock, title: "Deadline Management", desc: "Set due dates and reminders on every task. Get notified before deadlines approach and surface overdue items before they become blockers." },
  { icon: Users, title: "Team Collaboration", desc: "Comment on tasks, attach files, and tag teammates in context. Keep all discussion tied to the work itself rather than scattered across email threads." },
  { icon: ArrowUpDown, title: "Priority Management", desc: "Rank tasks by urgency and importance. Reorder your work queue with drag and drop, and make sure the highest-impact work always comes first." },
  { icon: Activity, title: "Progress Reports", desc: "Track completion rates, workload distribution, and time spent across teams and projects. Identify blockers early and keep stakeholders informed automatically." },
];

const Task = () => (
  <div>
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-satoshi font-medium mb-4 sm:mb-6">Rabos ERP — Module</span>
          <h1 className="font-melodrama text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground mb-4 sm:mb-6">Task</h1>
          <p className="font-satoshi text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Assign, track, and complete work across your organisation with a task management system built into the heart of your ERP.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Workflow Section */}
    <section className="py-14 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50/0 to-gray-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-white text-sm font-satoshi font-medium mb-4 text-muted-foreground shadow-sm">
              Process
            </span>
            <h2 className="font-melodrama text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-5">Task Workflow</h2>
            <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured pipeline that keeps every task visible, prioritised, and delivered on time across your organisation.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {features.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative flex flex-col md:flex-row items-center md:h-64"
                >
                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-[6px] border-gray-50 shadow-sm items-center justify-center z-10">
                    <step.icon size={24} className="text-primary" />
                  </div>

                  {/* Left Side Content */}
                  <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:hidden'}`}>
                    <div className="bg-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-card border border-border hover:shadow-elevated transition-all duration-300 relative z-20">
                      <div className="md:hidden w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                        <step.icon className="text-primary" size={24} />
                      </div>
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {!isEven && <span className="text-sm font-bold text-primary/50">0{i + 1}</span>}
                        <h3 className="font-melodrama text-lg sm:text-2xl font-bold text-foreground">{step.title}</h3>
                        {isEven && <span className="text-sm font-bold text-primary/50">0{i + 1}</span>}
                      </div>
                      <p className="font-satoshi text-sm sm:text-base text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Right Side Content */}
                  <div className={`flex-1 w-full md:w-1/2 ${!isEven ? 'md:pl-16 text-left' : 'md:hidden'}`}>
                    <div className="bg-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-card border border-border hover:shadow-elevated transition-all duration-300 relative z-20">
                      <div className="md:hidden w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                        <step.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-bold text-primary/50">0{i + 1}</span>
                        <h3 className="font-melodrama text-lg sm:text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="font-satoshi text-sm sm:text-base text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Task;
