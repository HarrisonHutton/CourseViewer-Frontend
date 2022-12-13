export interface CourseInfo {
    dpt_code: string;
    course_num: string;
    course_name: string;
    course_type_abbr: string;
    course_type: string;
    course_description: string;
    credits: string;
    grading: string;
    typically_offered: string[];
    requisites?: string | null;
}