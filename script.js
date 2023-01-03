var url_data ='https://api.openbrewerydb.org/breweries?page=15&per_page=50'

async function res_fetching(){
try{
    var url_fetch=await fetch(url_data)
    var res= await url_fetch.json()
    console.log(res);
    for(let i of res){
            console.log(i.name);
         var child_ele = document.createElement('p')
         child_ele.innerText= i.name
         document.querySelector('body').append(child_ele)

            console.log(i.brewery_type);
            var child_ele = document.createElement('p')
         child_ele.innerText= i.brewery_type
         document.querySelector('body').append(child_ele)
      
            console.log(i.address_2);
            var child_ele = document.createElement('p')
         child_ele.innerText= i.address_2
         document.querySelector('body').append(child_ele)
        
            console.log(i.address_3);
            var child_ele = document.createElement('p')
         child_ele.innerText= i.address_3
         document.querySelector('body').append(child_ele)
         
            console.log(i.website_url);
        var child_ele = document.createElement('p')
        child_ele.innerText= i.website_url
        document.querySelector('body').append(child_ele)
        
            console.log(i.phone);
        var child_ele = document.createElement('p')
        child_ele.innerText= i.phone
        document.querySelector('body').append(child_ele)
        
    }
}
catch(err){
console.log(err);
console.log(error);
}
  }
res_fetching()
