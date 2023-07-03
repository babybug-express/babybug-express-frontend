import { FunctionComponent, ReactElement, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
    children?: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;