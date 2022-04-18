import { CardComponent } from "../../components/card";

export function FormationContainer({ formations }) {
    return (
        <div className="formation">
            <h2 className="text-title">Formation</h2>
            <div className="formation-grid mt4">
                {
                    formations.map((formation, index) => {
                        return (
                            <div key={'formation_' + index} className="formation-grid-item">
                                <CardComponent information={formation}></CardComponent>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}