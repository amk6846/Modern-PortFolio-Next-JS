"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/Canvas-Reveal-Effect";

const Approch = () => {
  return (
    <section className="w-full nokia:py-4 py-20">
      <h1 className="font-extrabold text-5xl text-center text-white">
        My <span className="text-purple-400">Approach</span>
      </h1>
      <div className="py-20 flex flex-col gap-10 lg:flex-row items-center justify-center w-full mx-auto px-8">
        <div className="rounded-2xl border-2 border-gray-800">
          <Card
            title="Planning And Strategy"
            icon={<AceternityIcon order="Phase 1" />}
            description="I plan and strategize to align project goals with clear steps, ensuring efficient execution and timely delivery of high-quality results."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
        </div>
        <div className="rounded-2xl border-2 border-gray-800">
          <Card
            title="Devolopment and progress update"
            icon={<AceternityIcon order="Phase 2" />}
            description="I keep everyone updated with regular progress reports, ensuring clear communication and quick problem-solving to keep projects on track.."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
        </div>
        <div className="rounded-2xl border-2 border-gray-800">
          <Card
            title="Development & Launch"
            icon={<AceternityIcon order="Phase 3" />}
            description="Focused on quality and efficiency, I handle development through to launch, ensuring smooth deployment and exceeding project goals."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, icon, children, description }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-4 -left-4 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-4 -left-4 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -top-4 -right-4 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-4 -right-4 dark:text-white text-white" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-medium group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-slate-700 mt-4  font-extralight group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div className="btnApp">
    <button className="relative inline-flex h-12 w-36 overflow-hidden rounded-3xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-slate-950 px-3 py-3 text-2xl font-extrabold text-white backdrop-blur-3xl">
        {order}
      </span>
    </button>
  </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approch;