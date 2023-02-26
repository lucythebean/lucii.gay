"use client";
export default function render() {
  function populate() {
    let val = "Remember to put the search params here!!";
    const display = document.createElement("p");
    display.innerText = val;
    const el = document.getElementById("terms");
    el.appendChild(display);
  }
  return (
    <>
      <div>
        <h1>Results:</h1>
        <div id="terms"></div>
        <button onClick={populate}>populate</button>
      </div>
    </>
  );
}
