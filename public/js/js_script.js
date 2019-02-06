function createGrid(x) 
{
	  var myGrid = document.getElementById("pickBurger");
    document.documentElement.style.setProperty("--colNum",x.length);
    console.log()
    console.log("length of columns = " + x.length);
	  for (burger in x)
  	{
        var burgerGrid = document.createElement("div");
  		  var currentBurger = x[burger];
        var burgerName = document.createElement("h3");
        var theText = document.createTextNode(currentBurger.name);
        burgerName.appendChild(theText);
        burgerGrid.appendChild(burgerName);
        
        var burgerPicture = document.createElement("IMG");
        burgerPicture.setAttribute("src", currentBurger.img);
        burgerPicture.setAttribute("width", "300");
        burgerPicture.setAttribute("height","300");
        burgerPicture.setAttribute("class","keyimg");
        burgerGrid.appendChild(burgerPicture);
        /*
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type","radio");
        checkBox.setAttribute("id","burgerpick");
        checkBox.setAttribute("name","burgerpick");
        checkBox.setAttribute("value",currentBurger.name);
        burgerGrid.appendChild(checkBox);
        */
        var burgerList = document.createElement("ul");
        var infoList = MenuItemInfoList(currentBurger);
        for(info in infoList)
        {
            
            var listItem = document.createElement("li");
            var listValue = document.createTextNode(infoList[info]);
            if (info == 3)
            {
                listItem.setAttribute("class","allergy");
            }
            listItem.appendChild(listValue);
            burgerList.appendChild(listItem);
            
        }
        burgerGrid.appendChild(burgerList)
        
        var checkBox = document.createElement("input");
        var checkLabel = document.createElement("label");
        checkLabel.setAttribute("id","burgerLabel");
        //checkLabel =
        checkLabel.innerHTML = "Order this burger?";
        //var checkName = document.createTextNode("please show");
        checkBox.setAttribute("type","checkbox");
        checkBox.setAttribute("id","burgerpick");
        checkBox.setAttribute("name","burgerpick");
        checkBox.setAttribute("value",currentBurger.name);
        //checkBox.innerHTML = "testing";
        //checkBox.appendChild(checkName);
        checkLabel.appendChild(checkBox);
        burgerGrid.appendChild(checkLabel);
        
        myGrid.appendChild(burgerGrid);
    }
}
function listItem(string, parent)
{
    var listItem = document.createElement("li");
    var listValue = document.createTextNode(string);
    listItem.appendChild(listValue);
    burgerList.appendChild(listItem); 
}
function MenuItemInfoList(x)
{
    return [x.price,x.gluten,x.lactose,x.kCal];
}

var myButton = document.getElementById("lastButton");
myButton.addEventListener("click", confirmation);
function confirmation()
{
    console.log("button clicked!");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var recipient = document.getElementById("recipient").value;
    var genderSelect = document.getElementsByName("gender");
    var gender;
    for (let counter = 0; counter < 3; counter++)
    {
        if (genderSelect[counter].checked)
        {
            gender = genderSelect[counter].value;
        }
    }
    var burgerOrders = document.getElementsByName("burgerpick")
    var orders = [];
    for (let counter = 0; counter < 3; counter++)
    {
        if (burgerOrders[counter].checked)
        {
            orders.push(burgerOrders[counter].value);
        }
    }
    if (name == "" || email == "" || street == "" || recipient == "" || genderSelect == "" || gender == undefined || orders.length == 0)
    {
        alert("Everything needs to be filled out");
        return false;
    }
    var arrAnswers = [name,email,street,recipient,gender];
    console.log(arrAnswers.concat(orders));
};

createGrid(food);




