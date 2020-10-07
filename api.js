function apiuse()
{
    const name =document.getElementById("name").value;
    var link = document.getElementById("image");
	link.setAttribute("src", `https://joeschmoe.io/api/v1/${name}`);

}
