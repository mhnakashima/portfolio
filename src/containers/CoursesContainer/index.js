import { CardComponent } from "../../components/card"

export const CoursesContainer = ({ courses }) => {

    return (
        <div className="courses">
            <h2 className="text-title">Courses</h2>
            <div className="courses-grid mt4">
                {
                    courses.map((course, index) => {
                        return (
                            <div key={'course_' + index} className="courses-grid-item">
                                <CardComponent information={course}></CardComponent>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}