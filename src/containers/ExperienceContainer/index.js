import { CardComponent } from "../../components/card"

export const ExperienceContainer = ({ experiences }) => {
    return (
        <div className="experiences">
            <h2 className="text-title">Experiences</h2>
            <div className="experiences-grid">
                {
                    experiences.map((experience, index) => {
                        return(
                            <div key={'experience_' + index} className="experiences-grid-item">
                                <CardComponent information={experience}></CardComponent>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}