
function getTrending() {
    $.ajax({
        method: 'GET',
        url: `${url}/stocks/trendingnews`,
    })
    .done(response=>{
        console.log(response)
        // console.log(localStorage.token)
    })
    .fail(err=>{
        console.log(err);
    })
}