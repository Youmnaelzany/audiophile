import Header from "@/components/Header";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header bgColor="black" />
      {children}
    </div>
  );
};
export default PagesLayout;
