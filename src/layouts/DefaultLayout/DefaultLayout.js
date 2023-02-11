import Header from "./components/Header/Header";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="sidebar">
                    sidebar
                </div>
                <div className="content">
                    content
                </div>
            </div>
        </div>

    );
}

export default DefaultLayout;