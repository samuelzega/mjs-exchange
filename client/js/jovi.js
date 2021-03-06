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
                <td scope="row">${stock.companyName}</td>
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
        $.ajax({
            url : `http://localhost:3000/stocks/profile/${this.id}`,
            type : 'get',
            success : (result,status)=>{
                console.log(result)
            }
        })
    })
})