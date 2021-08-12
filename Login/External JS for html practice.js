
    function login () {
        let id = $('#input-id').val()
        if (id == '') {
            alert("다시 입력해주세요")
        } else {
            alert(id + "님 헤브론 교회 청년부 사이트에 오신 것을 환영합니다.")
        }
    }

    function name () {
        let id = $('#input-name').val();
        let temp_html = `<li>${id}</li>`

        $('attend-name').append(temp_html)

    }