const conatainer = document.querySelector('#container');
const request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/name/bangladesh");
request.send();


// respones
request.addEventListener('load',function(){
   
    const [data] = JSON.parse(this.responseText);
    console.log(data.capital);
    const htmlData =
    `
    <div id="card">
            <article class="card">
                <div class="card-body">
                    <img src="${data.flag}" alt="" class="card-body-img" />
                    <h1 class="card-body-title">
                        ${data.name} <span></span>
                    </h1>
                    <p class="card-body-text">capital : ${data.capital}</p>
                </div>

                <div class="card-footer">
                    <div class="card-footer-social1">
                        <h3>${data.nativeName}</h3>
                        <p>Native Language</p>
                    </div>
                    <div class="card-footer-social2">
                        <h3>${data.population}</h3>
                        <p>Population</p>
                    </div>
                    <div class="card-footer-social3">
                        <h3>${data.demonym}</h3>
                        <p>Demonym</p>
                    </div>
                </div>
            </article>
        </div>
    `;
    conatainer.insertAdjacentHTML("afterbegin",htmlData);
})