$(document).ready(function(){
	
	var countOfDateSelectors = 0;
	var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
	//hide the current date picker
	$('.formDate input').each(function(){
		countOfDateSelectors++;
		$(this).attr("value","xx/xx/xxxx");
		$(this).attr("data-dateCount", countOfDateSelectors);
		$(this).hide();
		$( "<div class='row'><div class='col-sm-4'><select id='dropdownMonth" + countOfDateSelectors +"' class='form-control dropdownListner'></select></div><div class='col-sm-4'><select id='dropdownDay" + countOfDateSelectors +"' class='form-control dropdownListner'></select></div><div class='col-sm-4'> <select id='dropdownYear" + countOfDateSelectors +"' class='form-control dropdownListner'></select></div></div>" ).insertAfter(this);
			
		
			var monthSelector = "#dropdownMonth" + countOfDateSelectors.toString();
				//month drop down	
			var monthValue = 0;
			$.each(["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ], function(index, value){

					if(index === 0)
					{
						$('div').find(monthSelector).append("<option>Month</option><option value='01'>January</option>");
					}
					if(index === 11)
					{
						$('div').find(monthSelector).append("<option value='12'>December</option>");
					}
					if(index != 0 && index != 11)
					{
						monthValue = index + 1;
						var formattedMonth = ("0" + monthValue).slice(-2);
						var optionString = "<option value='" + formattedMonth + "'>" + value + "</option>";
						$('div').find(monthSelector).append(optionString);
					}
				});
		
	
	});
	
	if(countOfDateSelectors > 0)
	{
		var c;
		for(c = 1; c <= countOfDateSelectors; c++)
		{
			
				//day drop down
			var daySelector = "#dropdownDay" + c;
			var i;
			for(i = 0; i < 32; i++)
			{
				if(i === 0)
				{
					var startDateDropdown = "<option>Day</option>";
					$('div').find(daySelector).append(startDateDropdown);
					
				}
				var formatedDate = ("0" + i).slice(-2);
				var dateStatement = "<option value='" + formatedDate +"'>" + i +"</option>";
				$('div').find(daySelector).append(dateStatement);
			}
			
				//year drop down
			var y;
			var yearSelector = "#dropdownYear" + c;
			var currentYear = (new Date).getFullYear();
			for(y =0; y < 100; y++)
			{
				if(y === 0)
				{
					$('div').find(yearSelector).append("<option>Year</option>");
				}
				var year = currentYear - y;
				var yearStatement = "<option value='" + year +"'>" + year +"</option>";
				$('div').find(yearSelector).append(yearStatement);
			}
		}	
	}

	$(".dropdownListner").change(function(){
		var selectedItem = $(this).attr('id');
		var selectedItemCount  = selectedItem.slice(0, -1);
		if(selectedItem.indexOf("Month") >= 0 )
		{	
			var currentValue = $(this).closest('.formDate').find('input').val();

			var dateArr = currentValue.split('/');
			dateArr[0] = $(this).find(":selected").val();
			
			var finalValue = dateArr.join("/");
			$(this).closest('.formDate').find('input').attr("value", finalValue);

		}
		if(selectedItem.indexOf("Day") >= 0 )
		{
			var currentValue = $(this).closest('.formDate').find('input').val();

			var dateArr = currentValue.split('/');
			dateArr[1] = $(this).find(":selected").val();
			
			var finalValue = dateArr.join("/");
			$(this).closest('.formDate').find('input').attr("value", finalValue);
		}
		if(selectedItem.indexOf("Year") >= 0 )
		{
			var currentValue = $(this).closest('.formDate').find('input').val();

			var dateArr = currentValue.split('/');
			dateArr[2] = $(this).find(":selected").val();
			
			var finalValue = dateArr.join("/");
			$(this).closest('.formDate').find('input').attr("value", finalValue);
		}

	})
	
});