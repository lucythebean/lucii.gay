"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Render() {
  useEffect(() => {
    async function Display() {
      console.log("display called!");
      const data = {
        folder: useSearchParams(folder),
        query: useSearchParams(query)
      }
      const response = await fetch(
        "/api/searchGenshin?" + new URLSearchParams(data)
      );
      return response.json();
    }
    Display().then((data) => {
      for (var i in data.keys) {
        var main = document.getElementById("main");
        let container = document.createElement("div");
        let title = document.createElement("h1");
        title.innerHTML = data.keys[i];
        container.appendChild(title);

        for (let o in data[data.keys[i]]) {
          const el = document.createElement("p");
          el.innerText = data[data.keys[i]][o];
          container.appendChild(el);
        }
        main.appendChild(container);
      }
    });
  }, []);
  return (
    <>
      <div>
        <h1>Results:</h1>
        <div id="main"></div>
      </div>
    </>
  );
}
