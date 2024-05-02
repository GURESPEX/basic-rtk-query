import Router from "@/router/Router";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen col items-center bg-[#D9D9D9] overflow-auto">
        <div className="w-full max-w-screen-lg h-full p-20">
          <Router />
        </div>
      </div>
    </>
  );
};

export default App;
