import {getData,request} from '../ajaxRequestHelper.js';

// get and post functions
let post = (url,data)=>
{
	request(url,"POST",data).then(response=>{
		console.log(response);
	},error=>{console(error)});
}

let get = (url)=>
{
	request(url,"GET",null).then(response=>{
		console.log(response);
		return response;
	},error=>{console(error);return error});

}		
let fetchingData = (forms,table)=>
{
	for(var form in forms)
	{
		if(form!=null)
		{
			let url = "";// don't know
			let datas = get(url);
			for (data in datas)
			{
				table.innerHTML="<tr>";
				for(td in data)
				{
					table.innerHTML+="<td>"+ td + "</td>";
				}
				table.innerHTML+="</tr>";
			}
		}
	}
}	

document.addEventListener("DOMContentLoaded", (e)=> {
	// Dom variables
let addBtn = document.getElementById("addBtn");
let addOrganisationForm = document.getElementById("addOrganisation");
let addCountriesForm = document.getElementById("addCountries");
let addCitiesForm = document.getElementById("addCities");
let addRolesForm = document.getElementById("addRoles");
let addInterForm = document.getElementById("addInter");
let forms = [ addOrganisationForm,addCountriesForm,addCitiesForm,addRolesForm,addInterForm];
let table = document.getElementById("tableBody");
// fetching the datas
fetchingData(forms);


// listeners and triggers
 addBtn.addEventListener("click",()=>
 {
	for(form in forms)
	{
		if(form!=null)
		{
			let submitButton = document.getElementById("submitBtn");
			submitButton.addEventListener("click",()=>{
			post(form.getAttribute("action"),getData(form));
		});
		}
	}
});
    
  });
