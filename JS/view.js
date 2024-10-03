const app = document.getElementById("app");

updateView();

function updateView() {
  app.innerHTML = /*html*/ `
    <div class="btn-container">
      <button>Logg inn</button>
      <button>Bli medlem!</button>
    </div>
    <div class="logo-container">
      <h1>FuBu</h1>
      <p>For U By Us</p>
    </div>
    <footer>
      En dating app for kvinner - lagd av en mann
    </footer>
  `;
}
