import { useEffect } from "react/cjs/react.development";

export function FormationContainer({ formation }) {
    
    useEffect(() => {
        console.log(formation);
    })

    return (
        <div className="formation">
            <h2 className="text-title">Formation</h2>
            <div className="text">
                
            </div>
        </div>
    )
}