const Tchat = class {
    constructor (bots) {
        this.el = document.querySelector('#app');
        this.bots = bots;
        
    }

    renderHeader () {
        return `
        <header>
            <nav class = "navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class ="navbar-brand mb-0 h1">Chatbot.IO</span>
                </div>
            </nav>
        </header>
        <main class ="container-fluid">
            <div class ="row">
        `;
    }

    renderContainer () {
        return `
        <main class ="container-fluid">
            <div class ="row">
            ${this.renderBotsList()}
            ${this.renderContentMessages()}
            </div>
        </main>
        `;
    }

    renderMessageSended(message) {
        const date = new Date ();
        return`
        <div class = "row mt-3">
        <div class ="col-6" ></div>
        <div class = "col-6">
            <div class ="card">
                <div class = "card-header bg-dark text-light">
                    <img width="80" src ="john Connor.jpg">
                    <span class = "ms-3 h4">John Connor</span>
                </div>
                <div class = "card-body">
                    <h5 class = "card-title">${date.toLocaleString()}</h5>
                    <p class = "card-text">§{message}</p>
                </div>
            </div>
        </div>
    </div>     
        `;

    }

    renderMessageReceived() {
        return `
        <div class ="row mt-3">
                            <div class  = "col-6">
                                <div class ="card">
                                    <div class ="card-header bg-dark text-light">
                                        <img width="80" src ="ter.jpg">
                                        <span class  ="ms-3 h4">Terminabot</span>
                                    </div>
                                    <div class ="card-body">
                                        <h5 class = "card-title"> 25 décembre 12:14</h5>
                                        <p class = "card-text"> PRout Prout Prout</p>
                                    </div>
                                </div>
                            </div>
                            <div class = "col-6"></div>
                        </div>
             `;
    }

    renderInputMessage() {
        return `
        <div id ="input-message" class ="row mt-3">
                      <div class ="col-12">
                          <form class ="row g-2">
                              <div class = "col-10">
                                  <input type="text" class ="form-control" placeholder ="your message">
                              </div>
                              <div class ="col-2">
                                  <div class ="d-grid">
                                      <button type ="submit" class ="btn btn-primary mb-3">${message}</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
        `;
    }

    renderContentMessages () {
        return `
        <section id="content-messages" class = "col-9">
                    <div id = "messages" class = "row"> </div>
                  ${this.renderInputMessage()}
        </section>
        `;
    }

    renderBotsList () {
        return `
        <section id ="bot-list" class ="col-3 pt-3 bg-dark text-light">
             ${this.bots.map ((bot) => this.renderBot (bot)).join('')}
        </section>
         `;
    }

    renderBot (data) {
        const {
            id,
            name,
            avatar,
            countMessage
         } = data;

        return `
        <div data-id = "${id} "class ="row">
        <div class = "col-3">
            <img width="80"  src = "${avatar}"  class = "rounded-circle border boder-dark border-2" alt = "${name}" />
        </div>
        <div class  ="col-7 pt-4">
             <span class = "h5">${name}</span>
         </div>
        <div class ="col-2 pt-4">
             <span class ="badge bg-primary rounded-pill">${countMessage}</span>
         </div>
     </div>
 <hr />
        `;

    }

    addCountMessage (el) {
       const badge = el.querySelector ('.badge');

       badge.textContent = parseInt (badge, textContent, 10) + 1;

    }

sendMessage () {

    const messagesEl = document.querySelector ('#messages');
    const inputEl = document.querySelector('#input-message input');
    const buttonEl = document.querySelector('#input-message button');

    buttonEl.addEventListener ('click', (e)=> {
        e.preventDefault();

        messagesEl.scrollTop = messagesEl.scrollHeight;

        messagesEl.innerHTML += this.renderMessageSended(inputEl.value);

        inputEl.value = '';
    });

}

    run () {
        this.el.innerHTML += this.renderHeader();
        this.el.innerHTML += this.renderContainer();

        this.sendMessage();

        //const els = document.querySelectorAll('#bot-list > div');

    }
};

export default Tchat;