
    function login () {
        let id = $('#input-id').val()
        if (id == '') {
            alert("다시 입력해주세요")
        } else {
            alert(id + "님 헤브론 교회 청년부 사이트에 오신 것을 환영합니다.")
        }
    }

    function inputname () {
        let id = $('#input-name').val();
        if (id == '') {
            alert("이름을 입력하세요");
        }

        let temp_html = `<li>${id}</li>`;

        $('#attend-name').append(temp_html);
    }

    function inputname_remove () {
        
        $('#attend-name').empty();   
    }

