import useSimpleAsync from "use-simple-async";
import { appWindow } from "@tauri-apps/api/webviewWindow";
import { Link } from "found";
import { Button } from "./generic/button";
import removeIcon from "./assets/cross.svg";
import { getPositions, removePosition } from "./rustUtils";

const ManagePositionsPage = () => {
  const [data, { retry }] = useSimpleAsync(getPositions);

  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <img src="/carrot.png" alt="A carrot logo" />
      <h1
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0
 mt-2 mb-3"
      >
        Manage positions
      </h1>
      <div className="h-80 max-w-md overflow-scroll  overflow-x-hidden">
        <table className="grid grid-cols-[2fr_2fr_2fr_1fr] text-left gap-x-3">
          <thead className="contents">
            <th className="sticky top-0 bg-slate-800">Name</th>
            <th className="sticky top-0 bg-slate-800">Height</th>
            <th className="sticky top-0 bg-slate-800">Shortcut</th>
            <th className="sticky top-0 bg-slate-800">Actions</th>
          </thead>
          {data?.saved_positions
            ? data?.saved_positions.map(({ name, value, shortcut }) => (
                <tbody className="contents" key={name}>
                  {/**
                   * TODO: Add a tooltip or some shit
                   */}
                  <td className="h-8 text-ellipsis overflow-hidden inline-block whitespace-nowrap max-w-xs">
                    {name}
                  </td>
                  <td className="h-8">{value}</td>
                  <td className="h-8">{shortcut}</td>
                  <td className="h-8 flex flex-row-reverse">
                    <img
                      onClick={async () => {
                        // TODO: use return value instead of retry
                        await removePosition(name);
                        retry();
                      }}
                      className="cursor-pointer"
                      src={removeIcon}
                      alt="Remove position icon"
                    />
                  </td>
                </tbody>
              ))
            : "Loading..."}
        </table>
      </div>
      <div className="w-full flex justify-between mt-3">
        <Link to="/new-position">
          <Button>New position</Button>
        </Link>
        <Button
          onClick={() => {
            appWindow.close();
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default ManagePositionsPage;
