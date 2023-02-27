"use client";
export default function render() {
  const display = async () => {
    const data = {
      folder: "character",
      query: "eula",
    };
    const response = await fetch("/api/searchGenshin", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json();
  };
  display().then((data) => {
    for (var i in data.keys) {
      const header = document.getElementById("terms");
      header.appendChild(
        (title = () => {
          let title = document.createElement("h1");
          title.innerText(data.keys[i]);
          return title;
        })
      );
      for (let o in data[data.keys[i]]) {
        const el = document.createElement("p");
        el.innerText = data[data.keys[i]][o];
        header.appendChild(el);
      }
    }
  });
  return (
    <>
      <div>
        <h1>Results:</h1>
        <div id="terms"></div>
      </div>
    </>
  );
}
