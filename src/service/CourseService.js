export default class CourseService {
    getCourse() {
        return fetch('data/course.json').then(res => res.json()).then(d => d.data);
    }
}