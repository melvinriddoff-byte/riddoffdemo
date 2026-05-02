import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { getCourseById } from "@/data/courses";

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? getCourseById(courseId) : null;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-melodrama text-4xl font-bold mb-4">Course not found</h1>
          <Link to="/careers" className="text-primary hover:underline">
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  const rating = 4.7;
  const oldPrice = Math.round(course.priceLow * 3.4);
  const isBootcamp = "seats" in course;

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm">
              <Link to="/careers" className="text-primary hover:underline">
                Courses
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">{isBootcamp ? "Bootcamps" : "Self-Paced"}</span>
            </div>

            {/* Header */}
            <h1 className="font-melodrama text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4">
              {course.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              {course.fullDescription}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="font-semibold">{rating} rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold">{course.hours} hours</span>
              </div>
              {isBootcamp && "seats" in course && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{course.seats} seats available</span>
                </div>
              )}
              {"weeks" in course && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{course.weeks} weeks</span>
                </div>
              )}
            </div>

            {/* Course Image */}
            <div className="mb-8 rounded-lg overflow-hidden border border-border shadow-lg">
              <img src={course.image} alt={course.title} className="w-full h-96 object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Sector/Category */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="font-melodrama text-2xl font-bold text-foreground mb-4">Field</h2>
                <p className="text-lg text-muted-foreground">
                  {"sector" in course ? course.sector : course.category}
                </p>
              </motion.div>

              {/* Syllabus */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="font-melodrama text-2xl font-bold text-foreground mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.syllabus.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-white">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Outcomes */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="font-melodrama text-2xl font-bold text-foreground mb-6">Course Outcomes</h2>
                <div className="space-y-4">
                  {course.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-lg text-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Instructor */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h2 className="font-melodrama text-2xl font-bold text-foreground mb-4">Instructor</h2>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <p className="text-lg font-semibold text-foreground mb-2">{course.instructor}</p>
                  <p className="text-muted-foreground">Experienced professional with real-world expertise in this field</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-card border border-border rounded-lg p-8 shadow-lg">
                {/* Pricing */}
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-2">Price</p>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-melodrama text-4xl font-bold text-foreground">
                      ₹{course.priceLow.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{oldPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {isBootcamp ? "14-hour intensive" : "Self-paced, lifetime access"}
                  </p>
                </div>

                {/* Course Details */}
                <div className="space-y-4 mb-8 pb-8 border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Duration</p>
                    <p className="font-semibold text-foreground">
                      {course.hours} hours{" "}
                      {"weeks" in course && `(${course.weeks} weeks)`}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Format</p>
                    <p className="font-semibold text-foreground">
                      {isBootcamp ? "Live Bootcamp" : "Self-Paced"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Rating</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{rating}</span>
                    </div>
                  </div>
                </div>

                {/* Enroll Button */}
                <a
                  href={`https://ed.riddoff.com/courses/${course.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </a>

                {/* Back Link */}
                <Link
                  to="/careers"
                  className="w-full text-center py-3 rounded-lg border border-border text-foreground hover:bg-secondary hover:text-white transition-colors font-semibold"
                >
                  Back to Courses
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
