import React from "react";
import { ScrollStory } from ".";
import { ScrollTo } from "../src/index";

const refDOM = React.createRef<HTMLDivElement>();
const mockData = {
  region: ["East", "West", "Central"],
  color: ["red", "green", "blue"],
  item: ["pencil", "paper", "pen", "globe", "cup", "candy"],
  qty: [1, 200, 3.2, 4, 5, 6.55, 7, 8]
};

ScrollStory.add("Scroll by Ref", () => (
  <div style={{ overflow: "auto", padding: 20 }}>
    <ScrollTo>
      {({ scroll }) => (
        <React.Fragment>
          <button
            type="button"
            onClick={() => scroll({ ref: refDOM, y: 700, smooth: true })}
          >
            Scroll Ref Down
          </button>

          <button
            type="button"
            style={{ marginLeft: 5 }}
            onClick={() => scroll({ ref: refDOM, y: 0, smooth: true })}
          >
            Scroll Ref Up
          </button>
        </React.Fragment>
      )}
    </ScrollTo>

    <div
      ref={refDOM}
      style={{
        marginTop: 20,
        background: "#F1F1F1",
        height: 1000,
        maxHeight: 300,
        overflow: "auto",
        position: "relative"
      }}
    >
      <div style={{ height: 1000, padding: 20 }}>
        <table>
          <thead>
            <tr>
              {Object.keys(mockData).map(key => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 40 }).map((_, i) => (
              <tr key={i}>
                {Object.keys(mockData).map(key => (
                  <td key={key + i}>
                    {mockData[key][i % mockData[key].length]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
));
