import "./Datafusion.css";
import { dfCtx } from "../App";
import { useState } from "react";

interface History {
  output?: string;
  input: string;
  err?: string;
}

type PrintHistoryProps = { history: History[] };
type MyInputProps = {
  history: History[];
  setHistory: React.Dispatch<React.SetStateAction<History[]>>;
};

function PrintHistory({ history }: PrintHistoryProps) {
  return (
    <div>
      {history.reverse().map((historyIter) => {
        return (
          <div>
            <div className="query-div">
              <div style={{ paddingRight: "0.5rem", width: "fit-content" }}>
                Datafusion &gt;
              </div>
              <div>{historyIter.input}</div>
            </div>
            {historyIter.output && <div>{historyIter.output}</div>}
            {historyIter.err && <div>{historyIter.err}</div>}
          </div>
        );
      })}
    </div>
  );
}

function MyInput({ setHistory, history }: MyInputProps) {
  const [input, setInput] = useState<string>("");
  const [historyCursor, setHistoryCursor] = useState(-1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const result = dfCtx.execute_sql(input);
    result
      .then((r) => {
        setHistory([...history, { input: input, output: r }]);
      })
      .catch((e) => {
        setHistory([...history, { input: input, err: e }]);
      });
    setInput("");
    setHistoryCursor(-1);
    e.preventDefault();
  };

  return (
    <div className="input-div">
      <div style={{ paddingRight: "0.5rem", width: "fit-content" }}>
        Datafusion &gt;
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          tabIndex={0}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("event", e);
            setInput(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            console.log("key pressed", e.key);
            if (e.key == "ArrowUp") {
              const newHistCur = Math.min(
                historyCursor + 1,
                history.length - 1
              );
              setHistoryCursor(newHistCur);
              console.log("historycursor", history[newHistCur].input);
              setInput(history[newHistCur].input);
            }

            if (e.key == "ArrowDown") {
              const newHistCur = Math.min(historyCursor - 1, 0);
              setHistoryCursor(newHistCur);
              setInput(history[newHistCur].input);
            }
          }}
          onBlur={(e) => {
            if (e.relatedTarget === null) {
              e.target.focus();
            }
          }}
          autoFocus
        />
      </form>
    </div>
  );
}

function Datafusion() {
  const [history, setHistory] = useState<History[]>([]);

  return (
    <div className="datafusion-shell">
      <PrintHistory history={history} />
      <MyInput history={history} setHistory={setHistory} />
    </div>
  );
}

export default Datafusion;
