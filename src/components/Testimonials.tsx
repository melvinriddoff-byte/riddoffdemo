import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Riddoff transformed how we manage stock across our showroom locations. Real-time inventory tracking has eliminated overstock issues completely.",
    name: "Muhamed Binazim",
    role: "Managing Director",
    company: "@Alrams Furniture",
    initials: "MB",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote: "The sales module gave our team complete visibility into every deal pipeline. We closed 40% more deals in the first quarter alone.",
    name: "Ahamed Shan",
    role: "Founder",
    company: "@Figora",
    initials: "AS",
    color: "bg-violet-100 text-violet-700",
  },
  {
    quote: "Managing seasonal collections and vendor orders used to be chaos. With Riddoff, procurement is now fully automated and on-time.",
    name: "Shehla Mohamed",
    role: "CEO",
    company: "@Azara Fashion",
    initials: "SM",
    color: "bg-pink-100 text-pink-700",
  },
];

const CARD_OFFSET = 14;
const ROTATION_RANGE = 5;

const DeckCard = ({
  testimonial,
  index,
  total,
  onSendToBack,
}: {
  testimonial: typeof testimonials[0];
  index: number;
  total: number;
  onSendToBack: () => void;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotate slightly based on drag x
  const rotate = useTransform(x, [-200, 200], [-18, 18]);

  const stackOffset = (total - 1 - index) * CARD_OFFSET;
  const stackRotate = (total - 1 - index) * ROTATION_RANGE - (total - 1) * (ROTATION_RANGE / 2);
  const scale = 1 - (total - 1 - index) * 0.04;
  const isTop = index === total - 1;

  const handleDragEnd = (_: unknown, info: { offset: { x: number; y: number } }) => {
    const threshold = 80;
    if (Math.abs(info.offset.x) > threshold || Math.abs(info.offset.y) > threshold) {
      // Fly the card off screen then send to back
      const flyX = info.offset.x > 0 ? 600 : -600;
      const flyY = info.offset.y > 0 ? 400 : -400;
      animate(x, flyX, { duration: 0.3, ease: "easeOut" });
      animate(y, flyY, { duration: 0.3, ease: "easeOut" });
      setTimeout(() => {
        x.set(0);
        y.set(0);
        onSendToBack();
      }, 320);
    } else {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 25 });
      animate(y, 0, { type: "spring", stiffness: 300, damping: 25 });
    }
  };

  return (
    <motion.div
      style={{
        x: isTop ? x : 0,
        y: isTop ? y : stackOffset,
        rotate: isTop ? rotate : stackRotate,
        scale,
        zIndex: index,
        position: "absolute",
        cursor: isTop ? "grab" : "default",
      }}
      animate={{
        y: stackOffset,
        rotate: stackRotate,
        scale,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      drag={isTop}
      dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      whileDrag={{ cursor: "grabbing" }}
      className="w-[min(90vw,340px)] md:w-[420px] bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col gap-5 shadow-lg select-none"
    >
      {/* Stars */}
      <div className="flex text-amber-400 gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <p className="font-satoshi text-muted-foreground text-[15px] leading-relaxed italic flex-1">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-3 border-t border-border/50 pt-5 mt-auto">
        <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold font-satoshi flex-shrink-0 ${testimonial.color}`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="font-melodrama font-bold text-foreground text-[15px] leading-none mb-1">
            {testimonial.name}
          </p>
          <p className="font-satoshi text-[12px] text-muted-foreground">
            {testimonial.role}{" "}
            <span className="text-primary font-semibold">{testimonial.company}</span>
          </p>
        </div>
      </div>

      {isTop && (
        <p className="font-satoshi text-[11px] text-muted-foreground/50 text-center mt-1">
          Drag or swipe to see next
        </p>
      )}
    </motion.div>
  );
};

const Testimonials = () => {
  const [cards, setCards] = useState(testimonials);

  const sendToBack = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const top = newCards.pop()!;
      newCards.unshift(top);
      return newCards;
    });
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block border border-border text-muted-foreground px-4 py-1 rounded-full text-xs font-satoshi font-medium tracking-widest uppercase mb-5">
            Testimonial
          </span>
          <h2 className="font-melodrama text-3xl md:text-5xl font-bold text-foreground leading-snug">
            What people who work<br />
            with us think{" "}
            <span className="text-primary">about us?</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24 justify-center">
          {/* Card deck */}
          <div
            className="relative flex-shrink-0"
            style={{ width: "min(90vw, 340px)", height: 320 }}
          >
            {cards.map((t, i) => (
              <DeckCard
                key={t.name}
                testimonial={t}
                index={i}
                total={cards.length}
                onSendToBack={sendToBack}
              />
            ))}
          </div>

          {/* Side text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-center md:text-left"
          >
            <h3 className="font-melodrama text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trusted by teams across industries
            </h3>
            <p className="font-satoshi text-muted-foreground leading-relaxed mb-8">
              From furniture showrooms to fashion houses, businesses rely on Riddoff to run their operations every single day.
            </p>
            <div className="flex flex-col gap-3">
              {testimonials.map((t) => (
                <div key={t.name} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-satoshi flex-shrink-0 ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <span className="font-melodrama text-sm font-semibold text-foreground">{t.name}</span>
                    <span className="font-satoshi text-xs text-primary ml-2">{t.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
