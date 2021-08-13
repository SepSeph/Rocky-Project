
    function login () {
        let id = $('#input-id').val()
        if (id == '') {
            alert("Wrong information")
        } else {
            alert(id + "Welcome to Hebron Presbyterian Church College Group Website")
        }
    }

    function input_name () {
        let id = $('#input-name').val();
        if (id == '') {
            alert("Please enter your name");
        }

        let temp_html = `<li>${id}</li>`;

        $('#attend-name').append(temp_html);
    }

    function input_name_remove () {
        
        $('#attend-name').empty();   
    }

