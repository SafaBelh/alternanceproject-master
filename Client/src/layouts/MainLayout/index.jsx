import Header from "./Header";
import Sidebar from "./Sidebar";


const MainLayout = ({ children }) => {
 
  return (
    <div className="container">
      <div className="main_layout">
        
        <Header />
        <div className="full_page_container">
          <Sidebar />
          <div className="full_page_wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
