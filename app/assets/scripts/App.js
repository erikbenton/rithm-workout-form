$(function()
{

	var $form = $("form");
	var $table = $("table");
	var $addButton = $(".add-btn");
	var $deleteButtons;


	// Listener for adding new workout to form
	$addButton.on("click", function(e)
	{

		var name = $form.find("input[type='text']").val();
		var rating = $form.find("input[type='number']").val();

		console.log(name, rating);

		addToTable(name, rating);

		resetForm();

		e.preventDefault();

	});

	// Resets the forms inputs
	function resetForm()
	{
		$form.find("input[type='text']").val("");
		$form.find("input[type='number']").val("");
	}

	// Adds the form contents to the table
	function addToTable(name, rating)
	{
		var html = $table.html();
		var deleteHtml = '<button type="button" class="btn btn-danger">Delete</button>'
		var htmlToAdd = "<tr><td>" + name + "</td><td>" + rating + "</td>";
		htmlToAdd += "<td>" + deleteHtml + "</td></tr>";
		$table.html(html + htmlToAdd);

		$deleteButtons = $(".btn.btn-danger");
		deleteListeners();

	}

	function deleteListeners( )
	{
		$deleteButtons.on("click", function(e)
		{
			$(e.target).parent().parent().parent().remove();
		});
	}


});