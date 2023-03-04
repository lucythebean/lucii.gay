"use client";
import { useEffect } from "react";

export default function Render() {
  useEffect(() => {
    async function display() {
      console.log("display called!");
      const data = {
        folder: "character",
        query: "eula",
      };
      const response = await fetch(
        "/api/searchGenshin?" + new URLSearchParams(data)
      );
      return response.json();
    }
    display().then((data) => {
      for (var i in data.keys) {
        var header = document.getElementById("terms");
        let title = document.createElement("h1");
        title.innerHTML = data.keys[i];
        header.appendChild(title);

        for (let o in data[data.keys[i]]) {
          const el = document.createElement("p");
          el.innerText = data[data.keys[i]][o];
          header.appendChild(el);
        }
      }
    });
  }, []);
  return (
    <>
      <div>
        <h1>Results:</h1>
        <div id="terms"></div>
      </div>
    </>
  );
}
