import EditProfile from "./EditProfile"

import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


const editHOCParams = WrappedComponent => props => {
    const params = useParams()
    const history = useHistory()

    return (
        <WrappedComponent {...props} params={params} history={history}/>
    )
}

export default editHOCParams(EditProfile)