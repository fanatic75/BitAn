import { Route } from "react-router-dom";
import Enter from "./pages/enter";
import Tour from "./pages/tour";
import { Welcome } from "./pages/welcome";

const Routes= () => {
    return (
        <>
            <Route exact path="/" component={Welcome}  />
            <Route exact path="/enter" component={Enter}  />
            <Route exact path="/tour" component={Tour}  />
        </>
    )
}

export default Routes;