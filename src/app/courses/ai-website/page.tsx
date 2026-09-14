import type { Metadata } from "next";
import { CourseDetail } from "@/components/CourseDetail";
import { getCourse } from "@/lib/content";

const course = getCourse("ai-website")!;

export const metadata: Metadata = {
  title: course.seoTitle,
  description: course.seoDescription,
};

export default function AiWebsiteCoursePage() {
  return <CourseDetail course={course} />;
}
