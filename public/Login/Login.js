 //#################################

// ㅇㅇ
// 
    
    
    // 랙 .....
    function login () {
        let id = $('#input-id').val()
        if (id == '') {
            alert("Wrong information")
        } else {
            alert(id + "님 Welcome to Hebron Church College Group Website")
        }
    }

     // ㅇㅁㄹㄴㅇㄹㅁㄴㅇ..ㅁㄴㅇㄹㅁㄴㅇㄹ
     // ㅔㅁㄱ므 ...
    function input_name () {
        let id = $('#input-name').val();
        if (id == '') {
            alert("Please enter your name");
        }

        let temp_html = `<li>${id}</li>`;

        $('#attend-name').append(temp_html);
    }

     //ㅓ ㅁㄴㅇㄹㅁㄴㅇ
    function input_name_remove () {
        
        $('#attend-name').empty();   
    }

