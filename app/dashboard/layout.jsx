import Navbar from "@/components/shared/Navbar";

const dashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default dashboardLayout;
