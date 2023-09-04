export default function layout({ children }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-3xl font-bold ">Manage Career</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
