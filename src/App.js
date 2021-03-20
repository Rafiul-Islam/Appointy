import {BrowserRouter} from "react-router-dom";
import Navigations from "./navbar/navigations";
import Routers from "./navbar/routers";
import ScrollToTop from "./utils/scroll-to-top";

function App() {
    return (
        <div>

            <BrowserRouter>
                <ScrollToTop>
                    <Navigations/>
                    <Routers/>
                </ScrollToTop>
            </BrowserRouter>

        </div>
    );
}

export default App;
