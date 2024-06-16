$(document).ready(function() {
  // Fetch user data from the backend
  axios.get('http://localhost:8080/api/usersinfo/')
    .then((response) => {
      const data = response.data;

      // Iterate over the user data and create table rows
      data.forEach((user) => {
        // Create a table row for each user
        const row = $('<tr>')
          .attr({
            'data-firstname': user.firstName,
            'data-lastname': user.lastName,
            'data-email': user.email,
            'data-toggle': 'modal',
            'data-target': '#userModal'
          })
          .append(
            $('<td>').text(user.firstName),
            $('<td>').text(user.lastName),
            $('<td>').text(user.email)
          );

        // Append the row to the user table
        $('#userTable').append(row);
      });

      // Handle click on table rows to show modal
      $('#userTable').on('click', 'tr', function() {
        // Retrieve data attributes from the clicked row
        const firstName = $(this).data('firstname');
        const lastName = $(this).data('lastname');
        const email = $(this).data('email');

        // Update modal content
        $('#modalFirstName').text(firstName);
        $('#modalLastName').text(lastName);
        $('#modalEmail').text(email);
      });
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
    });
});