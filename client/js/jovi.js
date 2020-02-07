$(function(){
    $.ajax({
        url : 'http://localhost:3000/stocks/mostgainer',
        type : 'get',
        success : (result, status)=>{
            result.splice(5)
            result.forEach(stock => {
                $('#most-gainer-table').append(`
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
})