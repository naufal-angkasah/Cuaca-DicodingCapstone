class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        border-radius: 5px;
        display: flex;
        top: 90px;
        position: sticky;
        margin: 40px auto;
        background-color: white;
      }
      
      .search-container > input {
        width: 80%;
        padding: 16px;
        border-radius: 4px 0 0 4px;
        border: 1px solid rgb(123, 129, 126);
        font-weight: bold;
        color: black;
      }
      
      
      .search-container > input:focus {
        outline: 0;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-container >  input::placeholder {
        color: grey;
        font-weight: normal;
      }
      
      .search-container > button {
        width: 25%;
        cursor: pointer;
        font-weight: bold;
        padding: 16px;
        background-color: rgb(123, 129, 126);
        color: white;
        border: 0;
        border-radius: 0 4px 4px 0;
        text-transform: capitalize;
      }

      .search-container > button:hover {
        font-weight: bolder;
        background-color: black;
        color: white;
        border: 0;
      }
      
      @media screen and (max-width: 600px){
        .search-container {
          flex-direction: initial;
          position: static;
        }
        
        .search-container > input {
          width: 90%;
          height: 45px;
        }
        
        .search-container > button {
          width: 40%;
          height: 45px;
        }
      }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Nama Kota " id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;
    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);