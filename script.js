function calc()
{
	var tariff  = document.getElementById("tariff");
	var month   = document.getElementById("month");
	var units   = document.getElementById("units");
	var amount=0;
switch(tariff.value)
{	
    case "INDUSTRY":
    {
	switch(month.value)
	{
		case "Bi-monthly":
		{
			if(units.value<=500)
				amount=parseFloat(units.value*4);
			else
				amount=parseFloat(units.value*4.6);
			break;
		}
		case "monthly":
		{
			if(units.value<=500)
				amount=parseFloat(units.value*4);
			else
				amount=parseFloat(units.value*4.6);
			break;
		}
	}
    }
    case "DOMESTIC":
    {
	switch(month.value)
	{
		case "Bi-monthly":
		{
			if(units.value<=100)
			{
				amount=parseInt(0);
			}
			else if(units.value<=200)
			{
				amount=parseFloat((units.value-100)*1.5+40);
			}
			else if(units.value<=500)
			{
				amount=parseFloat(100*2 +60);
				amount=parseFloat(units.value-200)*3+ amount;
			}
			else
			{
				amount=parseFloat(100*3.5 +100);
				amount=parseFloat(300*4.6)+amount;
				amount=parseFloat((units.value-500)*6.6)+amount;
			}
			break;
		}
		case "monthly":
		{
			if(units.value<=100)
			{
				amount=parseInt(0);
			}
			else if(units.value<=200)
			{
				amount=parseFloat((units.value-100)*1.5+20);
			}
			else if(units.value<=500)
			{
				amount=parseFloat(100*2 +30);
				amount=parseFloat(units.value-200)*3+ amount;
			}
			else
			{
				amount=parseFloat(100*3.5 +50);
				amount=parseFloat(300*4.6)+amount;
				amount=parseFloat((units.value-500)*6.6)+amount;
			}
			break;
		}
	}
    }
}
	document.getElementById("show").innerHTML=
	"<h1 class='text-center mb-5'>TAX INVOICE</h1><h2 class='text-center mb-5'>Amount :  Rs. "
+ amount+
	"</h2>";
}