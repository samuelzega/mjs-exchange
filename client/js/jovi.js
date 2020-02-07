$(function(){
    $.ajax({
        url : 'http://localhost:3000/stocks/mostgainer',
        type : 'get',
        success : (result, status)=>{
            result.splice(5)
            result.forEach(stock => {
                $('#most-gainer-table').append(`
                <tr>
                    <td class="stock-card" id="${stock.ticker}" scope="row">${stock.companyName}</td>
                    <td>$${Math.floor(stock.price)}</td>
                    <td>${stock.changesPercentage}</td>
                </tr>
                `)
            });
        }
    })

    $.ajax({
        url : 'http://localhost:3000/stocks/mostactive',
        type : 'get',
        success : (result, status)=>{
            result.splice(5)
            result.forEach(stock => {
                $('#most-active-table').append(`
                <tr>
                    <td class="stock-card" id="${stock.ticker}" scope="row">${stock.companyName}</td>
                    <td>$${Math.floor(stock.price)}</td>
                    <td>${stock.changesPercentage}</td>
                </tr>
                `)
            });
        }
    })
    
    $.ajax({
        url : 'http://localhost:3000/stocks/topcurrencies',
        type : 'get',
        success : (result, status) =>{
            result.forEach(currency => {
                $('.currency').append(`
                <div class="card card-currency m-3 text-center shadow" style="width: 12rem;">
                    <div class="card-body">
                    <h5 class="card-title">${currency.from}-${currency.to}</h5>
                    <h5 class="card-title">${currency.value}</h5>
                    </div>
                </div>
                `)
            });
        }
    })

    $.ajax({
        url : 'http://localhost:3000/stocks/trendingnews',
        type : 'get',
        success : (result, status) => {
            result.articles.forEach(news => {
                $('#news-section').append(`
                <div class="card mb-3" style="max-width: 100%;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${news.urlToImage}" class="card-img" alt="image unvalaibale">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <a href="${news.url}">
                                    <h5 class="card-title">${news.title}</h5>
                                </a>
                                <p class="card-text">${news.content}</p>
                                <p class="card-text"><small class="text-muted">Published at ${moment(news.publishedAt).format("MMM Do YYYY")}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                `)
            })
        }
    })

    $(document).on('click', '.stock-card', function(){
        getStockDetail(this.id)
    })
})

function getStockDetail(id){
    $.ajax({
        url : `http://localhost:3000/stocks/profile/${id}`,
        type : 'get',
        success : (result,status)=>{
            $('#stock-details').empty()
            $('#news-section').hide()
            $('#stock-details').append(`
            <div class="col-12 border text-white" style="background-color: #343A40; color: white; ">
                <h1 class="p-3">${result.profile.companyName}</h1>
                <p class="pl-3 pr-3">${result.profile.website}</p>
                <p class="pl-3 pr-3">CEO : ${result.profile.ceo}</p>
                <p class="pl-3 pr-3">${result.profile.industry}</p>
                <p class="pl-3 pr-3">${result.profile.description}</p>
                <table class="table table-borderless table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Price</th>
                        <th scope="col">Beta</th>
                        <th scope="col">Average Vol</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Range</th>
                        <th scope="col">Changes</th>
                        <th scope="col">Changes %</th>
                        <th scope="col">Exchange</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>${result.profile.price}</td>
                        <td>${result.profile.beta}</td>
                        <td>${result.profile.volAvg}</td>
                        <td>${result.profile.mktCap}</td>
                        <td>${result.profile.range}</td>
                        <td>${result.profile.changes}</td>
                        <td>${result.profile.changesPercentage}</td>
                        <td>${result.profile.exchange}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            `).hide().fadeIn(1000)
        }
    })
}