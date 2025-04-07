import "./Datafusion.css";

import Prism from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-funky.css";

import { dfCtx } from "../App";
import { useState, useEffect } from "react";

interface History {
  output?: string;
  input: string;
  err?: string;
}

type PrintHistoryProps = { history: History[] };
type PrintTableProps = { table: TableRow[] };
type MyInputProps = {
  history: History[];
  setHistory: React.Dispatch<React.SetStateAction<History[]>>;
};

interface TableRow {
  [key: string]: string | number;
}

function convertTableToJson(table: string): TableRow[] {
  const lines = table.split("\n").filter((line) => line.trim() !== "");
  const result: TableRow[] = [];
  let headers: string[] = [];

  for (const line of lines) {
    if (line.startsWith("+")) continue; // Skip separator lines

    if (line.startsWith("|")) {
      const columns = line
        .split("|")
        .slice(1, -1) // Remove empty first and last elements
        .map((col) => col.trim());

      if (headers.length === 0) {
        // First pipe line contains headers
        headers = columns;
      } else {
        // Subsequent pipe lines contain data
        const row: TableRow = {};
        columns.forEach((value, index) => {
          const key = headers[index];
          row[key] = parseValue(value);
        });
        result.push(row);
      }
    }
  }

  return result;
}

function parseValue(value: string): string | number {
  // Convert numeric values to numbers, keep others as strings
  const trimmedValue = value.trim();
  if (!trimmedValue) return "";

  const numericValue = Number(trimmedValue);
  return isNaN(numericValue) ? trimmedValue : numericValue;
}

function PrintHistory({ history }: PrintHistoryProps) {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div>
      {history.reverse().map((historyIter) => {
        return (
          <div>
            <div className="query-div">
              <div style={{ paddingRight: "0.5rem", width: "fit-content" }}>
                Datafusion &gt;
              </div>
              <code className="language-sql query-input">
                {historyIter.input}
              </code>
            </div>
            {/* {historyIter.output && (
              <div>
                <PrintTable table={convertTableToJson(historyIter.output)} />
              </div>
            )} */}
            {historyIter.output && <div>{historyIter.output}</div>}
            {historyIter.err && <div>{historyIter.err}</div>}
          </div>
        );
      })}
    </div>
  );
}

function PrintTable({ table }: PrintTableProps) {
  if (table.length === 0) return <div></div>;

  // let header = table[0];
  const keys: string[] = Object.keys(table[0]);

  return (
    <div>
      <div>
        {keys.map((v) => (
          <span>{v}</span>
        ))}
      </div>
      {table.map((row) => {
        console.log(row);
        return (
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {keys.map((key) => (
              <span>{row[key]}</span>
            ))}
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
        console.log(r);
        setHistory([...history, { input: input, output: r }]);
        console.log("convertTableToJson", convertTableToJson(r));
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
