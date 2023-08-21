import { dashboardCounts } from "../constants";

const DCount = () => {
  return (
    <section className=" flex gap-4">
      {dashboardCounts.map((count, index) => (
        <div
          key={index}
          className="flex flex-1 border border-gray-300 p-10 rounded-2xl"
        >
          <p>{count.name}</p>
        </div>
      ))}
    </section>
  );
};

export default DCount;
